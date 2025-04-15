import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, MapPin, MessageSquare } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-50 to-cyan-50 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Your Perfect Event Starts Here</h1>
              <p className="text-lg text-gray-600">
                Connect with landowners and service providers to create memorable events across Pakistan in one seamless
                platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
                  <Link href="/browse">
                    Browse Venues <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/auth/signup">Get Started</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Event venue"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">How It Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* For Landowners */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-teal-700">For Landowners</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-teal-100 p-2 rounded-full mr-3 mt-1">
                    <MapPin className="h-4 w-4 text-teal-700" />
                  </div>
                  <span>List your property with detailed information</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal-100 p-2 rounded-full mr-3 mt-1">
                    <Calendar className="h-4 w-4 text-teal-700" />
                  </div>
                  <span>Manage availability and bookings</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal-100 p-2 rounded-full mr-3 mt-1">
                    <MessageSquare className="h-4 w-4 text-teal-700" />
                  </div>
                  <span>Connect with service providers and customers</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="mt-6 w-full">
                <Link href="/auth/signup?role=landowner">Register as Landowner</Link>
              </Button>
            </div>

            {/* For Service Providers */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-teal-700">For Service Providers</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-teal-100 p-2 rounded-full mr-3 mt-1">
                    <MapPin className="h-4 w-4 text-teal-700" />
                  </div>
                  <span>Showcase your services to potential clients</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal-100 p-2 rounded-full mr-3 mt-1">
                    <Calendar className="h-4 w-4 text-teal-700" />
                  </div>
                  <span>Manage your schedule and service requests</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal-100 p-2 rounded-full mr-3 mt-1">
                    <MessageSquare className="h-4 w-4 text-teal-700" />
                  </div>
                  <span>Collaborate with venues for seamless events</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="mt-6 w-full">
                <Link href="/auth/signup?role=provider">Register as Provider</Link>
              </Button>
            </div>

            {/* For Customers */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-teal-700">For Customers</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-teal-100 p-2 rounded-full mr-3 mt-1">
                    <MapPin className="h-4 w-4 text-teal-700" />
                  </div>
                  <span>Find the perfect venue for your event</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal-100 p-2 rounded-full mr-3 mt-1">
                    <Calendar className="h-4 w-4 text-teal-700" />
                  </div>
                  <span>Book services and venues in one place</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal-100 p-2 rounded-full mr-3 mt-1">
                    <MessageSquare className="h-4 w-4 text-teal-700" />
                  </div>
                  <span>Communicate directly with all parties</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="mt-6 w-full">
                <Link href="/auth/signup?role=customer">Register as Customer</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Venues */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">Featured Venues</h2>
            <Button asChild variant="ghost">
              <Link href="/browse">
                View all <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-48">
                  <Image
                    src={`/placeholder.svg?height=400&width=600`}
                    alt={`Featured venue ${item}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2">Royal Gardens</h3>
                  <div className="flex items-center text-gray-500 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">
                      {["Gulberg III, Lahore", "Clifton, Karachi", "F-7, Islamabad"][item - 1]}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Beautiful garden venue perfect for weddings and corporate events.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-teal-700">PKR 150,000/day</span>
                    <Button asChild size="sm">
                      <Link href={`/venue/${item}`}>View Details</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What Our Users Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Fatima Ahmed",
                role: "Event Planner",
                quote:
                  "This platform has revolutionized how I plan events. The ability to book venues and services in one place saves me countless hours.",
              },
              {
                name: "Ali Hassan",
                role: "Venue Owner",
                quote:
                  "Since listing my property, I've seen a 40% increase in bookings. The platform makes it easy to manage my calendar and communicate with clients.",
              },
              {
                name: "Zainab Malik",
                role: "Catering Service",
                quote:
                  "As a service provider, I've been able to connect with new clients and collaborate with amazing venues. It's been great for business growth.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mr-4">
                    <span className="text-teal-700 font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Organize Your Perfect Event?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of users who have simplified their event planning process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/auth/signup">Create Account</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-teal-700">
              <Link href="/browse">Browse Venues</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
