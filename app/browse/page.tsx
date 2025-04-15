"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Filter, MapPin, Search, Users, X } from "lucide-react"
import { format } from "date-fns"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

export default function BrowsePage() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [priceRange, setPriceRange] = useState([60000, 250000])
  const [capacity, setCapacity] = useState([50])

  const toggleFilters = () => {
    setFiltersOpen(!filtersOpen)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Find Your Perfect Venue</h1>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm border p-4 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input placeholder="Search by location or venue name" className="pl-10" />
          </div>
          <div className="w-full md:w-48">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
              </PopoverContent>
            </Popover>
          </div>
          <Button variant="outline" className="md:w-auto" onClick={toggleFilters}>
            <Filter className="mr-2 h-4 w-4" />
            Filters
            {filtersOpen ? <X className="ml-2 h-4 w-4" /> : null}
          </Button>
          <Button className="bg-teal-600 hover:bg-teal-700">Search</Button>
        </div>

        {/* Expanded Filters */}
        {filtersOpen && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 pt-4 border-t">
            <div className="space-y-4">
              <h3 className="font-medium">Price Range</h3>
              <Slider
                defaultValue={priceRange}
                min={10000}
                max={600000}
                step={10000}
                value={priceRange}
                onValueChange={setPriceRange}
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>PKR {priceRange[0].toLocaleString()}</span>
                <span>PKR {priceRange[1].toLocaleString()}</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Capacity</h3>
              <Slider
                defaultValue={capacity}
                min={10}
                max={500}
                step={10}
                value={capacity}
                onValueChange={setCapacity}
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>Up to {capacity[0]} guests</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Venue Type</h3>
              <div className="grid grid-cols-2 gap-2">
                {["Indoor", "Outdoor", "Waterfront", "Garden", "Urban", "Historic"].map((type) => (
                  <div key={type} className="flex items-center space-x-2">
                    <Checkbox id={`type-${type}`} />
                    <Label htmlFor={`type-${type}`}>{type}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Amenities</h3>
              <div className="grid grid-cols-2 gap-2">
                {["Parking", "WiFi", "Kitchen", "AV Equipment", "Wheelchair Access", "Restrooms"].map((amenity) => (
                  <div key={amenity} className="flex items-center space-x-2">
                    <Checkbox id={`amenity-${amenity}`} />
                    <Label htmlFor={`amenity-${amenity}`}>{amenity}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Services Available</h3>
              <div className="grid grid-cols-2 gap-2">
                {["Catering", "Bar Service", "Decoration", "Photography", "Music/DJ", "Cleaning"].map((service) => (
                  <div key={service} className="flex items-center space-x-2">
                    <Checkbox id={`service-${service}`} />
                    <Label htmlFor={`service-${service}`}>{service}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-3 flex justify-end space-x-2 pt-2">
              <Button
                variant="outline"
                onClick={() => {
                  setPriceRange([60000, 250000])
                  setCapacity([50])
                }}
              >
                Reset Filters
              </Button>
              <Button className="bg-teal-600 hover:bg-teal-700">Apply Filters</Button>
            </div>
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">24 venues found</h2>
        <div className="flex items-center space-x-2">
          <Label htmlFor="sort" className="text-sm">
            Sort by:
          </Label>
          <select id="sort" className="text-sm border rounded-md px-2 py-1" defaultValue="recommended">
            <option value="recommended">Recommended</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="capacity">Capacity</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      {/* Venue Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 9 }).map((_, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative">
              <div className="relative h-48">
                <Image
                  src={`/placeholder.svg?height=400&width=600`}
                  alt={`Venue ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute top-2 right-2 bg-white text-teal-700 text-xs font-bold px-2 py-1 rounded shadow-sm">
                PKR {(60000 + index * 15000).toLocaleString()}/day
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-1">
                {
                  [
                    "Royal Gardens",
                    "Pearl Continental Hall",
                    "Avari Marquee",
                    "Faletti's Grand Ballroom",
                    "Defence Raya Golf Resort",
                    "Luxus Grand Hotel",
                    "Nishat Banquet",
                    "Emporium Mall Event Space",
                    "Lahore Fort Heritage Site",
                  ][index % 9]
                }
              </h3>
              <div className="flex items-center text-gray-500 mb-3">
                <MapPin className="h-4 w-4 mr-1" />
                <span className="text-sm">
                  {
                    [
                      "Gulberg III, Lahore",
                      "Clifton, Karachi",
                      "F-7, Islamabad",
                      "Cantt, Lahore",
                      "DHA Phase 2, Karachi",
                      "Blue Area, Islamabad",
                      "Satellite Town, Rawalpindi",
                      "Faisal Town, Faisalabad",
                      "Model Town, Multan",
                    ][index % 9]
                  }
                </span>
              </div>
              <div className="flex items-center text-gray-500 mb-3">
                <Users className="h-4 w-4 mr-1" />
                <span className="text-sm">Up to {50 + index * 25} guests</span>
              </div>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {
                  [
                    "Beautiful garden venue perfect for weddings and corporate events.",
                    "Luxurious hotel ballroom with state-of-the-art facilities.",
                    "Modern marquee space in the heart of Cantt.",
                    "Elegant ballroom setting ideal for formal gatherings.",
                    "Scenic golf resort with indoor and outdoor event spaces.",
                    "Contemporary hotel venue with excellent catering options.",
                    "Spacious banquet hall with customizable layouts.",
                    "Modern mall event space with excellent accessibility.",
                    "Historic venue with unique cultural ambiance.",
                  ][index % 9]
                }
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  ["Indoor", "Parking", "WiFi"],
                  ["Outdoor", "Kitchen", "AV Equipment"],
                  ["Urban", "Wheelchair Access", "Bar"],
                  ["Garden", "Catering", "Photography"],
                  ["Historic", "Decoration", "Music/DJ"],
                  ["Waterfront", "Cleaning", "Restrooms"],
                  ["Rustic", "Parking", "Kitchen"],
                  ["Modern", "WiFi", "AV Equipment"],
                  ["Rooftop", "Bar", "Catering"],
                ][index % 9].map((tag) => (
                  <span key={tag} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                <Link href={`/venue/${index + 1}`}>View Details</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center">
        <nav className="flex items-center space-x-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          {[1, 2, 3].map((page) => (
            <Button
              key={page}
              variant={page === 1 ? "default" : "outline"}
              size="sm"
              className={cn(page === 1 && "bg-teal-600 hover:bg-teal-700")}
            >
              {page}
            </Button>
          ))}
          <Button variant="outline" size="sm">
            Next
          </Button>
        </nav>
      </div>
    </div>
  )
}
