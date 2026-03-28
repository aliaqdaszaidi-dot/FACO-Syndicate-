export default function About() {
  return (
    <section id="about" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-primary-light/5 to-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            About <span className="text-primary">FACO Syndicate</span>
          </h2>
          <p className="text-lg text-foreground/60">
            Defining excellence in Grand Mobile RP
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="p-6 bg-primary/5 rounded-xl border border-primary/20 hover:border-primary/40 transition-colors">
              <h3 className="text-xl font-bold text-primary mb-3">Our Mission</h3>
              <p className="text-foreground/70">
                FACO Syndicate is dedicated to creating the most organized, respected, and impactful alliance in Grand Mobile RP. We foster brotherhood and sisterhood among our families while maintaining the highest standards of excellence.
              </p>
            </div>

            <div className="p-6 bg-accent/5 rounded-xl border border-accent/20 hover:border-accent/40 transition-colors">
              <h3 className="text-xl font-bold text-accent mb-3">Our Values</h3>
              <ul className="space-y-2 text-foreground/70">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">→</span>
                  <span><strong>Integrity:</strong> Honesty in all dealings</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">→</span>
                  <span><strong>Unity:</strong> Strength in togetherness</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">→</span>
                  <span><strong>Excellence:</strong> Excellence in everything</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">→</span>
                  <span><strong>Loyalty:</strong> Commitment to family</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-8 border border-primary/20">
              <div className="space-y-4">
                <div className="flex items-center gap-4 pb-4 border-b border-primary/20">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-2xl text-background">👥</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">20+ Families</div>
                    <div className="text-sm text-foreground/60">Strong community base</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 pb-4 border-b border-primary/20">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-2xl text-background">⚔️</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Established Organization</div>
                    <div className="text-sm text-foreground/60">Well-structured hierarchy</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 pb-4 border-b border-primary/20">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-2xl text-background">🎖️</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Respected Reputation</div>
                    <div className="text-sm text-foreground/60">Known for reliability</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-2xl text-background">🌟</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Growing Community</div>
                    <div className="text-sm text-foreground/60">Continuously expanding</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
