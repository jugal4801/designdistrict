'use client'

import Link from 'next/link'
import { Mail, Instagram } from 'lucide-react'

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
            <a
              href="https://www.instagram.com/something_exciting_is_coming?igsh=eDRnbXdqMTc3bzNn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-muted-foreground hover:text-accent transition-all duration-300 transform hover:scale-110"
            >
              <Instagram size={24} />
            </a>
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
              Contact
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
