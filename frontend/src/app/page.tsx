"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import '@/styles/landingpage.css';
import {
  CheckCircle,
  Users,
  BarChart3,
  Shield,
  Zap,
  Globe,
  ArrowRight,
  Star,
  Menu,
  Play,
  TrendingUp,
  Clock,
  Award,
  Target,
  Smartphone,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-white/60 header">
        <div className="container mx-auto px-6 lg:px-12 flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg text-white font-bold shadow-sm logo-icon">
              T
            </div>
            <span className="text-xl font-bold logo-text">Taskio</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium transition-colors relative group nav-link">
              Tính năng
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full nav-link-underline"></span>
            </a>
            <a href="#pricing" className="text-sm font-medium transition-colors relative group nav-link">
              Bảng giá
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full nav-link-underline"></span>
            </a>
            <a href="#testimonials" className="text-sm font-medium transition-colors relative group nav-link">
              Đánh giá
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full nav-link-underline"></span>
            </a>
            <a href="#contact" className="text-sm font-medium transition-colors relative group nav-link">
              Liên hệ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full nav-link-underline"></span>
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:inline-flex button-ghost">
              <Link href="/auth/login">Đăng nhập</Link>
            </Button>
            <Button size="sm" className="text-white shadow-sm button-primary">
              Dùng thử miễn phí
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 hero-bg"></div>
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl opacity-30 hero-blur-right"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-20 hero-blur-left"></div>

        <div className="absolute top-32 left-1/4 w-4 h-4 rounded-full opacity-40 hero-dot-1"></div>
        <div className="absolute top-48 right-1/3 w-6 h-6 rotate-45 opacity-30 hero-dot-2"></div>
        <div className="absolute bottom-32 left-1/3 w-8 h-8 rounded-full opacity-25 hero-dot-3"></div>

        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <Badge variant="secondary" className="mb-6 px-4 py-2 badge">
                🚀 Nền tảng quản lý công việc thế hệ mới
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl leading-tight hero-title">
                Quản lý công việc <span className="hero-title-gradient">đa tổ chức</span> hiệu quả
              </h1>
              <p className="mt-6 text-lg leading-8 max-w-2xl lg:max-w-none hero-text">
                Taskio giúp các doanh nghiệp và tổ chức quản lý dự án, theo dõi tiến độ và tăng cường hợp tác một cách
                chuyên nghiệp như Jira nhưng đơn giản hơn.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button size="lg" className="h-14 px-8 text-white shadow-lg hover:shadow-xl transition-all button-primary">
                  Bắt đầu miễn phí
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm hero-text">
                <div className="flex items-center gap-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                  Miễn phí 14 ngày
                </div>
                <div className="flex items-center gap-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                  Không cần thẻ tín dụng
                </div>
                <div className="flex items-center gap-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                  Hỗ trợ 24/7
                </div>
              </div>
            </div>

            <div className="relative lg:block hidden">
              <div className="relative bg-white rounded-2xl shadow-2xl border p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500 hero-card">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full hero-card-dot-red"></div>
                  <div className="w-3 h-3 rounded-full hero-card-dot-yellow"></div>
                  <div className="w-3 h-3 rounded-full hero-card-dot-green"></div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="h-4 rounded w-32 hero-card-bar"></div>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full hero-card-dot-blue-1"></div>
                      <div className="w-2 h-2 rounded-full hero-card-dot-blue-2"></div>
                      <div className="w-2 h-2 rounded-full hero-card-dot-blue-3"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-20 rounded-lg flex flex-col items-center justify-center p-3 hero-card-box-1">
                      <TrendingUp className="h-6 w-6 mb-1 text-blue-500" />
                      <div className="w-8 h-1 rounded bg-blue-500"></div>
                    </div>
                    <div className="h-20 rounded-lg flex flex-col items-center justify-center p-3 hero-card-box-2">
                      <Users className="h-6 w-6 mb-1 text-green-500" />
                      <div className="w-6 h-1 rounded bg-green-500"></div>
                    </div>
                    <div className="h-20 rounded-lg flex flex-col items-center justify-center p-3 hero-card-box-3">
                      <Clock className="h-6 w-6 mb-1 text-amber-500" />
                      <div className="w-10 h-1 rounded bg-amber-500"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="h-3 rounded w-full hero-card-bar-1"></div>
                    <div className="h-3 rounded w-4/5 hero-card-bar-2"></div>
                    <div className="h-3 rounded w-3/5 hero-card-bar-3"></div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 text-white p-4 rounded-xl shadow-lg hero-card-award">
                <Award className="h-6 w-6" />
              </div>

              <div className="absolute -top-4 -left-4 text-white p-3 rounded-lg shadow-md hero-card-target">
                <Target className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 stats-section">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-3 p-6 rounded-xl stats-card">
              <div className="text-4xl font-bold stats-number">10,000+</div>
              <div className="text-sm font-medium stats-text">Doanh nghiệp tin tưởng</div>
            </div>
            <div className="space-y-3 p-6 rounded-xl stats-card">
              <div className="text-4xl font-bold stats-number">99.9%</div>
              <div className="text-sm font-medium stats-text">Thời gian hoạt động</div>
            </div>
            <div className="space-y-3 p-6 rounded-xl stats-card">
              <div className="text-4xl font-bold stats-number">40%</div>
              <div className="text-sm font-medium stats-text">Tăng hiệu suất</div>
            </div>
            <div className="space-y-3 p-6 rounded-xl stats-card">
              <div className="text-4xl font-bold stats-number">24/7</div>
              <div className="text-sm font-medium stats-text">Hỗ trợ khách hàng</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl features-title">Tính năng nổi bật</h2>
            <p className="mt-6 text-xl features-text">Tất cả công cụ bạn cần để quản lý dự án hiệu quả</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group p-8 rounded-2xl card-feature-1">
              <CardHeader className="pb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 card-feature-icon-1">
                  <Users className="h-8 w-8 text-blue-500" />
                </div>
                <CardTitle className="text-2xl mb-3 card-title">Quản lý đa tổ chức</CardTitle>
                <CardDescription className="text-lg leading-relaxed card-description">
                  Quản lý nhiều tổ chức, phòng ban và nhóm dự án trong một nền tảng duy nhất
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group p-8 rounded-2xl card-feature-2">
              <CardHeader className="pb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 card-feature-icon-2">
                  <BarChart3 className="h-8 w-8 text-green-500" />
                </div>
                <CardTitle className="text-2xl mb-3 card-title">Báo cáo thông minh</CardTitle>
                <CardDescription className="text-lg leading-relaxed card-description">
                  Theo dõi tiến độ dự án với dashboard trực quan và báo cáo chi tiết
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group p-8 rounded-2xl card-feature-3">
              <CardHeader className="pb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 card-feature-icon-3">
                  <Zap className="h-8 w-8 text-amber-500" />
                </div>
                <CardTitle className="text-2xl mb-3 card-title">Tự động hóa</CardTitle>
                <CardDescription className="text-lg leading-relaxed card-description">
                  Tự động hóa quy trình làm việc và giảm thiểu công việc thủ công
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group p-8 rounded-2xl card-feature-4">
              <CardHeader className="pb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 card-feature-icon-4">
                  <Shield className="h-8 w-8 text-green-500" />
                </div>
                <CardTitle className="text-2xl mb-3 card-title">Bảo mật cao</CardTitle>
                <CardDescription className="text-lg leading-relaxed card-description">
                  Mã hóa dữ liệu end-to-end và tuân thủ các tiêu chuẩn bảo mật quốc tế
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group p-8 rounded-2xl card-feature-5">
              <CardHeader className="pb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 card-feature-icon-5">
                  <Globe className="h-8 w-8 text-purple-500" />
                </div>
                <CardTitle className="text-2xl mb-3 card-title">Tích hợp dễ dàng</CardTitle>
                <CardDescription className="text-lg leading-relaxed card-description">
                  Kết nối với hơn 100+ ứng dụng phổ biến như Slack, Google Workspace, Microsoft Teams
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group p-8 rounded-2xl card-feature-6">
              <CardHeader className="pb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 card-feature-icon-6">
                  <Smartphone className="h-8 w-8 text-blue-500" />
                </div>
                <CardTitle className="text-2xl mb-3 card-title">Dễ sử dụng</CardTitle>
                <CardDescription className="text-lg leading-relaxed card-description">
                  Giao diện trực quan, dễ học và sử dụng cho mọi thành viên trong tổ chức
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-24 testimonials-section">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl features-title">Khách hàng nói gì về chúng tôi</h2>
            <p className="mt-6 text-xl features-text">Hơn 10,000+ doanh nghiệp tin tưởng sử dụng Taskio</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 p-8 rounded-2xl testimonial-card">
              <CardContent className="pt-0">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current testimonial-star" />
                  ))}
                </div>
                <p className="mb-8 text-lg leading-relaxed testimonial-text">
                  "Taskio đã giúp công ty chúng tôi tăng hiệu suất làm việc lên 40%. Giao diện đẹp và dễ sử dụng."
                </p>
                <div className="flex items-center">
                  <div className="h-14 w-14 rounded-full flex items-center justify-center text-white font-semibold testimonial-avatar">
                    NV
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-lg testimonial-name">Nguyễn Văn A</p>
                    <p className="text-sm testimonial-role">CEO, Tech Corp</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 p-8 rounded-2xl testimonial-card">
              <CardContent className="pt-0">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current testimonial-star" />
                  ))}
                </div>
                <p className="mb-8 text-lg leading-relaxed testimonial-text">
                  "Chuyển từ Jira sang Taskio là quyết định đúng đắn. Đơn giản hơn nhưng vẫn đầy đủ tính năng."
                </p>
                <div className="flex items-center">
                  <div className="h-14 w-14 rounded-full flex items-center justify-center text-white font-semibold testimonial-avatar">
                    LT
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-lg testimonial-name">Lê Thị B</p>
                    <p className="text-sm testimonial-role">Project Manager, StartupXYZ</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 p-8 rounded-2xl testimonial-card">
              <CardContent className="pt-0">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current testimonial-star" />
                  ))}
                </div>
                <p className="mb-8 text-lg leading-relaxed testimonial-text">
                  "Hỗ trợ khách hàng tuyệt vời và tính năng báo cáo rất chi tiết. Highly recommended!"
                </p>
                <div className="flex items-center">
                  <div className="h-14 w-14 rounded-full flex items-center justify-center text-white font-semibold testimonial-avatar">
                    TM
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-lg testimonial-name">Trần Minh C</p>
                    <p className="text-sm testimonial-role">CTO, Digital Agency</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl pricing-title">Bảng giá đơn giản</h2>
            <p className="mt-6 text-xl pricing-text">Chọn gói phù hợp với quy mô tổ chức của bạn</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 p-8 rounded-2xl pricing-card">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl card-title">Starter</CardTitle>
                <CardDescription className="text-lg card-description">Dành cho nhóm nhỏ</CardDescription>
                <div className="mt-6">
                  <span className="text-4xl font-bold pricing-price">$9</span>
                  <span className="text-lg pricing-unit">/người/tháng</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0 text-blue-500" />
                    <span className="text-sm pricing-feature">Tối đa 10 thành viên</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0 text-blue-500" />
                    <span className="text-sm pricing-feature">Quản lý dự án cơ bản</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0 text-blue-500" />
                    <span className="text-sm pricing-feature">Báo cáo cơ bản</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0 text-blue-500" />
                    <span className="text-sm pricing-feature">Hỗ trợ email</span>
                  </li>
                </ul>
                <Button className="w-full mt-8 h-12 bg-transparent button-outline" variant="outline">
                  Bắt đầu miễn phí
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-500 shadow-xl relative p-8 rounded-2xl pricing-card-professional">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="text-white px-4 py-1 button-primary">Phổ biến nhất</Badge>
              </div>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl card-title">Professional</CardTitle>
                <CardDescription className="text-lg card-description">Dành cho doanh nghiệp</CardDescription>
                <div className="mt-6">
                  <span className="text-4xl font-bold pricing-price">$19</span>
                  <span className="text-lg pricing-unit">/người/tháng</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0 text-blue-500" />
                    <span className="text-sm pricing-feature">Không giới hạn thành viên</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0 text-blue-500" />
                    <span className="text-sm pricing-feature">Quản lý đa tổ chức</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0 text-blue-500" />
                    <span className="text-sm pricing-feature">Báo cáo nâng cao</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0 text-blue-500" />
                    <span className="text-sm pricing-feature">Tích hợp API</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0 text-blue-500" />
                    <span className="text-sm pricing-feature">Hỗ trợ 24/7</span>
                  </li>
                </ul>
                <Button className="w-full mt-8 h-12 text-white button-primary">
                  Bắt đầu miễn phí
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 p-8 rounded-2xl pricing-card">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl card-title">Enterprise</CardTitle>
                <CardDescription className="text-lg card-description">Dành cho tập đoàn</CardDescription>
                <div className="mt-6">
                  <span className="text-4xl font-bold pricing-price">Liên hệ</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0 text-blue-500" />
                    <span className="text-sm pricing-feature">Tùy chỉnh hoàn toàn</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0 text-blue-500" />
                    <span className="text-sm pricing-feature">Triển khai on-premise</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0 text-blue-500" />
                    <span className="text-sm pricing-feature">Bảo mật nâng cao</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0 text-blue-500" />
                    <span className="text-sm pricing-feature">Đào tạo chuyên sâu</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0 text-blue-500" />
                    <span className="text-sm pricing-feature">Account manager riêng</span>
                  </li>
                </ul>
                <Button className="w-full mt-8 h-12 bg-transparent button-outline" variant="outline">
                  Liên hệ tư vấn
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden cta-section">
        <div className="absolute inset-0 opacity-80 cta-overlay"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full blur-2xl opacity-10 cta-blur-1"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-white rounded-full blur-3xl opacity-5 cta-blur-2"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl cta-title">Sẵn sàng tăng hiệu suất làm việc?</h2>
            <p className="mt-6 text-xl opacity-90 leading-relaxed cta-text">Tham gia cùng hàng nghìn doanh nghiệp đã tin tưởng Taskio</p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button size="lg" className="h-14 px-10 shadow-lg hover:shadow-xl transition-all text-lg font-semibold button-cta-primary">
                Dùng thử miễn phí 14 ngày
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-10 border-2 backdrop-blur-sm text-lg bg-transparent button-cta-outline">
                Đặt lịch demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t footer">
        <div className="container mx-auto px-6 lg:px-12 py-24">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl text-white font-bold shadow-sm footer-logo">
                  T
                </div>
                <span className="text-2xl font-bold footer-logo-text">Taskio</span>
              </div>
              <p className="leading-relaxed footer-text">Nền tảng quản lý công việc đa tổ chức hiện đại và chuyên nghiệp.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-6 text-lg footer-heading">Sản phẩm</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="transition-colors hover:underline footer-link">Tính năng</a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:underline footer-link">Bảng giá</a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:underline footer-link">Tích hợp</a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:underline footer-link">API</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-6 text-lg footer-heading">Hỗ trợ</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="transition-colors hover:underline footer-link">Trung tâm trợ giúp</a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:underline footer-link">Liên hệ</a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:underline footer-link">Cộng đồng</a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:underline footer-link">Trạng thái hệ thống</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-6 text-lg footer-heading">Công ty</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="transition-colors hover:underline footer-link">Về chúng tôi</a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:underline footer-link">Blog</a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:underline footer-link">Tuyển dụng</a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:underline footer-link">Báo chí</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="footer-text">© 2024 Taskio. Tất cả quyền được bảo lưu.</p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a href="#" className="transition-colors hover:underline footer-link">Chính sách bảo mật</a>
              <a href="#" className="transition-colors hover:underline footer-link">Điều khoản sử dụng</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}