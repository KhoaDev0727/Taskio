"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import LoginForm from "./login-form";
import RegisterForm from "./register-form";

interface AuthContainerProps {
  initialForm?: "login" | "register";
}

export default function AuthContainer({ initialForm = "login" }: AuthContainerProps) {
  const [isLogin, setIsLogin] = useState(initialForm === "login");
  const router = useRouter();

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg"></div>
      <div className="bg-decoration bg-decoration-1"></div>
      <div className="bg-decoration bg-decoration-2"></div>
      <div className="bg-decoration bg-decoration-3"></div>
      <div className="bg-decoration bg-decoration-4"></div>
      <div className="bg-decoration bg-decoration-5"></div>
      <div className="bg-decoration bg-decoration-6"></div>
      <div className="bg-decoration bg-decoration-7"></div>
      <div className="bg-decoration bg-decoration-8"></div>
      <div className="bg-decoration bg-decoration-9"></div>
      <div className="bg-decoration bg-decoration-10"></div>
      <div className="floating-triangle"></div>
      <div className="floating-square"></div>
      <div className="floating-circle"></div>
      <div className="floating-diamond"></div>
      <div className="floating-star"></div>
      <div className="absolute top-20 left-10 w-8 h-8 border-2 border-blue-200/30 rotate-45 floating-shape"></div>
      <div
        className="absolute top-40 right-20 w-6 h-6 bg-blue-100/20 rounded-full floating-shape"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-32 left-1/4 w-4 h-4 border border-blue-300/40 floating-shape"
        style={{ animationDelay: "4s" }}
      ></div>
      <div
        className="absolute top-1/3 left-1/3 w-3 h-3 bg-white/15 rounded-full floating-shape"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-1/4 right-1/3 w-5 h-5 border border-blue-200/25 rotate-12 floating-shape"
        style={{ animationDelay: "3s" }}
      ></div>
      <div
        className="absolute top-2/3 right-1/4 w-2 h-2 bg-blue-100/30 floating-shape"
        style={{ animationDelay: "5s" }}
      ></div>
      <div
        className="absolute top-16 right-1/3 w-7 h-7 border-2 border-white/20 rounded-full floating-shape"
        style={{ animationDelay: "1.5s" }}
      ></div>
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 flex justify-center lg:justify-end">
            <div className="w-full max-w-md">
              <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/30 p-8 auth-slide-in">
                {isLogin ? (
                  <LoginForm onSwitchToRegister={() => setIsLogin(false)} router={router} />
                ) : (
                  <RegisterForm onSwitchToLogin={() => setIsLogin(true)} router={router} />
                )}
              </div>
              <div className="text-center mt-8 auth-fade-in">
                <p className="text-white/60 text-sm">© 2024 Taskio. Tất cả quyền được bảo lưu.</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 text-center lg:text-left flex flex-col justify-center lg:pl-8">
            <div className="auth-fade-in">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-md rounded-3xl mb-8 pulse-glow border border-white/20">
                <svg
                  className="w-12 h-12 text-white drop-shadow-lg"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight drop-shadow-2xl">Taskio</h1>
              <p className="text-white/90 text-xl lg:text-2xl mb-6 drop-shadow-lg">
                Quản lý công việc đa tổ chức thông minh
              </p>
              <p className="text-white/80 text-lg max-w-lg drop-shadow-md">
                Nền tảng SaaS hiện đại giúp bạn quản lý công việc hiệu quả với giao diện trực quan và tính năng đa tổ chức mạnh mẽ.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}