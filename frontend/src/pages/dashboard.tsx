"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import '../styles/globals.css'
import {
  BarChart3,
  Calendar,
  CheckCircle2,
  Clock,
  Filter,
  MoreHorizontal,
  Plus,
  Search,
  Settings,
  Users,
  Zap,
  Target,
  TrendingUp,
  Bell,
} from "lucide-react"

interface Task {
  id: string
  title: string
  description: string
  status: "todo" | "in-progress" | "review" | "done"
  priority: "low" | "medium" | "high" | "urgent"
  assignee: {
    name: string
    avatar: string
    initials: string
  }
  dueDate: string
  project: string
  tags: string[]
}

const mockTasks: Task[] = [
  {
    id: "1",
    title: "Thiết kế giao diện đăng nhập",
    description: "Tạo giao diện đăng nhập responsive với validation",
    status: "in-progress",
    priority: "high",
    assignee: { name: "Nguyễn Văn A", avatar: "", initials: "NA" },
    dueDate: "2024-01-15",
    project: "Taskio Web",
    tags: ["UI/UX", "Frontend"],
  },
  {
    id: "2",
    title: "API Authentication",
    description: "Xây dựng API xác thực người dùng với JWT",
    status: "todo",
    priority: "urgent",
    assignee: { name: "Trần Thị B", avatar: "", initials: "TB" },
    dueDate: "2024-01-12",
    project: "Taskio API",
    tags: ["Backend", "Security"],
  },
  {
    id: "3",
    title: "Database Schema",
    description: "Thiết kế cơ sở dữ liệu cho hệ thống quản lý task",
    status: "review",
    priority: "medium",
    assignee: { name: "Lê Văn C", avatar: "", initials: "LC" },
    dueDate: "2024-01-10",
    project: "Taskio Core",
    tags: ["Database", "Architecture"],
  },
  {
    id: "4",
    title: "Unit Testing",
    description: "Viết unit test cho các component chính",
    status: "done",
    priority: "low",
    assignee: { name: "Phạm Thị D", avatar: "", initials: "PD" },
    dueDate: "2024-01-08",
    project: "Taskio Web",
    tags: ["Testing", "Quality"],
  },
]

const statusColors = {
  todo: "bg-gray-100 text-gray-800 border-gray-200",
  "in-progress": "bg-blue-100 text-blue-800 border-blue-200",
  review: "bg-yellow-100 text-yellow-800 border-yellow-200",
  done: "bg-green-100 text-green-800 border-green-200",
}

const priorityColors = {
  low: "bg-gray-100 text-gray-600",
  medium: "bg-blue-100 text-blue-600",
  high: "bg-orange-100 text-orange-600",
  urgent: "bg-red-100 text-red-600",
}

