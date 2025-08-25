"use client";
import type React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react";
import { API_BASE_URL } from "@/config";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Đăng nhập thất bại. Vui lòng kiểm tra email và mật khẩu.");
      }

      const data = await response.json();
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      router.push("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Đã xảy ra lỗi. Vui lòng thử lại.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">Chào mừng trở lại</h2>
        <p className="text-white/70 drop-shadow-sm">Đăng nhập để tiếp tục quản lý công việc</p>
      </div>
      {error && <p className="text-red-500 text-center">{error}</p>}
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
            onClick={() => router.push("/auth/register")}
            className="text-white hover:text-white/80 font-semibold transition-colors hover:underline drop-shadow-sm"
          >
            Đăng ký
          </button>
        </p>
      </div>
    </div>
  );
}