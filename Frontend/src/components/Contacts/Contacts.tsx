'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Phone, Mail, MessageCircle, HelpCircle, Send } from 'lucide-react'

const faqs = [
  {
    question: "How do I start saving money?",
    answer: "Start by setting a savings goal, creating a budget, and setting aside a portion of your allowance or earnings each week. Our app can help you track your progress and offer tips along the way."
  },
  {
    question: "What's the difference between a debit and credit card?",
    answer: "A debit card uses money directly from your bank account, while a credit card borrows money that you need to pay back later. It's important to use credit responsibly to avoid debt."
  },
  {
    question: "How can I earn money as a teenager?",
    answer: "There are many ways to earn money as a teen, such as part-time jobs, freelancing, babysitting, or starting a small business. Our app provides resources and ideas for teen-friendly earning opportunities."
  },
  {
    question: "How do I create a budget?",
    answer: "To create a budget, start by tracking your income and expenses. Then, categorize your spending and set limits for each category. Our app has tools to help you create and stick to a budget that works for you."
  }
]

export default function ContactsPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', { name, email, message })
    // Reset form fields
    setName('')
    setEmail('')
    setMessage('')
    // Show a success message to the user (you might want to use a toast notification here)
    alert('Your message has been sent. We\'ll get back to you soon!')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-400">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-400">
                <MessageCircle className="mr-2" /> Get in Touch
              </CardTitle>
              <CardDescription className="text-gray-300">Send us a message and we'll get back to you soon.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-200">Name</Label>
                  <Input 
                    id="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Your Name" 
                    required 
                    className="bg-gray-700 text-white border-gray-600"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-200">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="your.email@example.com" 
                    required 
                    className="bg-gray-700 text-white border-gray-600"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-200">Message</Label>
                  <Textarea 
                    id="message" 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    placeholder="How can we help you?" 
                    required 
                    className="bg-gray-700 text-white border-gray-600"
                  />
                </div>
                <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-400">
                <HelpCircle className="mr-2" /> Other Ways to Reach Us
              </CardTitle>
              <CardDescription className="text-gray-300">Choose the method that works best for you.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2 text-gray-200">
                <Phone className="h-5 w-5 text-blue-400" />
                <span>Call us: (123) 456-7890</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-200">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>Email: support@teenfinance.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-200">
                <MessageCircle className="h-5 w-5 text-blue-400" />
                <span>Live Chat: Available 9AM-5PM EST</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center text-blue-400">
              <HelpCircle className="mr-2" /> Frequently Asked Questions
            </CardTitle>
            <CardDescription className="text-gray-300">Find quick answers to common questions.</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-gray-700">
                  <AccordionTrigger className="text-gray-200 hover:text-blue-400">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-300">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}