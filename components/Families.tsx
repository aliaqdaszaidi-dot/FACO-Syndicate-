export default function Families() {
  const families = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `Family ${String(i + 1).padStart(2, '0')}`,
    members: Math.floor(Math.random() * 8) + 3,
  }))

  return (
    <section id="families" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-primary-light/5 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Families</span>
          </h2>
          <p className="text-lg text-foreground/60">
            A strong alliance built on 20+ powerful families
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {families.map((family) => (
            <div
              key={family.id}
              className="group relative p-6 rounded-lg bg-background border border-primary/20 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              
              <div className="relative space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {family.name}
                    </h3>
                    <p className="text-sm text-foreground/60 mt-1">
                      {family.members} Members
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-colors">
                    ⚔️
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <div className="h-1 flex-1 bg-primary/30 rounded-full group-hover:bg-primary transition-colors"></div>
                  <div className="h-1 flex-1 bg-primary/30 rounded-full group-hover:bg-primary transition-colors"></div>
                  <div className="h-1 flex-1 bg-primary/20 rounded-full"></div>
                </div>

                <button className="w-full py-2 text-sm font-medium text-primary hover:bg-primary/10 rounded transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/20 text-center">
          <p className="text-lg text-foreground mb-4">
            Want your family to be part of FACO Syndicate?
          </p>
          <button className="px-8 py-3 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark transition-colors">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  )
}
