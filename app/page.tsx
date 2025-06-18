import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF8F2]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1200"
            alt="Children playing and smiling at Big Heart Foundation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-2xl">
          <div className="bg-black bg-opacity-50 p-8 rounded-lg backdrop-blur-sm">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Welcome to Big Heart Foundation</h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">A loving home where every child matters.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/children">
                <Button className="bg-[#E4703C] hover:bg-[#D4602C] text-white py-3 px-6 rounded-lg text-lg">
                  Sponsor a Child
                </Button>
              </Link>
              <Link href="/projects">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#8B4513] py-3 px-6 rounded-lg text-lg"
                >
                  See Our Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#8B4513] mb-8 font-serif">Our Story</h2>
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <p className="text-lg text-[#654321] leading-relaxed mb-6 font-serif italic">
              "We started with just one room and a dream to give children a place where they could feel safe, loved, and
              hopeful about their future."
            </p>
            <p className="text-[#8B4513] text-base leading-relaxed">
              Big Heart Foundation began in 2018 when our founder, Maria, opened her doors to three children who had
              nowhere else to go. Today, we're home to 24 beautiful souls, each with their own story, dreams, and
              endless potential.
            </p>
          </div>
          <Link href="/about">
            <Button variant="outline" className="border-[#E4703C] text-[#E4703C] hover:bg-[#E4703C] hover:text-white">
              Read Our Full Story
            </Button>
          </Link>
        </div>
      </section>

      {/* Life Here Preview */}
      <section className="py-16 px-4 bg-[#FDF2E9]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#8B4513] mb-12 text-center font-serif">Life Here</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Children studying together"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#8B4513] mb-2">Learning Together</h3>
                  <p className="text-[#654321]">
                    Every evening, our children gather for homework time, helping each other with lessons and dreams.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Children playing in the yard"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#8B4513] mb-2">Playing & Growing</h3>
                  <p className="text-[#654321]">
                    Laughter fills our compound as children play, create, and simply enjoy being kids.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
