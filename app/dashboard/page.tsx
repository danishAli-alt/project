import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, DollarSign, MapPin, MessageSquare, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function DashboardPage() {
  // This would come from auth context in a real app
  const userRole = "landowner" // or "provider" or "customer"

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Welcome back, Ahmed</h2>
        <div className="mt-2 sm:mt-0">
          {userRole === "landowner" && (
            <Button asChild>
              <Link href="/dashboard/properties/new">Add New Property</Link>
            </Button>
          )}
          {userRole === "provider" && (
            <Button asChild>
              <Link href="/dashboard/services/new">Add New Service</Link>
            </Button>
          )}
          {userRole === "customer" && (
            <Button asChild>
              <Link href="/browse">Find Venues</Link>
            </Button>
          )}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              {userRole === "landowner"
                ? "Total Properties"
                : userRole === "provider"
                  ? "Total Services"
                  : "Upcoming Events"}
            </CardTitle>
            <div className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center">
              <MapPin className="h-4 w-4 text-teal-700" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userRole === "customer" ? "3" : "5"}</div>
            <p className="text-xs text-gray-500 mt-1">
              {userRole === "landowner"
                ? "+1 from last month"
                : userRole === "provider"
                  ? "+2 from last month"
                  : "Next event in 2 days"}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              {userRole === "customer" ? "Total Bookings" : "Bookings"}
            </CardTitle>
            <div className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center">
              <Calendar className="h-4 w-4 text-teal-700" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-gray-500 mt-1">
              {userRole === "landowner" || userRole === "provider" ? "3 pending approval" : "8 completed, 4 upcoming"}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">{userRole === "customer" ? "Total Spent" : "Revenue"}</CardTitle>
            <div className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center">
              <DollarSign className="h-4 w-4 text-teal-700" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">PKR 540,000</div>
            <p className="text-xs text-gray-500 mt-1">
              {userRole === "customer" ? "Avg. PKR 90,000 per event" : "+12% from last month"}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              {userRole === "landowner" ? "Inquiries" : userRole === "provider" ? "Inquiries" : "Messages"}
            </CardTitle>
            <div className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center">
              <MessageSquare className="h-4 w-4 text-teal-700" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-gray-500 mt-1">
              {userRole === "landowner" || userRole === "provider" ? "5 new since yesterday" : "3 unread messages"}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Landowner Dashboard Content */}
      {userRole === "landowner" && (
        <>
          <h3 className="text-lg font-semibold mt-8 mb-4">Recent Bookings</h3>
          <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b">
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Property
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    {
                      property: "Royal Gardens",
                      customer: "Fatima Ahmed",
                      date: "Apr 15, 2023",
                      status: "Confirmed",
                      amount: "PKR 150,000",
                    },
                    {
                      property: "Pearl Continental Hall",
                      customer: "Usman Ali",
                      date: "Apr 22, 2023",
                      status: "Pending",
                      amount: "PKR 120,000",
                    },
                    {
                      property: "Avari Marquee",
                      customer: "Ayesha Khan",
                      date: "May 5, 2023",
                      status: "Confirmed",
                      amount: "PKR 100,000",
                    },
                  ].map((booking, i) => (
                    <tr key={i}>
                      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {booking.property}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{booking.customer}</td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{booking.date}</td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            booking.status === "Confirmed"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {booking.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{booking.amount}</td>
                      <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Button asChild variant="ghost" size="sm">
                          <Link href={`/dashboard/bookings/${i}`}>View</Link>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <h3 className="text-lg font-semibold mt-8 mb-4">My Properties</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={`/placeholder.svg?height=400&width=600`}
                    alt={`Property ${item}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle>Royal Gardens</CardTitle>
                  <CardDescription className="flex items-center">
                    <MapPin className="h-3.5 w-3.5 mr-1" />
                    {["Gulberg III, Lahore", "DHA Phase 5, Karachi", "F-10, Islamabad"][item - 1]}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-500">Capacity: 150 guests</span>
                    <span className="font-medium text-teal-700">PKR 150,000/day</span>
                  </div>
                  <Button asChild variant="outline" size="sm" className="w-full mt-2">
                    <Link href={`/dashboard/properties/${item}`}>Manage Property</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
            <Card className="border-dashed border-2 flex flex-col items-center justify-center p-6">
              <div className="rounded-full bg-gray-100 p-3 mb-4">
                <MapPin className="h-6 w-6 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium mb-2">Add New Property</h3>
              <p className="text-sm text-gray-500 text-center mb-4">List your venue and start receiving bookings</p>
              <Button asChild>
                <Link href="/dashboard/properties/new">Add Property</Link>
              </Button>
            </Card>
          </div>
        </>
      )}

      {/* Provider Dashboard Content */}
      {userRole === "provider" && (
        <>
          <h3 className="text-lg font-semibold mt-8 mb-4">Recent Service Requests</h3>
          <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b">
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Service
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    {
                      service: "Premium Catering",
                      customer: "Sarah Johnson",
                      date: "Apr 15, 2023",
                      status: "Confirmed",
                      amount: "PKR 300,000",
                    },
                    {
                      service: "Sound System Rental",
                      customer: "Michael Chen",
                      date: "Apr 22, 2023",
                      status: "Pending",
                      amount: "PKR 100,000",
                    },
                    {
                      service: "Event Photography",
                      customer: "Jessica Williams",
                      date: "May 5, 2023",
                      status: "Confirmed",
                      amount: "PKR 150,000",
                    },
                  ].map((request, i) => (
                    <tr key={i}>
                      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {request.service}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{request.customer}</td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{request.date}</td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            request.status === "Confirmed"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {request.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{request.amount}</td>
                      <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Button asChild variant="ghost" size="sm">
                          <Link href={`/dashboard/bookings/${i}`}>View</Link>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <h3 className="text-lg font-semibold mt-8 mb-4">My Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <Card key={item}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Premium Catering</CardTitle>
                    <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center">
                      <Users className="h-5 w-5 text-teal-700" />
                    </div>
                  </div>
                  <CardDescription>Full-service catering for events</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Base Price:</span>
                      <span className="font-medium">PKR 3,000 per person</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Bookings:</span>
                      <span>12 completed</span>
                    </div>
                    <Button asChild variant="outline" size="sm" className="w-full mt-4">
                      <Link href={`/dashboard/services/${item}`}>Manage Service</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            <Card className="border-dashed border-2 flex flex-col items-center justify-center p-6">
              <div className="rounded-full bg-gray-100 p-3 mb-4">
                <Users className="h-6 w-6 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium mb-2">Add New Service</h3>
              <p className="text-sm text-gray-500 text-center mb-4">List your service and reach more customers</p>
              <Button asChild>
                <Link href="/dashboard/services/new">Add Service</Link>
              </Button>
            </Card>
          </div>
        </>
      )}

      {/* Customer Dashboard Content */}
      {userRole === "customer" && (
        <>
          <h3 className="text-lg font-semibold mt-8 mb-4">Upcoming Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={`/placeholder.svg?height=400&width=600`}
                    alt={`Event ${item}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-teal-600 text-white text-xs font-bold px-2 py-1 rounded">
                    {["Apr 15", "May 3", "Jun 12"][item - 1]}
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle>Corporate Retreat</CardTitle>
                  <CardDescription className="flex items-center">
                    <MapPin className="h-3.5 w-3.5 mr-1" />
                    Lakeside Manor, San Francisco
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Guests:</span>
                      <span>75 people</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Services:</span>
                      <span>Catering, Photography</span>
                    </div>
                  </div>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href={`/dashboard/bookings/${item}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-between items-center mt-8 mb-4">
            <h3 className="text-lg font-semibold">Recommended Venues</h3>
            <Button asChild variant="ghost" size="sm">
              <Link href="/browse">
                View All <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={`/placeholder.svg?height=400&width=600`}
                    alt={`Venue ${item}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle>Garden Pavilion</CardTitle>
                  <CardDescription className="flex items-center">
                    <MapPin className="h-3.5 w-3.5 mr-1" />
                    Seattle, WA
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-500">Capacity: 200 guests</span>
                    <span className="font-medium text-teal-700">$1,500/day</span>
                  </div>
                  <Button asChild size="sm" className="w-full mt-2">
                    <Link href={`/venue/${item}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
