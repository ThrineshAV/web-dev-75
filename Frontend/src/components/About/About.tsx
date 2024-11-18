import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PiggyBank, TrendingUp, BookOpen, Target, Shield, Users } from 'lucide-react'
const features = [
  {
    icon: PiggyBank,
    title: "Smart Savings Tracker",
    description: "Set savings goals and track your progress with interactive visualizations."
  },
  {
    icon: TrendingUp,
    title: "Budget Management.",
    description: "Create and manage your monthly budget with easy-to-use tools and insights."
  },
  {
    icon: BookOpen,
    title: "Financial Education",
    description: "Access a library of age-appropriate financial lessons and quizzes."
  },
  {
    icon: Target,
    title: "Goal Setting",
    description: "Set short-term and long-term financial goals with guided assistance."
  },
  {
    icon: Shield,
    title: "Secure Environment",
    description: "Parent-approved transactions and a safe, educational space for financial growth."
  },
  {
    icon: Users,
    title: "Community Challenges",
    description: "Participate in savings challenges with peers to boost your financial skills."
  }
]

function About() {
  return (
    <div className="py-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Empower Your Financial Future
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto">
            Discover the features that make TeenFinance the perfect platform for young adults to learn about money management.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors duration-300">
                <CardHeader>
                  <feature.icon className="h-8 w-8 text-blue-400 mb-4" />
                  <CardTitle className="text-lg font-semibold text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About