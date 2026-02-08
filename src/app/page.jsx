"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Card, CardHeader, CardTitle, CardDescription, CardContent 
} from "@/components/ui/card";
import { 
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription 
} from "@/components/ui/dialog"; // ใช้ Dialog สำหรับแสดงรายละเอียด
import { ScrollArea } from "@/components/ui/scroll-area"; // ใช้ ScrollArea ถ้าเนื้อหายาว
import { Badge } from "@/components/ui/badge";
import { 
  Rocket, BookOpen, PenTool, Key, Palette, ArrowRight, 
  Sparkles, DollarSign, CheckCircle2, XCircle, ListChecks 
} from "lucide-react";

// Import Sidebar Components
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

// ดึงข้อมูลอาชีพมาใช้
import { careers } from "@/lib/data";

export default function Home() {
  const [selectedFeatured, setSelectedFeatured] = useState(null);

  // คัดเลือก 5 อาชีพที่น่าสนใจ (ตัวอย่าง: เลือก ID 1, 6, 10, 15, 18)
  const featuredCareerIds = [1, 6, 10, 15, 18];
  const featuredCareers = careers.filter(c => featuredCareerIds.includes(c.id));

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-[#F8FAFC]">
        
        {/* Mobile Header */}
        <header className="flex h-14 shrink-0 items-center gap-2 border-b bg-white/50 px-4 backdrop-blur-md sticky top-0 z-10 lg:hidden">
            <SidebarTrigger />
            <span className="font-medium text-slate-600">Menu</span>
        </header>

        <div className="min-h-screen w-full flex flex-col items-center p-6 md:p-10 relative">
          
          {/* Desktop Trigger */}
          <div className="absolute top-4 left-4 hidden lg:block z-20">
             <SidebarTrigger className="bg-white/50 hover:bg-white shadow-sm border border-slate-200" />
          </div>

          {/* Background */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px]"></div>
              <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-100/50 rounded-full blur-[120px]"></div>
          </div>

          <div className="max-w-6xl w-full z-10 flex flex-col items-center gap-16 pb-20">
            
            {/* --- Hero Section --- */}
            <div className="text-center space-y-6 animate-fade-in-up mt-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-slate-200 rounded-full shadow-sm">
                <Rocket className="text-blue-600 w-4 h-4" /> 
                <span className="text-sm font-medium text-slate-600">Start your journey today</span>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Career Path <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Developer</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-500 font-light max-w-2xl mx-auto">
                  วางแผนอนาคต ค้นหาศักยภาพ และพัฒนาสกิลสู่สายงานที่คุณใฝ่ฝัน
                </p>
              </div>

              <div className="pt-4">
                <a href="https://dekshowport.com/" target="_blank" rel="noopener noreferrer">
                  <Button className="h-14 px-8 text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:scale-[1.02] border-0">
                      <Palette className="mr-2 h-5 w-5" /> 
                      ดูตัวอย่าง Portfolio (DekShowPort)
                  </Button>
                </a>
              </div>
            </div>
            
            {/* --- Main Menu Cards --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full animate-fade-in-up delay-200">
              <Link href="/planner" className="group h-full">
                <Card className="h-full border border-slate-100 bg-white/80 backdrop-blur-xl shadow-sm hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 group-hover:-translate-y-1 rounded-3xl overflow-hidden">
                  <CardHeader className="p-8 pb-4">
                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                      <BookOpen size={28} />
                    </div>
                    <CardTitle className="text-2xl font-bold text-slate-800">วางแผนอาชีพ</CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 pt-0">
                    <CardDescription className="text-base text-slate-500">
                      ตรวจสอบ Roadmap และ Checklist สกิลที่จำเป็นต้องมี
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
              
              <Link href="/assessment" className="group h-full">
                <Card className="h-full border border-slate-100 bg-white/80 backdrop-blur-xl shadow-sm hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-300 group-hover:-translate-y-1 rounded-3xl overflow-hidden">
                  <CardHeader className="p-8 pb-4">
                    <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-500 mb-4 group-hover:scale-110 transition-transform">
                      <PenTool size={28} />
                    </div>
                    <CardTitle className="text-2xl font-bold text-slate-800">ประเมินตนเอง</CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 pt-0">
                    <CardDescription className="text-base text-slate-500">
                      ทำแบบทดสอบเพื่อค้นหาตัวตน และอาชีพที่เหมาะสม
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/login" className="group h-full">
                <Card className="h-full border border-slate-100 bg-white/80 backdrop-blur-xl shadow-sm hover:shadow-xl hover:shadow-green-100/50 transition-all duration-300 group-hover:-translate-y-1 rounded-3xl overflow-hidden">
                  <CardHeader className="p-8 pb-4">
                    <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-4 group-hover:scale-110 transition-transform">
                      <Key size={28} />
                    </div>
                    <CardTitle className="text-2xl font-bold text-slate-800">เข้าสู่ระบบ</CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 pt-0">
                    <CardDescription className="text-base text-slate-500">
                      สำหรับสมาชิกเพื่อบันทึกความคืบหน้าและข้อมูลส่วนตัว
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            </div>

            {/* --- Featured Careers Section (ส่วนใหม่) --- */}
            <div className="w-full space-y-8 animate-fade-in-up delay-300">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-yellow-100 text-yellow-600 rounded-lg">
                        <Sparkles className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900">อาชีพมาแรง (Featured)</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {featuredCareers.map((career) => (
                        <Card 
                            key={career.id}
                            onClick={() => setSelectedFeatured(career)}
                            className="group cursor-pointer border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/60 backdrop-blur-sm"
                        >
                            <CardHeader className="p-5">
                                <Badge className="w-fit mb-3 bg-slate-100 text-slate-600 hover:bg-slate-200 border-0 pointer-events-none">
                                    {career.category}
                                </Badge>
                                <CardTitle className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-1">
                                    {career.name}
                                </CardTitle>
                                <CardDescription className="line-clamp-2 text-sm mt-2">
                                    {career.description}
                                </CardDescription>
                                <div className="mt-4 flex items-center text-sm font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                    ดูรายละเอียด <ArrowRight className="ml-1 w-4 h-4" />
                                </div>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>

          </div>
        </div>

        {/* --- Dialog Popup แสดงรายละเอียดอาชีพ --- */}
        <Dialog open={!!selectedFeatured} onOpenChange={(open) => !open && setSelectedFeatured(null)}>
            <DialogContent className="max-w-2xl max-h-[90vh] p-0 overflow-hidden rounded-2xl border-0 shadow-2xl">
                {selectedFeatured && (
                    <div className="flex flex-col h-full bg-[#F8FAFC]">
                        {/* Header Dialog */}
                        <div className="p-6 bg-white border-b border-slate-100">
                            <div className="flex justify-between items-start gap-4">
                                <div>
                                    <Badge className="mb-2 bg-blue-600 hover:bg-blue-700">{selectedFeatured.category}</Badge>
                                    <DialogTitle className="text-2xl font-bold text-slate-900">{selectedFeatured.name}</DialogTitle>
                                    <DialogDescription className="text-base text-slate-500 mt-1">
                                        {selectedFeatured.description}
                                    </DialogDescription>
                                </div>
                            </div>
                        </div>

                        {/* Body Dialog (Scrollable) */}
                        <ScrollArea className="flex-1 p-6">
                            <div className="space-y-6">
                                {/* Salary */}
                                <div className="p-4 bg-green-50 rounded-xl border border-green-100 flex items-center justify-between">
                                    <span className="font-medium text-green-800">ฐานเงินเดือนโดยประมาณ</span>
                                    <span className="text-lg font-bold text-green-700 flex items-center gap-1">
                                        <DollarSign className="w-5 h-5" /> {selectedFeatured.salary}
                                    </span>
                                </div>

                                {/* Responsibilities */}
                                <div className="space-y-3">
                                    <h3 className="font-semibold text-slate-900 flex items-center gap-2">
                                        <ListChecks className="w-5 h-5 text-blue-600" /> หน้าที่ความรับผิดชอบ
                                    </h3>
                                    <ul className="space-y-2 pl-2">
                                        {selectedFeatured.responsibilities?.map((item, idx) => (
                                            <li key={idx} className="flex gap-3 text-sm text-slate-600">
                                                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold mt-0.5">{idx + 1}</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Pros & Cons */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                                        <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4"/> ข้อดี</h4>
                                        <p className="text-xs text-slate-600 leading-relaxed">{selectedFeatured.pros}</p>
                                    </div>
                                    <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                                        <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2 text-sm"><XCircle className="w-4 h-4"/> ข้อสังเกต</h4>
                                        <p className="text-xs text-slate-600 leading-relaxed">{selectedFeatured.cons}</p>
                                    </div>
                                </div>
                                
                                <div className="p-4 bg-slate-100 rounded-xl text-center">
                                    <p className="text-sm text-slate-500 mb-3">สนใจอาชีพนี้? เริ่มต้นวางแผนได้เลย</p>
                                    <Link href="/planner">
                                        <Button className="w-full bg-blue-600 hover:bg-blue-700">ไปที่หน้าวางแผน (Planner)</Button>
                                    </Link>
                                </div>
                            </div>
                        </ScrollArea>
                    </div>
                )}
            </DialogContent>
        </Dialog>

      </SidebarInset>
    </SidebarProvider>
  );
}