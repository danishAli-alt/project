"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Send, Paperclip, Search } from "lucide-react"

export default function MessagesPage() {
  const [activeConversation, setActiveConversation] = useState<number | null>(0)
  const [messageText, setMessageText] = useState("")

  // Mock conversations data
  const conversations = [
    {
      id: 0,
      name: "Fatima Ahmed",
      role: "Customer",
      lastMessage: "Hi, I'm interested in booking your venue for a wedding.",
      time: "10:30 AM",
      unread: true,
      avatar: "F",
    },
    {
      id: 1,
      name: "Royal Gardens",
      role: "Venue",
      lastMessage: "Thank you for your inquiry. We'd be happy to discuss your event needs.",
      time: "Yesterday",
      unread: false,
      avatar: "R",
    },
    {
      id: 2,
      name: "Lahore Catering",
      role: "Service Provider",
      lastMessage: "Here's the menu options we discussed for your event.",
      time: "2 days ago",
      unread: false,
      avatar: "L",
    },
  ]

  // Mock messages for the active conversation
  const messages = [
    {
      id: 1,
      sender: "Fatima Ahmed",
      text: "Hi there! I'm interested in booking your venue for a wedding ceremony and reception on June 15th next year.",
      time: "10:30 AM",
      isMe: false,
    },
    {
      id: 2,
      sender: "Me",
      text: "Hello Fatima! Thank you for your interest in our venue. We'd be happy to host your special day. How many guests are you expecting?",
      time: "10:35 AM",
      isMe: true,
    },
    {
      id: 3,
      sender: "Fatima Ahmed",
      text: "We're planning for about 120 guests. Do you have availability on that date?",
      time: "10:38 AM",
      isMe: false,
    },
    {
      id: 4,
      sender: "Me",
      text: "Let me check our calendar. Yes, we do have availability on June 15th next year. Would you like to schedule a tour of the venue?",
      time: "10:42 AM",
      isMe: true,
    },
    {
      id: 5,
      sender: "Fatima Ahmed",
      text: "That would be great! What days and times are available for tours?",
      time: "10:45 AM",
      isMe: false,
    },
  ]

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (messageText.trim()) {
      // In a real app, this would send the message to the API
      console.log("Sending message:", messageText)
      setMessageText("")
    }
  }

  return (
    <div className="h-[calc(100vh-9rem)]">
      <h2 className="text-2xl font-bold mb-6">Messages</h2>

      <div className="bg-white rounded-lg border shadow-sm h-[calc(100%-3rem)] overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 h-full">
          {/* Conversations List */}
          <div className="border-r">
            <div className="p-4 border-b">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input placeholder="Search conversations" className="pl-9" />
              </div>
            </div>

            <Tabs defaultValue="all">
              <div className="px-4 pt-4">
                <TabsList className="w-full">
                  <TabsTrigger value="all" className="flex-1">
                    All
                  </TabsTrigger>
                  <TabsTrigger value="unread" className="flex-1">
                    Unread
                  </TabsTrigger>
                  <TabsTrigger value="archived" className="flex-1">
                    Archived
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="m-0">
                <div className="overflow-y-auto h-[calc(100vh-16rem)]">
                  {conversations.map((conversation) => (
                    <div
                      key={conversation.id}
                      className={`p-4 border-b cursor-pointer hover:bg-gray-50 transition-colors ${
                        activeConversation === conversation.id ? "bg-gray-50" : ""
                      }`}
                      onClick={() => setActiveConversation(conversation.id)}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-medium ${
                            conversation.unread ? "ring-2 ring-teal-600" : ""
                          }`}
                        >
                          {conversation.avatar}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start">
                            <h4 className={`font-medium truncate ${conversation.unread ? "text-teal-700" : ""}`}>
                              {conversation.name}
                            </h4>
                            <span className="text-xs text-gray-500 whitespace-nowrap ml-2">{conversation.time}</span>
                          </div>
                          <p className="text-xs text-gray-500">{conversation.role}</p>
                          <p
                            className={`text-sm truncate mt-1 ${conversation.unread ? "font-medium" : "text-gray-600"}`}
                          >
                            {conversation.lastMessage}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="unread" className="m-0">
                <div className="overflow-y-auto h-[calc(100vh-16rem)]">
                  {conversations
                    .filter((c) => c.unread)
                    .map((conversation) => (
                      <div
                        key={conversation.id}
                        className={`p-4 border-b cursor-pointer hover:bg-gray-50 transition-colors ${
                          activeConversation === conversation.id ? "bg-gray-50" : ""
                        }`}
                        onClick={() => setActiveConversation(conversation.id)}
                      >
                        <div className="flex items-start gap-3">
                          <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-medium ring-2 ring-teal-600">
                            {conversation.avatar}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start">
                              <h4 className="font-medium truncate text-teal-700">{conversation.name}</h4>
                              <span className="text-xs text-gray-500 whitespace-nowrap ml-2">{conversation.time}</span>
                            </div>
                            <p className="text-xs text-gray-500">{conversation.role}</p>
                            <p className="text-sm truncate mt-1 font-medium">{conversation.lastMessage}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="archived" className="m-0">
                <div className="p-8 text-center text-gray-500">No archived conversations</div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Conversation */}
          <div className="col-span-2 flex flex-col h-full">
            {activeConversation !== null ? (
              <>
                {/* Conversation Header */}
                <div className="p-4 border-b flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-medium mr-3">
                      {conversations[activeConversation].avatar}
                    </div>
                    <div>
                      <h3 className="font-medium">{conversations[activeConversation].name}</h3>
                      <p className="text-xs text-gray-500">{conversations[activeConversation].role}</p>
                    </div>
                  </div>
                  <div>
                    <Button variant="outline" size="sm">
                      View Profile
                    </Button>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className={`flex ${message.isMe ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[70%] rounded-lg p-3 ${
                          message.isMe ? "bg-teal-600 text-white" : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        <p>{message.text}</p>
                        <div className={`text-xs mt-1 ${message.isMe ? "text-teal-100" : "text-gray-500"}`}>
                          {message.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="p-4 border-t">
                  <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                    <Button type="button" variant="ghost" size="icon" className="text-gray-500">
                      <Paperclip className="h-5 w-5" />
                      <span className="sr-only">Attach file</span>
                    </Button>
                    <Input
                      placeholder="Type a message..."
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      className="flex-1"
                    />
                    <Button type="submit" size="icon" className="bg-teal-600 hover:bg-teal-700">
                      <Send className="h-4 w-4" />
                      <span className="sr-only">Send message</span>
                    </Button>
                  </form>
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500">
                Select a conversation to start messaging
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