export default function dashboard() {
  const [selectedTab, setSelectedTab] = useState("overview")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredTasks = mockTasks.filter(
    (task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const tasksByStatus = {
    todo: filteredTasks.filter((t) => t.status === "todo"),
    "in-progress": filteredTasks.filter((t) => t.status === "in-progress"),
    review: filteredTasks.filter((t) => t.status === "review"),
    done: filteredTasks.filter((t) => t.status === "done"),
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-accent-foreground" />
              </div>
              <h1 className="text-xl font-bold text-foreground">Taskio</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6 ml-8">
              <Button variant="ghost" className="text-sm font-medium">
                Dashboard
              </Button>
              <Button variant="ghost" className="text-sm font-medium text-muted-foreground">
                Projects
              </Button>
              <Button variant="ghost" className="text-sm font-medium text-muted-foreground">
                Teams
              </Button>
              <Button variant="ghost" className="text-sm font-medium text-muted-foreground">
                Reports
              </Button>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Tìm kiếm tasks, projects..."
                className="pl-10 w-80"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
            <Avatar className="w-8 h-8">
              <AvatarFallback className="bg-accent text-accent-foreground">AD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r border-border bg-sidebar min-h-[calc(100vh-4rem)] p-4">
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-sidebar-foreground mb-3">Workspace</h3>
              <div className="space-y-1">
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-3 bg-sidebar-accent text-sidebar-accent-foreground"
                >
                  <BarChart3 className="w-4 h-4" />
                  Overview
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-3 text-sidebar-foreground">
                  <Target className="w-4 h-4" />
                  My Tasks
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-3 text-sidebar-foreground">
                  <Users className="w-4 h-4" />
                  Team
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-3 text-sidebar-foreground">
                  <Calendar className="w-4 h-4" />
                  Calendar
                </Button>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-sidebar-foreground">Projects</h3>
                <Button variant="ghost" size="icon" className="w-5 h-5">
                  <Plus className="w-3 h-3" />
                </Button>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 p-2 rounded-md hover:bg-sidebar-primary">
                  <div className="w-3 h-3 bg-chart-1 rounded-full"></div>
                  <span className="text-sm text-sidebar-foreground">Taskio Web</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-md hover:bg-sidebar-primary">
                  <div className="w-3 h-3 bg-chart-2 rounded-full"></div>
                  <span className="text-sm text-sidebar-foreground">Taskio API</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-md hover:bg-sidebar-primary">
                  <div className="w-3 h-3 bg-chart-3 rounded-full"></div>
                  <span className="text-sm text-sidebar-foreground">Taskio Core</span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Welcome Section */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Chào mừng trở lại! 👋</h2>
                <p className="text-muted-foreground mt-1">Hôm nay bạn có 12 tasks đang chờ xử lý</p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="gap-2 bg-transparent">
                  <Filter className="w-4 h-4" />
                  Filter
                </Button>
                <Button className="gap-2 bg-accent hover:bg-accent/90">
                  <Plus className="w-4 h-4" />
                  New Task
                </Button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-border">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-card-foreground">Total Tasks</CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-card-foreground">24</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-chart-4">+12%</span> from last month
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-card-foreground">Completed</CardTitle>
                  <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-card-foreground">18</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-chart-4">+8%</span> from last month
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-card-foreground">In Progress</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-card-foreground">6</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-chart-3">-2%</span> from last month
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-card-foreground">Team Members</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-card-foreground">12</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-chart-4">+2</span> new members
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Main Dashboard Content */}
            <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
              <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="kanban">Kanban Board</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Recent Tasks */}
                  <Card className="lg:col-span-2 border-border">
                    <CardHeader>
                      <CardTitle className="text-card-foreground">Recent Tasks</CardTitle>
                      <CardDescription>Tasks được cập nhật gần đây</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {filteredTasks.slice(0, 5).map((task) => (
                        <div
                          key={task.id}
                          className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex items-center gap-4">
                            <Avatar className="w-8 h-8">
                              <AvatarFallback className="bg-accent text-accent-foreground text-xs">
                                {task.assignee.initials}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <h4 className="font-medium text-card-foreground">{task.title}</h4>
                              <p className="text-sm text-muted-foreground">{task.project}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge className={priorityColors[task.priority]}>{task.priority}</Badge>
                            <Badge variant="outline" className={statusColors[task.status]}>
                              {task.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  {/* Team Activity */}
                  <Card className="border-border">
                    <CardHeader>
                      <CardTitle className="text-card-foreground">Team Activity</CardTitle>
                      <CardDescription>Hoạt động gần đây của team</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Avatar className="w-6 h-6">
                          <AvatarFallback className="bg-chart-1 text-white text-xs">NA</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="text-sm text-card-foreground">
                            <span className="font-medium">Nguyễn Văn A</span> completed task
                          </p>
                          <p className="text-xs text-muted-foreground">2 hours ago</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Avatar className="w-6 h-6">
                          <AvatarFallback className="bg-chart-2 text-white text-xs">TB</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="text-sm text-card-foreground">
                            <span className="font-medium">Trần Thị B</span> added comment
                          </p>
                          <p className="text-xs text-muted-foreground">4 hours ago</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Avatar className="w-6 h-6">
                          <AvatarFallback className="bg-chart-3 text-white text-xs">LC</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="text-sm text-card-foreground">
                            <span className="font-medium">Lê Văn C</span> created new task
                          </p>
                          <p className="text-xs text-muted-foreground">6 hours ago</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Project Progress */}
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-card-foreground">Project Progress</CardTitle>
                    <CardDescription>Tiến độ các dự án đang thực hiện</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-card-foreground">Taskio Web</h4>
                          <span className="text-sm text-muted-foreground">75%</span>
                        </div>
                        <Progress value={75} className="h-2" />
                        <p className="text-xs text-muted-foreground">12/16 tasks completed</p>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-card-foreground">Taskio API</h4>
                          <span className="text-sm text-muted-foreground">60%</span>
                        </div>
                        <Progress value={60} className="h-2" />
                        <p className="text-xs text-muted-foreground">9/15 tasks completed</p>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-card-foreground">Taskio Core</h4>
                          <span className="text-sm text-muted-foreground">40%</span>
                        </div>
                        <Progress value={40} className="h-2" />
                        <p className="text-xs text-muted-foreground">4/10 tasks completed</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="kanban" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* To Do Column */}
                  <Card className="border-border">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-medium text-card-foreground flex items-center gap-2">
                          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                          To Do ({tasksByStatus.todo.length})
                        </CardTitle>
                        <Button variant="ghost" size="icon" className="w-6 h-6">
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {tasksByStatus.todo.map((task) => (
                        <Card
                          key={task.id}
                          className="p-3 border-border hover:shadow-md transition-shadow cursor-pointer"
                        >
                          <div className="space-y-2">
                            <div className="flex items-start justify-between">
                              <h4 className="text-sm font-medium text-card-foreground line-clamp-2">{task.title}</h4>
                              <Button variant="ghost" size="icon" className="w-6 h-6 opacity-0 group-hover:opacity-100">
                                <MoreHorizontal className="w-3 h-3" />
                              </Button>
                            </div>
                            <p className="text-xs text-muted-foreground line-clamp-2">{task.description}</p>
                            <div className="flex items-center justify-between">
                              <Badge className={priorityColors[task.priority]} variant="secondary">
                                {task.priority}
                              </Badge>
                              <Avatar className="w-6 h-6">
                                <AvatarFallback className="bg-accent text-accent-foreground text-xs">
                                  {task.assignee.initials}
                                </AvatarFallback>
                              </Avatar>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Calendar className="w-3 h-3" />
                              {task.dueDate}
                            </div>
                          </div>
                        </Card>
                      ))}
                    </CardContent>
                  </Card>

                  {/* In Progress Column */}
                  <Card className="border-border">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-medium text-card-foreground flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          In Progress ({tasksByStatus["in-progress"].length})
                        </CardTitle>
                        <Button variant="ghost" size="icon" className="w-6 h-6">
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {tasksByStatus["in-progress"].map((task) => (
                        <Card
                          key={task.id}
                          className="p-3 border-border hover:shadow-md transition-shadow cursor-pointer"
                        >
                          <div className="space-y-2">
                            <div className="flex items-start justify-between">
                              <h4 className="text-sm font-medium text-card-foreground line-clamp-2">{task.title}</h4>
                              <Button variant="ghost" size="icon" className="w-6 h-6 opacity-0 group-hover:opacity-100">
                                <MoreHorizontal className="w-3 h-3" />
                              </Button>
                            </div>
                            <p className="text-xs text-muted-foreground line-clamp-2">{task.description}</p>
                            <div className="flex items-center justify-between">
                              <Badge className={priorityColors[task.priority]} variant="secondary">
                                {task.priority}
                              </Badge>
                              <Avatar className="w-6 h-6">
                                <AvatarFallback className="bg-accent text-accent-foreground text-xs">
                                  {task.assignee.initials}
                                </AvatarFallback>
                              </Avatar>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Calendar className="w-3 h-3" />
                              {task.dueDate}
                            </div>
                          </div>
                        </Card>
                      ))}
                    </CardContent>
                  </Card>

                  {/* Review Column */}
                  <Card className="border-border">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-medium text-card-foreground flex items-center gap-2">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          Review ({tasksByStatus.review.length})
                        </CardTitle>
                        <Button variant="ghost" size="icon" className="w-6 h-6">
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {tasksByStatus.review.map((task) => (
                        <Card
                          key={task.id}
                          className="p-3 border-border hover:shadow-md transition-shadow cursor-pointer"
                        >
                          <div className="space-y-2">
                            <div className="flex items-start justify-between">
                              <h4 className="text-sm font-medium text-card-foreground line-clamp-2">{task.title}</h4>
                              <Button variant="ghost" size="icon" className="w-6 h-6 opacity-0 group-hover:opacity-100">
                                <MoreHorizontal className="w-3 h-3" />
                              </Button>
                            </div>
                            <p className="text-xs text-muted-foreground line-clamp-2">{task.description}</p>
                            <div className="flex items-center justify-between">
                              <Badge className={priorityColors[task.priority]} variant="secondary">
                                {task.priority}
                              </Badge>
                              <Avatar className="w-6 h-6">
                                <AvatarFallback className="bg-accent text-accent-foreground text-xs">
                                  {task.assignee.initials}
                                </AvatarFallback>
                              </Avatar>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Calendar className="w-3 h-3" />
                              {task.dueDate}
                            </div>
                          </div>
                        </Card>
                      ))}
                    </CardContent>
                  </Card>

                  {/* Done Column */}
                  <Card className="border-border">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-medium text-card-foreground flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          Done ({tasksByStatus.done.length})
                        </CardTitle>
                        <Button variant="ghost" size="icon" className="w-6 h-6">
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {tasksByStatus.done.map((task) => (
                        <Card
                          key={task.id}
                          className="p-3 border-border hover:shadow-md transition-shadow cursor-pointer opacity-75"
                        >
                          <div className="space-y-2">
                            <div className="flex items-start justify-between">
                              <h4 className="text-sm font-medium text-card-foreground line-clamp-2 line-through">
                                {task.title}
                              </h4>
                              <Button variant="ghost" size="icon" className="w-6 h-6 opacity-0 group-hover:opacity-100">
                                <MoreHorizontal className="w-3 h-3" />
                              </Button>
                            </div>
                            <p className="text-xs text-muted-foreground line-clamp-2">{task.description}</p>
                            <div className="flex items-center justify-between">
                              <Badge className={priorityColors[task.priority]} variant="secondary">
                                {task.priority}
                              </Badge>
                              <Avatar className="w-6 h-6">
                                <AvatarFallback className="bg-accent text-accent-foreground text-xs">
                                  {task.assignee.initials}
                                </AvatarFallback>
                              </Avatar>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <CheckCircle2 className="w-3 h-3 text-green-500" />
                              Completed
                            </div>
                          </div>
                        </Card>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="analytics" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card className="border-border">
                    <CardHeader>
                      <CardTitle className="text-card-foreground">Task Completion Rate</CardTitle>
                      <CardDescription>Tỷ lệ hoàn thành task theo thời gian</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[200px] flex items-center justify-center text-muted-foreground">
                        <div className="text-center">
                          <TrendingUp className="w-12 h-12 mx-auto mb-2 opacity-50" />
                          <p>Chart sẽ được hiển thị ở đây</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardHeader>
                      <CardTitle className="text-card-foreground">Team Performance</CardTitle>
                      <CardDescription>Hiệu suất làm việc của team</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Avatar className="w-8 h-8">
                              <AvatarFallback className="bg-chart-1 text-white">NA</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-card-foreground">Nguyễn Văn A</p>
                              <p className="text-sm text-muted-foreground">Frontend Developer</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-card-foreground">8 tasks</p>
                            <p className="text-sm text-chart-4">+2 this week</p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Avatar className="w-8 h-8">
                              <AvatarFallback className="bg-chart-2 text-white">TB</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-card-foreground">Trần Thị B</p>
                              <p className="text-sm text-muted-foreground">Backend Developer</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-card-foreground">6 tasks</p>
                            <p className="text-sm text-chart-4">+1 this week</p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Avatar className="w-8 h-8">
                              <AvatarFallback className="bg-chart-3 text-white">LC</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-card-foreground">Lê Văn C</p>
                              <p className="text-sm text-muted-foreground">Database Admin</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-card-foreground">4 tasks</p>
                            <p className="text-sm text-chart-4">+3 this week</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-card-foreground">Project Timeline</CardTitle>
                    <CardDescription>Timeline và milestone của các dự án</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-3 h-3 bg-chart-1 rounded-full mt-2"></div>
                        <div className="flex-1">
                          <h4 className="font-medium text-card-foreground">Taskio Web Launch</h4>
                          <p className="text-sm text-muted-foreground mb-2">Expected completion: January 30, 2024</p>
                          <Progress value={75} className="h-2" />
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-3 h-3 bg-chart-2 rounded-full mt-2"></div>
                        <div className="flex-1">
                          <h4 className="font-medium text-card-foreground">API Integration</h4>
                          <p className="text-sm text-muted-foreground mb-2">Expected completion: February 15, 2024</p>
                          <Progress value={60} className="h-2" />
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-3 h-3 bg-chart-3 rounded-full mt-2"></div>
                        <div className="flex-1">
                          <h4 className="font-medium text-card-foreground">Mobile App Development</h4>
                          <p className="text-sm text-muted-foreground mb-2">Expected completion: March 20, 2024</p>
                          <Progress value={25} className="h-2" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}
