"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <main className="min-h-screen pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-muted-foreground">
            I'd love to hear from you. Reach out and let's discuss your project or collaboration opportunity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-card border border-purple-500/30 text-foreground focus:outline-none focus:border-purple-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-card border border-purple-500/30 text-foreground focus:outline-none focus:border-purple-400"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-card border border-purple-500/30 text-foreground focus:outline-none focus:border-purple-400"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 rounded-lg bg-card border border-purple-500/30 text-foreground focus:outline-none focus:border-purple-400 resize-none"
                  placeholder="Your message..."
                />
              </div>
              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                Send Message
              </Button>
              {submitted && <p className="text-green-400 text-center">Thank you! I'll get back to you soon.</p>}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-card border border-purple-500/30 rounded-lg p-6">
              <h3 className="font-bold mb-4">Direct Contact</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <a
                    href="mailto:contact@email.com"
                    className="text-purple-400 hover:text-purple-300 transition break-all"
                  >
                    gangadharhithesh.13@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Location</p>
                  <p>Anywhere, Remote</p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-purple-500/30 rounded-lg p-6">
              <h3 className="font-bold mb-4">Social Links</h3>
              <div className="space-y-3">
                <a
                  href="https://github.com/Hithesh394"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-purple-400 hover:text-purple-300 transition"
                >
                  GitHub
                </a>
                <a
                  href="http://www.linkedin.com/in/hithesh3336"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-purple-400 hover:text-purple-300 transition"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
