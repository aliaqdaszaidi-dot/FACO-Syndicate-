'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-primary/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-bold text-primary hover:text-primary-dark transition-colors">
            FACO
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium">
              About
            </Link>
            <Link href="#founders" className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium">
              Founders
            </Link>
            <Link href="#families" className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium">
              Families
            </Link>
            <Link href="#contact" className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium">
              Contact
            </Link>
          </div>
        </div>

        <button
          className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden border-t border-primary/10 px-4 py-4 space-y-2">
          <Link href="#about" className="block text-foreground/70 hover:text-primary transition-colors text-sm font-medium py-2">
            About
          </Link>
          <Link href="#founders" className="block text-foreground/70 hover:text-primary transition-colors text-sm font-medium py-2">
            Founders
          </Link>
          <Link href="#families" className="block text-foreground/70 hover:text-primary transition-colors text-sm font-medium py-2">
            Families
          </Link>
          <Link href="#contact" className="block text-foreground/70 hover:text-primary transition-colors text-sm font-medium py-2">
            Contact
          </Link>
        </div>
      )}
    </header>
  )
}
