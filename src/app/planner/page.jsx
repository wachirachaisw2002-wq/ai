"use client";

import { useState, useEffect, useMemo } from "react";
import { 
  SidebarProvider, 
  SidebarInset, 
  SidebarTrigger 
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { 
  Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter 
} from "@/components/ui/card";
import { 
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue 
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Target, CheckCircle2, Map, Trophy, RotateCcw, 
  Save, Share2, BookOpen, Briefcase, GraduationCap 
} from "lucide-react";

// Import Data
import { careers } from "@/lib/data";

export default function PlannerPage() {
  // State
  const [selectedCareerId, setSelectedCareerId] = useState(careers[0].id.toString());
  const [checkedSkills, setCheckedSkills] = useState({}); // เก็บสถานะ Skill { "SkillName": true }
  const [isLoaded, setIsLoaded] = useState(false);

  // 1. โหลดข้อมูลจาก LocalStorage เมื่อเข้าเว็บครั้งแรก
  useEffect(() => {
    const savedSkills = localStorage.getItem("career_planner_skills");
    const savedCareer = localStorage.getItem("career_planner_selected");
    
    if (savedSkills) setCheckedSkills(JSON.parse(savedSkills));
    if (savedCareer) setSelectedCareerId(savedCareer);
    
    setIsLoaded(true);
  }, []);

  // 2. บันทึกข้อมูลลง LocalStorage ทุกครั้งที่มีการเปลี่ยนแปลง
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("career_planner_skills", JSON.stringify(checkedSkills));
      localStorage.setItem("career_planner_selected", selectedCareerId);
    }
  }, [checkedSkills, selectedCareerId, isLoaded]);

  // หาข้อมูลอาชีพที่เลือกปัจจุบัน
  const currentCareer = useMemo(() => 
    careers.find(c => c.id.toString() === selectedCareerId) || careers[0], 
  [selectedCareerId]);

  // คำนวณ Progress
  const calculateProgress = () => {
    const total = currentCareer.skills.length;
    const completed = currentCareer.skills.filter(skill => checkedSkills[skill]).length;
    return { total, completed, percent: (completed / total) * 100 };
  };

  const { total, completed, percent } = calculateProgress();

  // Toggle Skill Checkbox
  const toggleSkill = (skill) => {
    setCheckedSkills(prev => ({
      ...prev,
      [skill]: !prev[skill]
    }));
  };

  // Reset Progress
  const handleReset = () => {
    if(confirm("คุณต้องการล้างความคืบหน้าของอาชีพนี้ใช่หรือไม่?")) {
        const newSkills = { ...checkedSkills };
        currentCareer.skills.forEach(s => delete newSkills[s]);
        setCheckedSkills(newSkills);
    }
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-[#F8FAFC]">
        
        {/* Header Mobile */}
        <header className="flex h-14 shrink-0 items-center gap-2 border-b bg-white/50 px-4 backdrop-blur-md sticky top-0 z-10 lg:hidden">
            <SidebarTrigger />
            <span className="font-medium text-slate-600">Career Planner</span>
        </header>

        <div className="flex flex-col p-4 md:p-8 max-w-7xl mx-auto w-full space-y-8">
            
            {/* Desktop Trigger */}
            <div className="absolute top-4 left-4 hidden lg:block">
                <SidebarTrigger className="bg-white/50 hover:bg-white shadow-sm border border-slate-200" />
            </div>

            {/* --- Top Section: Career Selector & Stats --- */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 animate-fade-in-up">
                <div className="space-y-2 w-full md:w-auto">
                    <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-2">
                        <Target className="text-blue-600" /> My Career Planner
                    </h1>
                    <p className="text-slate-500">เลือกอาชีพเป้าหมาย และติดตามความคืบหน้าของคุณ</p>
                    
                    {/* Career Selector Dropdown */}
                    <div className="w-full md:w-[300px] mt-4">
                        <Select value={selectedCareerId} onValueChange={setSelectedCareerId}>
                            <SelectTrigger className="h-12 text-base bg-white shadow-sm border-slate-200">
                                <SelectValue placeholder="เลือกอาชีพเป้าหมาย" />
                            </SelectTrigger>
                            <SelectContent>
                                {careers.map(c => (
                                    <SelectItem key={c.id} value={c.id.toString()}>
                                        {c.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* Overall Progress Card */}
                <Card className="w-full md:w-[400px] bg-gradient-to-br from-blue-600 to-indigo-700 text-white border-0 shadow-lg shadow-blue-500/20">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg font-medium flex justify-between">
                            ความสำเร็จโดยรวม
                            <Trophy className="text-yellow-300 w-5 h-5" />
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-end gap-2 mb-2">
                            <span className="text-4xl font-bold">{Math.round(percent)}%</span>
                            <span className="text-blue-100 mb-1">เสร็จสิ้น ({completed}/{total} สกิล)</span>
                        </div>
                        <Progress value={percent} className="h-2 bg-blue-900/30 [&>div]:bg-yellow-400" />
                    </CardContent>
                </Card>
            </div>

            {/* --- Main Content Grid --- */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full pb-10">
                
                {/* Left Column: Skill Checklist */}
                <Card className="lg:col-span-2 border-slate-200 shadow-sm flex flex-col h-full bg-white">
                    <CardHeader className="pb-4 border-b border-slate-50">
                        <div className="flex justify-between items-center">
                            <div>
                                <CardTitle className="text-xl flex items-center gap-2">
                                    <CheckCircle2 className="text-green-600 w-5 h-5" /> 
                                    Skill Checklist
                                </CardTitle>
                                <CardDescription>ทักษะที่จำเป็นสำหรับ {currentCareer.name}</CardDescription>
                            </div>
                            <Button variant="ghost" size="sm" onClick={handleReset} className="text-slate-400 hover:text-red-500">
                                <RotateCcw className="w-4 h-4 mr-1" /> รีเซ็ต
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent className="p-0 flex-1">
                        <ScrollArea className="h-[500px] lg:h-auto lg:min-h-[500px] p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {currentCareer.skills.map((skill) => (
                                    <div 
                                        key={skill}
                                        className={`flex items-start space-x-3 p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                                            checkedSkills[skill] 
                                            ? 'bg-green-50 border-green-200 shadow-sm' 
                                            : 'bg-white border-slate-100 hover:border-blue-200 hover:shadow-sm'
                                        }`}
                                        onClick={() => toggleSkill(skill)}
                                    >
                                        <Checkbox 
                                            id={skill} 
                                            checked={!!checkedSkills[skill]} 
                                            className="mt-1 data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
                                        />
                                        <div className="flex-1 space-y-1">
                                            <label 
                                                htmlFor={skill} 
                                                className={`text-sm font-medium leading-none cursor-pointer select-none ${
                                                    checkedSkills[skill] ? 'text-green-800 line-through decoration-green-500/50' : 'text-slate-700'
                                                }`}
                                            >
                                                {skill}
                                            </label>
                                            <p className="text-xs text-slate-500">
                                                {checkedSkills[skill] ? "เรียนรู้แล้ว" : "ยังไม่ได้เรียนรู้"}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Motivation Quote */}
                            {percent === 100 && (
                                <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-xl text-center animate-bounce">
                                    <p className="text-yellow-800 font-bold text-lg">🎉 ยินดีด้วย! คุณพร้อมสำหรับอาชีพนี้แล้ว</p>
                                    <p className="text-yellow-600 text-sm">อย่าลืมอัปเดต Portfolio ของคุณด้วยทักษะเหล่านี้</p>
                                </div>
                            )}
                        </ScrollArea>
                    </CardContent>
                </Card>

                {/* Right Column: Roadmap & Info */}
                <div className="space-y-6">
                    
                    {/* Roadmap Card */}
                    <Card className="border-slate-200 shadow-sm bg-white">
                        <CardHeader className="bg-slate-50/50 border-b border-slate-100">
                            <CardTitle className="text-lg flex items-center gap-2">
                                <Map className="text-purple-600 w-5 h-5" /> 
                                Roadmap การเรียนรู้
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            <div className="relative border-l-2 border-slate-200 ml-3 space-y-8">
                                {currentCareer.roadmap.map((step, index) => (
                                    <div key={index} className="relative pl-6 group">
                                        <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-white bg-slate-300 group-hover:bg-purple-500 transition-colors ring-4 ring-white"></span>
                                        <div className="flex flex-col">
                                            <span className="text-xs text-slate-400 font-mono mb-1">Step {index + 1}</span>
                                            <span className="text-sm font-medium text-slate-700 group-hover:text-purple-700 transition-colors">
                                                {step}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Summary Info Card */}
                    <Card className="border-slate-200 shadow-sm bg-blue-50/30">
                        <CardHeader>
                            <CardTitle className="text-base flex items-center gap-2">
                                <Briefcase className="w-4 h-4 text-blue-500" /> ข้อมูลโดยย่อ
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                             <div className="flex justify-between items-center text-sm">
                                <span className="text-slate-500">หมวดหมู่</span>
                                <Badge variant="outline" className="bg-white">{currentCareer.category}</Badge>
                             </div>
                             <Separator />
                             <div className="flex justify-between items-center text-sm">
                                <span className="text-slate-500">เงินเดือนเฉลี่ย</span>
                                <span className="font-semibold text-green-600">{currentCareer.salary}</span>
                             </div>
                             <Separator />
                             <div className="flex justify-between items-center text-sm">
                                <span className="text-slate-500">จำนวน Skill</span>
                                <span className="font-semibold text-slate-700">{total} ทักษะ</span>
                             </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full bg-slate-900 hover:bg-slate-800 gap-2">
                                <Save className="w-4 h-4" /> บันทึกแผนนี้
                            </Button>
                        </CardFooter>
                    </Card>

                </div>
            </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}