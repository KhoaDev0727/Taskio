"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react"

interface LoginFormProps {
  onSwitchToRegister: () => void
}

export default function LoginForm({ onSwitchToRegister }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log("Login attempt:", { email, password })
    setIsLoading(false)
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">Chào mừng trở lại</h2>
        <p className="text-white/70 drop-shadow-sm">Đăng nhập để tiếp tục quản lý công việc</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-white/90 text-sm font-medium drop-shadow-sm">
            Địa chỉ email
          </Label>
          <div className="relative group">
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5 group-focus-within:text-blue-400 transition-colors" />
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-12 h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-xl input-glow transition-all duration-300 focus:bg-white/15"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="password" className="text-white/90 text-sm font-medium drop-shadow-sm">
            Mật khẩu
          </Label>
          <div className="relative group">
            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5 group-focus-within:text-blue-400 transition-colors" />
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-12 pr-12 h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-xl input-glow transition-all duration-300 focus:bg-white/15"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white transition-colors"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center space-x-3 cursor-pointer group">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-white/30 bg-white/10 text-blue-500 focus:ring-blue-500 focus:ring-offset-0"
            />
            <span className="text-white/70 text-sm group-hover:text-white transition-colors drop-shadow-sm">
              Ghi nhớ đăng nhập
            </span>
          </label>
          <button
            type="button"
            className="text-white hover:text-white/80 text-sm font-medium transition-colors drop-shadow-sm"
          >
            Quên mật khẩu?
          </button>
        </div>

        <Button
          type="submit"
          className="w-full h-12 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-xl btn-hover-effect transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg drop-shadow-md"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Đang đăng nhập...</span>
            </div>
          ) : (
            <div className="flex items-center justify-center space-x-2">
              <span>Đăng nhập</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          )}
        </Button>
      </form>

      <div className="text-center pt-4 border-t border-white/10">
        <p className="text-white/70 drop-shadow-sm">
          Chưa có tài khoản?{" "}
          <button
            onClick={onSwitchToRegister}
            className="text-white hover:text-white/80 font-semibold transition-colors hover:underline drop-shadow-sm"
          >
            Đăng ký
          </button>
        </p>
      </div>
    </div>
  )
}
