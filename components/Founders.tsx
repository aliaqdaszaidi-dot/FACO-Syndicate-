export default function Founders() {
  const administrators = [
    {
      name: 'Zach Escobar',
      title: 'Chief Administrator',
      description: 'Leading the strategic direction and administrative operations of FACO Syndicate.',
    },
    {
      name: 'Takshak',
      title: 'Ex Chief Administrator',
      description: 'Former Chief Administrator, continuing to guide the organization&apos;s legacy.',
    },
  ]

  const founders = [
    {
      name: 'Pritam Thode',
      title: 'Founder',
      description: 'Visionary leader who established the foundational values and structure of FACO Syndicate.',
    },
    {
      name: 'Mehedy Hassan',
      title: 'Founder',
      description: 'Strategic mind behind the alliance&apos;s expansion and organizational development.',
    },
    {
      name: 'Roki Freidman',
      title: 'Founder',
      description: 'Ensures smooth operations and coordination among all member families.',
    },
    {
      name: 'Kushal Debnath',
      title: 'Founder & Family Manager',
      description: 'Dedicated to managing family relationships and organizational growth.',
    },
  ]

  return (
    <section id="founders" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Meet Our <span className="text-primary">Leadership</span>
          </h2>
          <p className="text-lg text-foreground/60">
            A dedicated team leading FACO Syndicate towards excellence
          </p>
        </div>

        {/* Administrators Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Administration</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 justify-center max-w-2xl mx-auto">
            {administrators.map((admin, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative p-6 space-y-4">
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center text-2xl font-bold text-background group-hover:scale-110 transition-transform duration-300">
                    {admin.name.charAt(0)}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {admin.name}
                    </h3>
                    <p className="text-sm text-accent font-semibold mt-1">
                      {admin.title}
                    </p>
                  </div>

                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {admin.description}
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

        {/* Founders Section */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Founders</h3>
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
      </div>
    </section>
  )
}
