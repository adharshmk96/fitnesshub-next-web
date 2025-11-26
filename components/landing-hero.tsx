import { Button } from "@/components/ui/button"

export function LandingHero() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40">
      <div className="container mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex flex-col items-center text-center gap-8">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Modern SaaS Platform for Seamless Gym Management
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg md:text-xl">
            Streamline daily operations, track client fees and workouts, and
            enhance member experience. The complete fitness club management
            software for gyms and trainers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <a href="/signup">Start Free Trial</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#features">See How It Works</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
