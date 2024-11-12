import React from 'react'

import { Pie, PieChart, Cell, ResponsiveContainer, Legend } from 'recharts'
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { 
  DollarSign, 
  ShoppingBag, 
  Smartphone, 
  Coffee, 
  Film, 
  Gamepad,
  PlusCircle
} from 'lucide-react'
const expenseData = [
    { name: 'Shopping', value: 30, color: '#FF6384', icon: ShoppingBag },
    { name: 'Phone', value: 20, color: '#36A2EB', icon: Smartphone },
    { name: 'Food', value: 25, color: '#FFCE56', icon: Coffee },
    { name: 'Entertainment', value: 15, color: '#4BC0C0', icon: Film },
    { name: 'Gaming', value: 10, color: '#9966FF', icon: Gamepad },
  ]



const BudgetOverview = ({ income, expenses, savings }) => (
  <Card>
    <CardHeader>
      <CardTitle>Budget Overview</CardTitle>
      <CardDescription>Your monthly budget at a glance</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span>Income</span>
          <span className="font-bold text-green-500">${income}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Expenses</span>
          <span className="font-bold text-red-500">${expenses}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Savings</span>
          <span className="font-bold text-blue-500">${savings}</span>
        </div>
        <Progress value={(expenses / income) * 100} className="h-2" />
        <p className="text-sm text-muted-foreground">
          You've spent {((expenses / income) * 100).toFixed(1)}% of your income
        </p>
      </div>
    </CardContent>
  </Card>
)

const ExpenseBreakdown = () => (
  <Card>
    <CardHeader>
      <CardTitle>Expense Breakdown</CardTitle>
      <CardDescription>Where your money is going</CardDescription>
    </CardHeader>
    <CardContent className="pt-0">
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={expenseData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
          >
            {expenseData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
)

const RecentTransactions = () => (
  <Card>
    <CardHeader>
      <CardTitle>Recent Transactions</CardTitle>
      <CardDescription>Your latest spending activity</CardDescription>
    </CardHeader>
    <CardContent>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Item</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {expenseData.map((item) => (
            <TableRow key={item.name}>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell>
                <div className="flex items-center">
                  {React.createElement(item.icon, { className: "mr-2 h-4 w-4" })}
                  {item.name}
                </div>
              </TableCell>
              <TableCell className="text-right">${item.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardContent>
  </Card>
)

const AddExpenseForm = () => (
  <Card>
    <CardHeader>
      <CardTitle>Add New Expense</CardTitle>
      <CardDescription>Keep track of your spending</CardDescription>
    </CardHeader>
    <CardContent>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="expense-name">Expense Name</Label>
            <Input id="expense-name" placeholder="e.g., Movie Ticket" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="expense-amount">Amount</Label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input id="expense-amount" type="number" className="pl-8" placeholder="0.00" />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="expense-category">Category</Label>
          <select id="expense-category" className="w-full p-2 border rounded-md">
            <option>Shopping</option>
            <option>Food</option>
            <option>Entertainment</option>
            <option>Other</option>
          </select>
        </div>
        <Button className="w-full">
          <PlusCircle className="mr-2 h-4 w-4" /> Add Expense
        </Button>
      </form>
    </CardContent>
  </Card>
)

export default function BudgetingPage() {
    
    

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Budgeting Dashboard</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <BudgetOverview income={500} expenses={300} savings={200} />
        <ExpenseBreakdown />
      </div>

      <RecentTransactions  />

      <AddExpenseForm />

      <Card>
        <CardHeader>
          <CardTitle>Budgeting Tips for Teens</CardTitle>
          <CardDescription>Smart ways to manage your money</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>Track every expense, no matter how small</li>
            <li>Set realistic savings goals</li>
            <li>Differentiate between needs and wants</li>
            <li>Look for ways to earn extra income</li>
            <li>Learn to comparison shop for better deals</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}