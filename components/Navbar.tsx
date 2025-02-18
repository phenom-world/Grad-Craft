import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              GrandCraft
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Blogs
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              FAQ
            </Link>
            {/* <ThemeSwitch /> */}
          </div>
        </div>
      </div>
    </nav>
  )
}
