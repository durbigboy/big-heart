import Image from "next/image"

export default function About() {
  return (
    <div className="min-h-screen bg-[#FFF8F2] py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#8B4513] mb-12 text-center font-serif">Our Story</h1>

        {/* Founder Story */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=300"
                alt="Maria, founder of Big Heart Foundation"
                width={300}
                height={400}
                className="rounded-lg shadow-sm w-full"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-[#8B4513] mb-4 font-serif">Meet Maria</h2>
              <p className="text-[#654321] leading-relaxed mb-4 font-serif italic text-lg">
                "I never planned to run a children's home. But when I saw three little ones sleeping on the streets, I
                knew I couldn't just walk by."
              </p>
              <p className="text-[#8B4513] leading-relaxed">
                Maria started Big Heart Foundation in her own home in 2018. What began as temporary shelter for three
                children has grown into a loving family of 24. With help from the community and volunteers from around
                the world, we've created a place where children don't just survive—they thrive.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#8B4513] mb-8 text-center font-serif">What We Believe</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#FDF2E9] p-6 rounded-lg border-t-4 border-[#E4703C]">
              <h3 className="text-xl font-semibold text-[#8B4513] mb-3">Kindness First</h3>
              <p className="text-[#654321]">
                Every interaction is guided by love and understanding. We believe kindness heals wounds that words
                cannot reach.
              </p>
            </div>
            <div className="bg-[#FDF2E9] p-6 rounded-lg border-t-4 border-[#E4703C]">
              <h3 className="text-xl font-semibold text-[#8B4513] mb-3">Being Present</h3>
              <p className="text-[#654321]">
                We show up for our children—in their victories, their struggles, and their everyday moments that matter
                most.
              </p>
            </div>
            <div className="bg-[#FDF2E9] p-6 rounded-lg border-t-4 border-[#E4703C]">
              <h3 className="text-xl font-semibold text-[#8B4513] mb-3">Simple Love</h3>
              <p className="text-[#654321]">
                We don't need fancy programs or perfect systems. Just genuine care, warm meals, and a safe place to call
                home.
              </p>
            </div>
          </div>
        </div>

        {/* The Home */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-[#8B4513] mb-6 font-serif">Our Home</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="The Big Heart Foundation compound"
                width={400}
                height={300}
                className="rounded-lg shadow-sm w-full mb-4"
              />
            </div>
            <div>
              <p className="text-[#654321] leading-relaxed mb-4">
                Our compound sits on a quiet street where children's laughter mingles with the sounds of daily life. We
                have dormitories for boys and girls, a kitchen where we share meals together, and a study room where
                dreams take shape over homework and books.
              </p>
              <p className="text-[#654321] leading-relaxed">
                It's not fancy, but it's filled with love. Every corner holds memories of birthday celebrations,
                graduation parties, and quiet moments of comfort when a child needed someone to listen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
