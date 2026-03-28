export default function Founders() {
  const founders = [
    {
      name: 'Pritam Thode',
      title: 'Co-Founder & Leader',
      description: 'Visionary leader who established the foundational values and structure of FACO Syndicate.',
    },
    {
      name: 'Mehedy Hassan',
      title: 'Co-Founder & Strategic Director',
      description: 'Strategic mind behind the alliance&apos;s expansion and organizational development.',
    },
    {
      name: 'Roki',
      title: 'Co-Founder & Operations Head',
      description: 'Ensures smooth operations and coordination among all member families.',
    },
    {
      name: 'Sandeep',
      title: 'Co-Founder & Community Manager',
      description: 'Dedicated to building and nurturing the FACO Syndicate community.',
    },
  ]

  return (
    <section id="founders" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Meet Our <span className="text-primary">Founders</span>
          </h2>
          <p className="text-lg text-foreground/60">
            Four visionaries united in a mission to create something extraordinary
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative p-6 space-y-4">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center text-2xl font-bold text-background group-hover:scale-110 transition-transform duration-300">
                  {founder.name.charAt(0)}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {founder.name}
                  </h3>
                  <p className="text-sm text-accent font-semibold mt-1">
                    {founder.title}
                  </p>
                </div>

                <p className="text-sm text-foreground/70 leading-relaxed">
                  {founder.description}
                </p>

                <div className="pt-4 border-t border-primary/20 flex gap-3">
                  <button className="w-8 h-8 rounded-full bg-primary/10 hover:bg-primary hover:text-background transition-colors flex items-center justify-center text-sm">
                    f
                  </button>
                  <button className="w-8 h-8 rounded-full bg-primary/10 hover:bg-primary hover:text-background transition-colors flex items-center justify-center text-sm">
                    t
                  </button>
                  <button className="w-8 h-8 rounded-full bg-primary/10 hover:bg-primary hover:text-background transition-colors flex items-center justify-center text-sm">
                    d
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
