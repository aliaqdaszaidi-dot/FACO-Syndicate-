import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-background/20">
          <div>
            <h3 className="text-2xl font-bold mb-4">FACO</h3>
            <p className="text-background/80 text-sm">
              A premier alliance for Grand Mobile RP, united in excellence and integrity.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <Link href="#about" className="hover:text-background transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#founders" className="hover:text-background transition-colors">
                  Founders
                </Link>
              </li>
              <li>
                <Link href="#families" className="hover:text-background transition-colors">
                  Families
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-background transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <button className="hover:text-background transition-colors">
                  Discord Server
                </button>
              </li>
              <li>
                <button className="hover:text-background transition-colors">
                  Apply to Join
                </button>
              </li>
              <li>
                <button className="hover:text-background transition-colors">
                  News & Updates
                </button>
              </li>
              <li>
                <button className="hover:text-background transition-colors">
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full bg-background/20 hover:bg-background/40 transition-colors flex items-center justify-center text-sm font-semibold">
                f
              </button>
              <button className="w-10 h-10 rounded-full bg-background/20 hover:bg-background/40 transition-colors flex items-center justify-center text-sm font-semibold">
                t
              </button>
              <button className="w-10 h-10 rounded-full bg-background/20 hover:bg-background/40 transition-colors flex items-center justify-center text-sm font-semibold">
                d
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-background/60">
          <p>
            &copy; 2024 FACO Syndicate. All rights reserved.
          </p>
          <p className="mt-4 sm:mt-0">
            Developed by <span className="font-semibold text-background">Zach_Escobar</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
