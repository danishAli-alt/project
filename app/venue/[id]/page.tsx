"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns"
import {
  CalendarIcon,
  Check,
  ChevronLeft,
  Clock,
  Heart,
  MapPin,
  MessageSquare,
  Share,
  Star,
  Users,
  Wifi,
  Utensils,
  Car,
  Music,
  Camera,
  Palette,
} from "lucide-react"

export default function VenuePage({ params }: { params: { id: string } }) {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [selectedTab, setSelectedTab] = useState("overview")

  // Mock venue data - in a real app, this would come from an API
  const venue = {
    id: params.id,
    name: "Royal Gardens",
    location: "Gulberg III, Lahore, Pakistan",
    description:
      "Nestled in the heart of Gulberg III, Royal Gardens offers a stunning backdrop for weddings, corporate retreats, and special events. The venue features both indoor and outdoor spaces, allowing for versatile event planning regardless of weather conditions.",
    price: 150000,
    capacity: 150,
    rating: 4.8,
    reviews: 124,
    amenities: [
      { name: "WiFi", icon: Wifi },
      { name: "Parking", icon: Car },
      { name: "Catering", icon: Utensils },
      { name: "Sound System", icon: Music },
      { name: "Photography", icon: Camera },
      { name: "Decoration", icon: Palette },
    ],
    features: [
      "Indoor and outdoor spaces",
      "Lakefront views",
      "Bridal suite",
      "Commercial kitchen",
      "Tables and chairs included",
      "AV equipment",
      "Wheelchair accessible",
      "On-site parking",
    ],
    availableServices: [
      { name: "In-house catering", price: "PKR 5,500 per person" },
      { name: "Bar service", price: "PKR 3,000 per person" },
      { name: "Event coordination", price: "PKR 100,000 flat fee" },
      { name: "Photography", price: "PKR 180,000 for 6 hours" },
      { name: "DJ services", price: "PKR 150,000 for 5 hours" },
      { name: "Decoration", price: "Starting at PKR 60,000" },
    ],
    policies: [
      "50% deposit required to secure booking",
      "Cancellation: Full refund 60+ days before event, 50% refund 30-59 days before",
      "No refunds for cancellations less than 30 days before event",
      "Noise restrictions after 10pm",
      "No confetti or glitter allowed",
      "Outside catering allowed with additional fee",
    ],
    reviews: [
      {
        name: "Fatima Ahmed",
        date: "March 15, 2023",
        rating: 5,
        comment:
          "We had our wedding at Royal Gardens and it was absolutely perfect! The staff was incredibly helpful and the venue is stunning. Our guests couldn't stop talking about how beautiful everything was.",
      },
      {
        name: "Usman Ali",
        date: "February 3, 2023",
        rating: 4,
        comment:
          "Great venue for our corporate retreat. The facilities were excellent and the garden setting was perfect for team building activities. Only minor issue was limited parking space.",
      },
      {
        name: "Ayesha Khan",
        date: "January 22, 2023",
        rating: 5,
        comment:
          "Hosted my daughter's mehndi here and it exceeded all expectations. The venue is beautiful and the staff went above and beyond to make sure everything was perfect.",
      },
    ],
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <div className="mb-6">
        <Button asChild variant="ghost" className="pl-0">
          <Link href="/browse">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to search results
          </Link>
        </Button>
      </div>

      {/* Venue Header */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold">{venue.name}</h1>
          <div className="flex items-center mt-2 text-gray-600">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{venue.location}</span>
          </div>
          <div className="flex items-center mt-2">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-500 mr-1" />
              <span className="font-medium">{venue.rating}</span>
              <span className="text-gray-500 ml-1">({venue.reviews} reviews)</span>
            </div>
            <Separator orientation="vertical" className="mx-3 h-4" />
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1 text-gray-500" />
              <span>Up to {venue.capacity} guests</span>
            </div>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Heart className="mr-1 h-4 w-4" />
            Save
          </Button>
          <Button variant="outline" size="sm">
            <Share className="mr-1 h-4 w-4" />
            Share
          </Button>
        </div>
      </div>

      {/* Venue Images */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="md:col-span-2 row-span-2 relative rounded-lg overflow-hidden h-[400px]">
          <Image src="/placeholder.svg?height=800&width=1200" alt={venue.name} fill className="object-cover" />
        </div>
        {[1, 2, 3].map((i) => (
          <div key={i} className="relative rounded-lg overflow-hidden h-[190px]">
            <Image
              src={`/placeholder.svg?height=400&width=600`}
              alt={`${venue.name} ${i}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Venue Details */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="overview" value={selectedTab} onValueChange={setSelectedTab}>
            <TabsList className="mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="amenities">Amenities</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="policies">Policies</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">About this venue</h2>
                <p className="text-gray-700">{venue.description}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {venue.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-teal-600 mr-2 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="amenities" className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">Amenities</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {venue.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center mr-3">
                        <amenity.icon className="h-5 w-5 text-teal-700" />
                      </div>
                      <span>{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="services" className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">Available Services</h2>
                <div className="space-y-4">
                  {venue.availableServices.map((service, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium">{service.name}</h4>
                      </div>
                      <div className="text-teal-700 font-medium">{service.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">Reviews</h2>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 mr-1" />
                    <span className="font-medium text-lg">{venue.rating}</span>
                    <span className="text-gray-500 ml-1">({venue.reviews} reviews)</span>
                  </div>
                </div>

                <div className="space-y-6">
                  {venue.reviews.map((review, index) => (
                    <div key={index} className="border-b pb-6 last:border-0">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-medium">{review.name}</h4>
                          <p className="text-gray-500 text-sm">{review.date}</p>
                        </div>
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < review.rating ? "text-yellow-500" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="policies" className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">Policies</h2>
                <ul className="space-y-3">
                  {venue.policies.map((policy, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium mr-3 mt-0.5">
                        {index + 1}
                      </div>
                      <span>{policy}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Right Column - Booking Card */}
        <div>
          <Card className="sticky top-24">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <span className="text-2xl font-bold">PKR {venue.price.toLocaleString()}</span>
                  <span className="text-gray-500">/day</span>
                </div>
                <Badge className="bg-teal-600">Available</Badge>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <Label>Event Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal mt-1">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Select date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>

                <div>
                  <Label>Event Type</Label>
                  <select className="w-full mt-1 p-2 border rounded-md">
                    <option value="">Select event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="social">Social Gathering</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <Label>Number of Guests</Label>
                  <select className="w-full mt-1 p-2 border rounded-md">
                    <option value="">Select guest count</option>
                    <option value="1-50">1-50 guests</option>
                    <option value="51-100">51-100 guests</option>
                    <option value="101-150">101-150 guests</option>
                  </select>
                </div>
              </div>

              <Button className="w-full bg-teal-600 hover:bg-teal-700 mb-4">Check Availability</Button>

              <Button variant="outline" className="w-full">
                <MessageSquare className="mr-2 h-4 w-4" />
                Contact Host
              </Button>

              <div className="mt-6 text-center text-sm text-gray-500">
                <p>No charge until you book</p>
                <p className="mt-1 flex items-center justify-center">
                  <Clock className="h-4 w-4 mr-1" />
                  Usually responds within 24 hours
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function Label({ children }: { children: React.ReactNode }) {
  return <div className="font-medium mb-1">{children}</div>
}
