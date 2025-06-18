import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#FFF8F2] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#8B4513] mb-6 font-serif">Contact Us</h1>
          <p className="text-lg text-[#654321] max-w-2xl mx-auto leading-relaxed">
            We'd love to hear from you! Whether you want to visit, volunteer, sponsor a child, or just say hello, don't
            hesitate to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white shadow-sm">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-[#8B4513] mb-6 font-serif">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-[#8B4513] mb-2">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      type="text"
                      className="border-[#E4703C]/30 focus:border-[#E4703C]"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-[#8B4513] mb-2">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      type="text"
                      className="border-[#E4703C]/30 focus:border-[#E4703C]"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#8B4513] mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    className="border-[#E4703C]/30 focus:border-[#E4703C]"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#8B4513] mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    className="border-[#E4703C]/30 focus:border-[#E4703C]"
                    placeholder="What would you like to talk about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#8B4513] mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    rows={5}
                    className="border-[#E4703C]/30 focus:border-[#E4703C]"
                    placeholder="Tell us how you'd like to help or what questions you have..."
                  />
                </div>
                <Button className="w-full bg-[#E4703C] hover:bg-[#D4602C] text-white py-3">Send Message</Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-[#8B4513] mb-6 font-serif">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-[#E4703C] mr-3" />
                    <div>
                      <p className="text-[#8B4513] font-medium">Phone</p>
                      <p className="text-[#654321]">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-[#E4703C] mr-3" />
                    <div>
                      <p className="text-[#8B4513] font-medium">Email</p>
                      <p className="text-[#654321]">hello@bigheartfoundation.org</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-[#E4703C] mr-3" />
                    <div>
                      <p className="text-[#8B4513] font-medium">WhatsApp</p>
                      <p className="text-[#654321]">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-[#8B4513] mb-4 font-serif">Visit Us</h3>
                <p className="text-[#654321] leading-relaxed mb-4">
                  We welcome visitors! Our home is located on a quiet street where you'll hear children's laughter and
                  see the beautiful murals they've painted on our walls.
                </p>
                <p className="text-[#8B4513] font-medium mb-2">Best times to visit:</p>
                <ul className="text-[#654321] space-y-1">
                  <li>• Weekday afternoons (after school)</li>
                  <li>• Saturday mornings (play time)</li>
                  <li>• Sunday evenings (family dinner)</li>
                </ul>
              </CardContent>
            </Card>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Children waving at the gate of Big Heart Foundation"
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-[#654321] italic text-center">
                  "Come as you are—our children can't wait to meet you!"
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-[#FDF2E9] rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-[#8B4513] mb-4 font-serif">Response Time</h2>
          <p className="text-[#654321] leading-relaxed max-w-2xl mx-auto">
            We try to respond to all messages within 24-48 hours. If you need immediate assistance or have an urgent
            matter, please call or WhatsApp us directly.
          </p>
        </div>
      </div>
    </div>
  )
}
