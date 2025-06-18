import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, BookOpen, Users, Home } from "lucide-react"

const ways = [
  {
    icon: Heart,
    title: "Visit Our Home",
    description:
      "Come spend time with our children. Play games, help with homework, or just share a meal with us. Your presence means more than you know.",
    action: "Plan a Visit",
  },
  {
    icon: BookOpen,
    title: "Bring Books & Supplies",
    description:
      "We always need children's books, school supplies, and educational materials. Even gently used items make a huge difference.",
    action: "See What We Need",
  },
  {
    icon: Users,
    title: "Volunteer Your Skills",
    description:
      "Teach English, help with cooking, lead art projects, or share your professional skills. We welcome all kinds of help.",
    action: "Volunteer With Us",
  },
  {
    icon: Home,
    title: "Fundraise in Your Community",
    description:
      "Organize a bake sale at church, run a marathon, or host a dinner party. Every dollar raised helps our children thrive.",
    action: "Start Fundraising",
  },
]

export default function GetInvolved() {
  return (
    <div className="min-h-screen bg-[#FFF8F2] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#8B4513] mb-6 font-serif">Get Involved</h1>
          <p className="text-lg text-[#654321] max-w-2xl mx-auto leading-relaxed mb-8">
            There are so many ways to be part of our Big Heart family. We don't need perfection—just love, creativity,
            and a willingness to show up for our children.
          </p>
          <div className="bg-[#FDF2E9] p-6 rounded-lg border-l-4 border-[#E4703C] max-w-3xl mx-auto">
            <p className="text-[#8B4513] font-serif italic text-lg">
              "The children always ask when our friends are coming back. You become part of their story, and they become
              part of yours."
            </p>
            <p className="text-[#654321] mt-2">— Maria, Founder</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {ways.map((way, index) => (
            <Card key={index} className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <way.icon className="h-8 w-8 text-[#E4703C] mr-3" />
                  <h2 className="text-xl font-semibold text-[#8B4513] font-serif">{way.title}</h2>
                </div>
                <p className="text-[#654321] leading-relaxed mb-6">{way.description}</p>
                <Button className="bg-[#E4703C] hover:bg-[#D4602C] text-white">{way.action}</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white shadow-sm">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-[#8B4513] mb-4 font-serif">For Local Friends</h2>
              <p className="text-[#654321] leading-relaxed mb-4">
                If you live nearby, you can make an immediate impact:
              </p>
              <ul className="text-[#654321] space-y-2 mb-6">
                <li>• Drop off fresh fruits or vegetables from your garden</li>
                <li>• Teach a skill like sewing, music, or sports</li>
                <li>• Help with transportation to medical appointments</li>
                <li>• Invite children to community events</li>
              </ul>
              <Button variant="outline" className="border-[#E4703C] text-[#E4703C] hover:bg-[#E4703C] hover:text-white">
                Connect Locally
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-[#8B4513] mb-4 font-serif">For International Friends</h2>
              <p className="text-[#654321] leading-relaxed mb-4">Distance doesn't limit your ability to help:</p>
              <ul className="text-[#654321] space-y-2 mb-6">
                <li>• Sponsor a child's education or medical needs</li>
                <li>• Send letters and care packages</li>
                <li>• Organize fundraising events in your community</li>
                <li>• Share our story on social media</li>
              </ul>
              <Button variant="outline" className="border-[#E4703C] text-[#E4703C] hover:bg-[#E4703C] hover:text-white">
                Help from Afar
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-[#FDF2E9] rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-[#8B4513] mb-4 font-serif">Ready to Start?</h2>
          <p className="text-[#654321] leading-relaxed mb-6 max-w-2xl mx-auto">
            The best time to help is right now. Whether you have five minutes or five hours, there's a way for you to
            make a difference in a child's life today.
          </p>
          <Button className="bg-[#E4703C] hover:bg-[#D4602C] text-white px-8 py-3">Contact Us Today</Button>
        </div>
      </div>
    </div>
  )
}
