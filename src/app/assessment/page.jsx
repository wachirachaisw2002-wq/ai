"use client";

import { useState } from "react";
import Link from "next/link";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, RefreshCcw, Trophy, Sparkles, CheckCircle2 } from "lucide-react";

// Import Data
import { questions, recommendations } from "@/lib/data"; 
import { careers } from "@/lib/data"; // ดึงข้อมูลอาชีพทั้งหมด 20 อาชีพ

export default function AssessmentPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  
  // State คะแนนตามกลุ่มใหม่ (5 กลุ่ม)
  const [scores, setScores] = useState({
    creative: 0,
    system: 0,
    data: 0,
    business: 0,
    audit: 0
  });
  
  const [isFinished, setIsFinished] = useState(false);
  const [result, setResult] = useState(null);

  const handleAnswer = (type) => {
    // 1. บวกคะแนน
    if (type) {
        const newScores = { ...scores, [type]: scores[type] + 1 };
        setScores(newScores);
        
        // 2. ไปข้อถัดไป หรือ จบ
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
          calculateResult(newScores);
        }
    }
  };

  const calculateResult = (finalScores) => {
    // หา key ที่มีคะแนนมากที่สุด
    const winnerKey = Object.keys(finalScores).reduce((a, b) => 
      finalScores[a] >= finalScores[b] ? a : b
    );
    
    setResult(recommendations[winnerKey]);
    setIsFinished(true);
  };

  const resetQuiz = () => {
    setScores({ creative: 0, system: 0, data: 0, business: 0, audit: 0 });
    setCurrentQuestionIndex(0);
    setIsFinished(false);
    setResult(null);
  };

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  // กรองอาชีพที่แนะนำจาก ID
  const recommendedCareers = result 
    ? careers.filter(c => result.careerIds.includes(c.id))
    : [];

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-[#F8FAFC]">
        <header className="flex h-14 shrink-0 items-center gap-2 border-b bg-white/50 px-4 backdrop-blur-md sticky top-0 z-10 lg:hidden">
            <SidebarTrigger />
            <span className="font-medium text-slate-600">Assessment</span>
        </header>

        <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 md:p-8 relative">
           
           <div className="absolute top-4 left-4 hidden lg:block z-20">
             <SidebarTrigger className="bg-white/50 hover:bg-white shadow-sm border border-slate-200" />
           </div>

           <div className="max-w-4xl w-full z-10">
              
              {!isFinished ? (
                // --- Quiz Mode ---
                <div className="space-y-6 animate-fade-in-up max-w-2xl mx-auto">
                  <div className="text-center space-y-2">
                    <Badge variant="secondary" className="px-3 py-1">
                      ข้อที่ {currentQuestionIndex + 1} จาก {questions.length}
                    </Badge>
                    <h1 className="text-3xl font-bold text-slate-900">ค้นหาตัวตนของคุณ</h1>
                    <Progress value={progress} className="h-2 w-full max-w-xs mx-auto" />
                  </div>

                  <Card className="border-0 shadow-xl bg-white overflow-hidden">
                    <CardHeader className="bg-blue-50/50 py-8 border-b border-blue-50 text-center">
                      <CardTitle className="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed">
                        {questions[currentQuestionIndex].question}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 md:p-8">
                      <div className="grid grid-cols-1 gap-3">
                        {questions[currentQuestionIndex].options.map((option, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            className="h-auto py-5 px-6 text-left justify-start whitespace-normal hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700 transition-all text-base border-slate-200 rounded-xl"
                            onClick={() => handleAnswer(option.type)}
                          >
                            <span className="mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 font-bold text-sm">
                                {String.fromCharCode(65 + index)}
                            </span>
                            {option.text}
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                // --- Result Mode (Updated) ---
                <div className="space-y-8 animate-fade-in-up">
                  <div className="text-center space-y-4">
                    <div className="inline-flex p-4 bg-yellow-100 rounded-full text-yellow-600 shadow-sm animate-bounce">
                      <Trophy className="w-12 h-12" />
                    </div>
                    <div>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">ผลลัพธ์ของคุณคือ...</h1>
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mt-2">{result?.title}</h2>
                    </div>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                        {result?.description}
                    </p>
                  </div>

                  {/* แสดงรายการอาชีพที่แนะนำ (Cards Grid) */}
                  <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-xl shadow-blue-500/5">
                      <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                          <Sparkles className="text-yellow-500" /> อาชีพที่เหมาะกับคุณ ({recommendedCareers.length})
                      </h3>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {recommendedCareers.map((career) => (
                              <Link key={career.id} href="/careers"> {/* ลิงก์ไปหน้ารวม */}
                                  <div className="group p-4 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all cursor-pointer h-full bg-slate-50/30 hover:bg-white">
                                      <div className="flex justify-between items-start mb-2">
                                          <Badge className="bg-white text-slate-600 border hover:bg-slate-50">{career.category}</Badge>
                                          <CheckCircle2 className="w-5 h-5 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                      </div>
                                      <h4 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{career.name}</h4>
                                      <p className="text-xs text-slate-500 mt-2 line-clamp-2">{career.description}</p>
                                  </div>
                              </Link>
                          ))}
                      </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                      <Link href="/careers">
                          <Button className="w-full sm:w-auto h-14 px-8 text-lg bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/20 rounded-xl">
                              ดูรายละเอียดอาชีพทั้งหมด <ArrowRight className="ml-2 w-5 h-5" />
                          </Button>
                      </Link>
                      <Button variant="outline" onClick={resetQuiz} className="w-full sm:w-auto h-14 px-8 rounded-xl">
                          <RefreshCcw className="mr-2 w-4 h-4" /> ทำแบบทดสอบใหม่
                      </Button>
                  </div>
                </div>
              )}
           </div>

           {/* Background Decoration */}
           <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
              <div className="absolute top-[10%] left-[10%] w-96 h-96 bg-blue-100/40 rounded-full blur-[100px]"></div>
              <div className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-purple-100/40 rounded-full blur-[100px]"></div>
           </div>

        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}