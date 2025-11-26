import { Separator } from "@/components/ui/separator"
import { Dumbbell, Facebook, Instagram, Twitter } from "lucide-react"

export function LandingFooter() {
  return (
    <footer className="w-full border-t bg-muted/50">
      <div className="container mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <a href="/" className="flex items-center gap-2 font-semibold">
              <div className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-md">
                <Dumbbell className="size-5" />
              </div>
              <span>FitnessHub</span>
            </a>
            <p className="text-muted-foreground text-sm">
              Your partner in achieving fitness excellence.
            </p>
          </div>

          {/* Product Column */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-sm">Product</h3>
            <nav className="flex flex-col gap-3">
              <a
                href="#features"
                className="text-muted-foreground text-sm underline-offset-4 hover:underline"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-muted-foreground text-sm underline-offset-4 hover:underline"
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="text-muted-foreground text-sm underline-offset-4 hover:underline"
              >
                Testimonials
              </a>
              <a
                href="#faq"
                className="text-muted-foreground text-sm underline-offset-4 hover:underline"
              >
                FAQ
              </a>
            </nav>
          </div>

          {/* Company Column */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-sm">Company</h3>
            <nav className="flex flex-col gap-3">
              <a
                href="#about"
                className="text-muted-foreground text-sm underline-offset-4 hover:underline"
              >
                About
              </a>
              <a
                href="#blog"
                className="text-muted-foreground text-sm underline-offset-4 hover:underline"
              >
                Blog
              </a>
              <a
                href="#careers"
                className="text-muted-foreground text-sm underline-offset-4 hover:underline"
              >
                Careers
              </a>
              <a
                href="#contact"
                className="text-muted-foreground text-sm underline-offset-4 hover:underline"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Resources Column */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-sm">Resources</h3>
            <nav className="flex flex-col gap-3">
              <a
                href="#help"
                className="text-muted-foreground text-sm underline-offset-4 hover:underline"
              >
                Help Center
              </a>
              <a
                href="#community"
                className="text-muted-foreground text-sm underline-offset-4 hover:underline"
              >
                Community
              </a>
              <a
                href="#guides"
                className="text-muted-foreground text-sm underline-offset-4 hover:underline"
              >
                Guides
              </a>
              <a
                href="#api"
                className="text-muted-foreground text-sm underline-offset-4 hover:underline"
              >
                API
              </a>
            </nav>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-muted-foreground text-sm">
            © 2025 FitnessHub. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#privacy"
              className="text-muted-foreground text-sm underline-offset-4 hover:underline"
            >
              Privacy
            </a>
            <a
              href="#terms"
              className="text-muted-foreground text-sm underline-offset-4 hover:underline"
            >
              Terms
            </a>
            <a
              href="#cookies"
              className="text-muted-foreground text-sm underline-offset-4 hover:underline"
            >
              Cookies
            </a>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="size-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="size-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="size-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
