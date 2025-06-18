import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    title: "School Supplies",
    description:
      "Last year, we built a small library and filled it with textbooks, notebooks, and pencils. Watching the children's faces light up when they got their first brand-new notebook was priceless.",
    image: "/placeholder.svg?height=300&width=400",
    testimonial: "Now I can do my homework properly and my teacher says my writing is getting better! - Grace, age 8",
  },
  {
    title: "Nutritious Meals",
    description:
      "We serve three meals a day in our communal kitchen. The children help with cooking and cleaning, learning life skills while we share stories around the table.",
    image: "/placeholder.svg?height=300&width=400",
    testimonial: "I love helping cook dinner. It makes me feel like I'm taking care of my family too. - Samuel, age 12",
  },
  {
    title: "Clean Water",
    description:
      "We installed a water filtration system that provides clean, safe drinking water for all our children. No more worrying about waterborne illnesses or long walks to fetch water.",
    image: "/placeholder.svg?height=300&width=400",
    testimonial: "The water tastes so good now, and I don't get sick anymore! - Joy, age 6",
  },
  {
    title: "Safe Shelter",
    description:
      "Our dormitories provide each child with their own bed, storage space, and a sense of privacy and security. We've painted murals on the walls that the children designed themselves.",
    image: "/placeholder.svg?height=300&width=400",
    testimonial: "I painted the sun on our wall because this place makes me feel warm inside. - Faith, age 10",
  },
]

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#FFF8F2] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#8B4513] mb-6 font-serif">Our Projects</h1>
          <p className="text-lg text-[#654321] max-w-2xl mx-auto leading-relaxed">
            Every project we undertake is guided by one simple question: "How will this help our children thrive?" Here
            are some of the ways your support makes a real difference.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white shadow-sm">
              <CardContent className="p-0">
                <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}>
                  <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? "md:order-1" : ""}`}>
                    <h2 className="text-2xl font-semibold text-[#8B4513] mb-4 font-serif">{project.title}</h2>
                    <p className="text-[#654321] leading-relaxed mb-6">{project.description}</p>
                    <div className="bg-[#FDF2E9] p-4 rounded-lg border-l-4 border-[#E4703C]">
                      <p className="text-[#8B4513] italic font-serif">"{project.testimonial}"</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-[#FDF2E9] rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-[#8B4513] mb-4 font-serif">What's Next?</h2>
          <p className="text-[#654321] leading-relaxed mb-6 max-w-2xl mx-auto">
            We're always dreaming of new ways to improve life for our children. Currently, we're saving up for a small
            playground and hoping to expand our library with more books in the local language.
          </p>
          <p className="text-[#8B4513] font-serif italic text-lg">
            "Every small step forward is a victory worth celebrating."
          </p>
        </div>
      </div>
    </div>
  )
}
