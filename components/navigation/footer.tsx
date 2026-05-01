'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Services: [
      { label: 'Brand Identity', href: '#services' },
      { label: 'Digital Design', href: '#services' },
      { label: 'Marketing Design', href: '#services' },
      { label: 'Packaging Design', href: '#services' },
    ],
    Company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Work', href: '#portfolio' },
      { label: 'Process', href: '#process' },
      { label: 'Contact', href: '#contact' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  }

  return (
    <footer className="bg-card/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer content */}
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Brand section */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-accent">
                NEXTPIXEL
              </span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Premium graphic design for visionary brands.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Links sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-accent transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@nextpixelstudio.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors text-sm group"
                >
                  <Mail size={16} />
                  <span>hello@nextpixelstudio.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+1-555-design"
                  className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors text-sm group"
                >
                  <Phone size={16} />
                  <span>+1 (555) DESIGN</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin size={16} className="mt-0.5" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} NEXTPIXEL STUDIO. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm">
              Designed and developed with <span className="text-accent">❤</span> by NEXTPIXEL STUDIO
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
