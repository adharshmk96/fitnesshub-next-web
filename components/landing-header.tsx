"use client"

import { Button } from "@/components/ui/button"
import { Dumbbell, Menu, X } from "lucide-react"
import { useState } from "react"

export function LandingHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 font-semibold">
          <div className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-md">
            <Dumbbell className="size-5" />
          </div>
          <span className="text-lg">FitnessHub</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#home"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Home
          </a>
          <a
            href="#features"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Pricing
          </a>
          <a
            href="#about"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Contact
          </a>
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" asChild>
            <a href="/login">Login</a>
          </Button>
          <Button asChild>
            <a href="/signup">Get Started</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="size-6" />
          ) : (
            <Menu className="size-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container mx-auto flex flex-col gap-4 px-6 py-4">
            <a
              href="#home"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#features"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#about"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="ghost" asChild>
                <a href="/login">Login</a>
              </Button>
              <Button asChild>
                <a href="/signup">Get Started</a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
