'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-foreground/60">
            Have questions or interested in joining? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 rounded-lg bg-primary/5 border border-primary/20 text-center">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-2xl mx-auto mb-4">
              📧
            </div>
            <h3 className="font-semibold text-foreground mb-2">Email</h3>
            <p className="text-foreground/60 text-sm">
              info@facosyndicate.gg
            </p>
          </div>

          <div className="p-6 rounded-lg bg-accent/5 border border-accent/20 text-center">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-2xl mx-auto mb-4">
              💬
            </div>
            <h3 className="font-semibold text-foreground mb-2">Discord</h3>
            <p className="text-foreground/60 text-sm">
              Join our community
            </p>
          </div>

          <div className="p-6 rounded-lg bg-primary/5 border border-primary/20 text-center">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-2xl mx-auto mb-4">
              🎮
            </div>
            <h3 className="font-semibold text-foreground mb-2">In-Game</h3>
            <p className="text-foreground/60 text-sm">
              Find us on Grand Mobile
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-xl border border-primary/20">
          {submitted && (
            <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-700 text-sm">
              Thank you! Your message has been sent successfully.
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-background border border-primary/30 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-background border border-primary/30 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-background border border-primary/30 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary transition-colors"
              placeholder="What&apos;s this about?"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 bg-background border border-primary/30 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary transition-colors resize-none"
              placeholder="Tell us more..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
