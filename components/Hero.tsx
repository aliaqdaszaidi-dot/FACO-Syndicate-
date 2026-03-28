export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light via-background to-background opacity-40"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
          <span className="text-sm font-medium text-primary">Grand Mobile RP Alliance</span>
        </div>

        <h1 className="text-5xl sm:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
          Welcome to <span className="text-primary">FACO Syndicate</span>
        </h1>

        <p className="text-xl sm:text-2xl text-foreground/70 mb-12 max-w-2xl mx-auto text-balance">
          A premier alliance united by 20+ families in Grand Mobile RP. Excellence, honor, and unity drive every decision we make.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-3 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark transition-colors shadow-lg">
            Join Us
          </button>
          <button className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors">
            Learn More
          </button>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-primary/20">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">20+</div>
            <div className="text-foreground/60 text-sm">United Families</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">4</div>
            <div className="text-foreground/60 text-sm">Visionary Founders</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">∞</div>
            <div className="text-foreground/60 text-sm">Legacy Impact</div>
          </div>
        </div>
      </div>
    </section>
  )
}
