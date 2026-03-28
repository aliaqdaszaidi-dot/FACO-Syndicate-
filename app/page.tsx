import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Founders from '@/components/Founders'
import Families from '@/components/Families'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <About />
      <Founders />
      <Families />
      <Contact />
      <Footer />
    </main>
  )
}
