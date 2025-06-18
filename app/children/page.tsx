import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const children = [
  {
    name: "Grace",
    age: 8,
    dream: "Wants to become a teacher to help other children learn to read",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Samuel",
    age: 12,
    dream: "Dreams of becoming a doctor to help sick people in his community",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Joy",
    age: 6,
    dream: "Loves to sing and wants to share her songs with the world",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "David",
    age: 14,
    dream: "Wants to study engineering and build better homes for families",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Faith",
    age: 10,
    dream: "Dreams of opening her own bakery to feed hungry people",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Emmanuel",
    age: 9,
    dream: "Wants to become a farmer and grow food for his community",
    image: "/placeholder.svg?height=200&width=200",
  },
]

export default function Children() {
  return (
    <div className="min-h-screen bg-[#FFF8F2] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#8B4513] mb-6 font-serif">Our Children</h1>
          <p className="text-lg text-[#654321] max-w-2xl mx-auto leading-relaxed">
            Each child in our home has a story, a personality, and dreams that light up their eyes when they talk about
            the future. Your sponsorship helps turn those dreams into reality.
          </p>
        </div>

        <div className="bg-[#FDF2E9] p-6 rounded-lg mb-12 border-l-4 border-[#E4703C]">
          <p className="text-[#8B4513] font-serif italic text-lg">
            "Sponsorship isn't just about money—it's about showing a child that someone, somewhere, believes in their
            future."
          </p>
          <p className="text-[#654321] mt-2">— Maria, Founder</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {children.map((child, index) => (
            <Card key={index} className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <Image
                    src={child.image || "/placeholder.svg"}
                    alt={`${child.name}, age ${child.age}`}
                    width={150}
                    height={150}
                    className="rounded-full mx-auto mb-4 shadow-sm"
                  />
                  <h3 className="text-xl font-semibold text-[#8B4513] mb-1">{child.name}</h3>
                  <p className="text-[#E4703C] font-medium">Age {child.age}</p>
                </div>
                <p className="text-[#654321] text-center leading-relaxed mb-6 italic">{child.dream}</p>
                <Button className="w-full bg-[#E4703C] hover:bg-[#D4602C] text-white">Sponsor {child.name}</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <h2 className="text-2xl font-semibold text-[#8B4513] mb-4 font-serif">How Sponsorship Works</h2>
          <p className="text-[#654321] leading-relaxed mb-6 max-w-2xl mx-auto">
            For $50 a month, you provide a child with nutritious meals, school supplies, clothing, medical care, and
            most importantly—the knowledge that someone cares about their future. You'll receive updates and letters
            from your sponsored child throughout the year.
          </p>
          <Button className="bg-[#E4703C] hover:bg-[#D4602C] text-white px-8 py-3">Start Sponsoring Today</Button>
        </div>
      </div>
    </div>
  )
}
