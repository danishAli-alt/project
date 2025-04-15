import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">About Organize Your Event</h1>

        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden mb-8">
          <Image src="/placeholder.svg?height=800&width=1200" alt="Team photo" fill className="object-cover" />
        </div>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-6">
            At Organize Your Event, we're on a mission to revolutionize event planning in Pakistan. We believe that
            creating memorable events should be accessible, affordable, and stress-free for everyone. Our platform
            connects landowners, service providers, and customers in one seamless ecosystem, making event planning
            simpler than ever before.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="mb-6">
            Founded in 2023, Organize Your Event was born out of frustration with the fragmented event planning process
            across Pakistan's major cities including Lahore, Karachi, and Islamabad. Our founders experienced firsthand
            the challenges of coordinating between multiple vendors, venues, and service providers. They envisioned a
            platform where all aspects of event planning could be managed in one place, saving time, reducing stress,
            and ensuring better outcomes for all parties involved.
          </p>

          <h2 className="text-2xl font-semibold mb-4">What Makes Us Different</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>All-in-One Platform:</strong> We're the only platform in Pakistan that connects venues, service
              providers, and customers in one ecosystem.
            </li>
            <li>
              <strong>Transparent Pricing:</strong> No hidden fees or surprises. All prices are clearly displayed.
            </li>
            <li>
              <strong>Quality Assurance:</strong> We personally vet all venues and service providers before they join
              our platform.
            </li>
            <li>
              <strong>Seamless Communication:</strong> Our built-in messaging system ensures clear communication between
              all parties.
            </li>
            <li>
              <strong>Local Expertise:</strong> We understand the unique needs and customs of Pakistani events and
              celebrations.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <p className="mb-6">
            Our diverse team brings together expertise in technology, event planning, customer service, and local market
            knowledge. We're passionate about creating exceptional experiences and are dedicated to continuously
            improving our platform based on user feedback.
          </p>

          <div className="flex justify-center mt-8">
            <Button asChild className="bg-teal-600 hover:bg-teal-700">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
