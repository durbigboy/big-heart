"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Our Children", href: "/children" },
    { name: "Projects", href: "/projects" },
    { name: "Get Involved", href: "/get-involved" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav className="bg-white shadow-sm border-b border-[#E4703C]/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-[#E4703C]" />
            <span className="text-xl font-bold text-[#8B4513] font-serif">Big Hearts Foundation</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[#8B4513] hover:text-[#E4703C] transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-[#E4703C] hover:bg-[#D4602C] text-white">Sponsor Now</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#8B4513] hover:text-[#E4703C] transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-[#E4703C]/20">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-[#8B4513] hover:text-[#E4703C] transition-colors duration-200 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button className="w-full bg-[#E4703C] hover:bg-[#D4602C] text-white">Sponsor Now</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
