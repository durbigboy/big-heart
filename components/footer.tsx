import Link from "next/link"
import { Heart, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#8B4513] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-[#E4703C]" />
              <span className="text-xl font-bold font-serif">Big Hearts Foundation</span>
            </div>
            <p className="text-[#F5DEB3] leading-relaxed mb-4">
              A loving home where every child matters. We provide safety, education, and hope to children who need it
              most, creating a family built on love and kindness.
            </p>
            <p className="text-[#E4703C] font-serif italic">
              "Every child deserves to know they are loved and valued."
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-serif">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-[#F5DEB3] hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/children" className="text-[#F5DEB3] hover:text-white transition-colors">
                  Sponsor a Child
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-[#F5DEB3] hover:text-white transition-colors">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="text-[#F5DEB3] hover:text-white transition-colors">
                  Get Involved
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-serif">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-[#E4703C] mr-2" />
                <span className="text-[#F5DEB3] text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-[#E4703C] mr-2" />
                <span className="text-[#F5DEB3] text-sm">hello@bigheartfoundation.org</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 text-[#E4703C] mr-2" />
                <span className="text-[#F5DEB3] text-sm">Visit us anytime</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#A0522D] mt-8 pt-8 text-center">
          <p className="text-[#F5DEB3] text-sm">© 2024 Big Hearts Foundation. Made with love for our children.</p>
        </div>
      </div>
    </footer>
  )
}
