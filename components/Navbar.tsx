import Link from 'next/link'

import { ThemeSwitch } from './ui/theme-switch'

export default function Navbar() {
  return (
    <nav className="border-b dark:bg-[#0A0A0B] dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              GrandCraft
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              Blogs
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              FAQ
            </Link>
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </nav>
  )
}
