import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-purple-500/30 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold mb-4">Gangadhar Hithesh Kumar</h3>
            <p className="text-sm text-muted-foreground">
              AI & Full-Stack Web Developer building intelligent automation tools and modern web applications.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/projects" className="hover:text-foreground transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-foreground transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold mb-4">Connect</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:contact@email.com" className="hover:text-foreground transition">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-500/30 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Gangadhar Hithesh kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
