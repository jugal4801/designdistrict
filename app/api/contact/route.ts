import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    const body = await request.json()
    const { fullName, mobile, email, details } = body

    // Validate required fields
    if (!fullName || !mobile || !email || !details) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send email using Resend
    const response = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'designdistrict749@gmail.com',
      subject: `New Inquiry from ${fullName} - NEXTPIXEL STUDIO`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b6eb5;">New Inquiry Received</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mobile:</strong> ${mobile}</p>
            <p><strong>Inquiry Details:</strong></p>
            <p style="white-space: pre-wrap; color: #333;">${details}</p>
          </div>
          <p style="color: #666; font-size: 14px;">This message was sent from your website's contact form.</p>
        </div>
      `,
    })

    if (response.error) {
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Email API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
