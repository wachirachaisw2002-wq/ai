"use client";
import { useState, useMemo, useEffect } from "react";
import { careers } from "@/lib/data";

import {
    Card, CardContent, CardHeader, CardTitle, CardDescription
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Briefcase, Search, CheckCircle2, XCircle, BookOpen,
    DollarSign, ChevronRight, ListChecks, Code2,
    Database, PenTool, Cpu, ShieldCheck, ArrowLeft
} from "lucide-react";

// 1. Import Sidebar Components เข้ามาใช้ในหน้านี้โดยตรง
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function CareerPage() {
    const [selectedCareer, setSelectedCareer] = useState(null);
    const [mySkills, setMySkills] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterCategory, setFilterCategory] = useState("All");

    // Auto-select อาชีพแรกเฉพาะบนจอใหญ่ (Desktop)
    useEffect(() => {
        if (window.innerWidth >= 1024) {
            setSelectedCareer(careers[0]);
        }
    }, []);

    const toggleSkill = (skill) => {
        setMySkills(prev =>
            prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
        );
    };

    const filteredCareers = useMemo(() => {
        return careers.filter(c => {
            const matchesSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                c.description.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = filterCategory === "All" || c.category === filterCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchTerm, filterCategory]);

    const categories = ["All", ...new Set(careers.map(c => c.category))];

    const getCategoryIcon = (cat) => {
        switch (cat) {
            case "Development": return <Code2 className="w-4 h-4" />;
            case "Data": return <Database className="w-4 h-4" />;
            case "Design": return <PenTool className="w-4 h-4" />;
            case "QA": return <ShieldCheck className="w-4 h-4" />;
            default: return <Briefcase className="w-4 h-4" />;
        }
    }

    return (
        // 2. Wrap ทั้งหมดด้วย SidebarProvider
        <SidebarProvider>

            {/* 3. เรียก Sidebar มาใส่ตรงนี้ */}
            <AppSidebar />

            {/* 4. ใช้ SidebarInset เพื่อจัดการพื้นที่เนื้อหาหลัก */}
            <SidebarInset className="bg-[#F8FAFC] overflow-hidden flex flex-col h-screen">

                {/* Header Bar สำหรับเปิด/ปิด Sidebar และบอกชื่อหน้า */}
                <header className="flex h-14 shrink-0 items-center gap-2 border-b bg-white/80 px-4 backdrop-blur-md sticky top-0 z-20">
                    <SidebarTrigger />
                    <div className="h-4 w-[1px] bg-slate-200 mx-2" />
                    <span className="font-medium text-slate-600">Career Library</span>
                </header>

                {/* --- เนื้อหาหลัก (Main Content) --- */}
                <div className="flex-1 flex flex-col overflow-hidden p-4 md:p-8">

                    {/* Header Section (Search & Filter) - ซ่อนเมื่ออยู่หน้า Detail บนมือถือ */}
                    <div className={`flex-shrink-0 mb-4 transition-all duration-300 ${selectedCareer ? 'hidden lg:block' : 'block'}`}>
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                            <div>
                                <h1 className="text-2xl md:text-3xl font-bold text-slate-900 flex items-center gap-2">
                                    <BookOpen className="text-blue-600 w-6 h-6 md:w-8 md:h-8" />
                                    คลังอาชีพ
                                </h1>
                                <p className="text-sm md:text-base text-slate-500 mt-1">สำรวจและวางแผนเส้นทางของคุณ</p>
                            </div>

                            <div className="relative w-full md:w-80">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                                <Input
                                    placeholder="ค้นหาอาชีพ..."
                                    className="pl-9 bg-white shadow-sm"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Category Filters */}
                        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
                            {categories.map(cat => (
                                <Badge
                                    key={cat}
                                    variant={filterCategory === cat ? "default" : "outline"}
                                    className={`cursor-pointer px-4 py-2 h-auto text-sm whitespace-nowrap transition-all ${filterCategory === cat ? 'bg-blue-600' : 'bg-white hover:bg-slate-50 border-slate-200'}`}
                                    onClick={() => setFilterCategory(cat)}
                                >
                                    {cat}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    {/* Content Grid */}
                    <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 overflow-hidden relative">

                        {/* LEFT COLUMN: LIST */}
                        <div className={`lg:col-span-4 flex flex-col h-full overflow-hidden ${selectedCareer ? 'hidden lg:flex' : 'flex'}`}>
                            <div className="flex-shrink-0 pb-2">
                                <p className="text-sm font-medium text-slate-500">
                                    พบ {filteredCareers.length} รายการ
                                </p>
                            </div>

                            <div className="flex-1 overflow-y-auto pr-1 pb-20 custom-scrollbar space-y-3">
                                {filteredCareers.map((career) => (
                                    <Card
                                        key={career.id}
                                        className={`cursor-pointer transition-all duration-200 border group ${selectedCareer?.id === career.id ? 'border-blue-500 ring-1 ring-blue-500 bg-blue-50/30' : 'bg-white border-slate-200 hover:border-blue-300'}`}
                                        onClick={() => setSelectedCareer(career)}
                                    >
                                        <CardContent className="p-4 flex items-center justify-between">
                                            <div className="space-y-1">
                                                <div className="flex items-center gap-2">
                                                    <span className={`text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1 uppercase tracking-wider ${selectedCareer?.id === career.id ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-600'}`}>
                                                        {getCategoryIcon(career.category)}
                                                        {career.category}
                                                    </span>
                                                </div>
                                                <h3 className={`font-bold text-base ${selectedCareer?.id === career.id ? 'text-blue-700' : 'text-slate-800'}`}>
                                                    {career.name}
                                                </h3>
                                            </div>
                                            <ChevronRight className={`w-5 h-5 text-slate-300 ${selectedCareer?.id === career.id ? 'text-blue-500' : ''}`} />
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT COLUMN: DETAILS */}
                        <div className={`lg:col-span-8 flex flex-col h-full overflow-hidden bg-white/50 rounded-2xl md:bg-transparent ${selectedCareer ? 'flex fixed inset-0 z-50 bg-white lg:static lg:bg-transparent' : 'hidden lg:flex'}`}>

                            {selectedCareer ? (
                                <div className="flex flex-col h-full">

                                    {/* Mobile Back Button */}
                                    <div className="flex items-center gap-2 p-4 border-b bg-white lg:hidden sticky top-0 z-10">
                                        <Button variant="ghost" size="icon" onClick={() => setSelectedCareer(null)}>
                                            <ArrowLeft className="w-5 h-5 text-slate-600" />
                                        </Button>
                                        <span className="font-bold text-slate-800 truncate">{selectedCareer.name}</span>
                                    </div>

                                    {/* Detail Content */}
                                    <div className="flex-1 overflow-y-auto p-4 md:p-0 custom-scrollbar pb-20 space-y-6">

                                        {/* Header Detail Card */}
                                        <Card className="border-none shadow-lg shadow-blue-500/5 bg-gradient-to-br from-white to-blue-50/50 mt-4 md:mt-0">
                                            <CardHeader>
                                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                                    <div>
                                                        <Badge className="mb-2 bg-blue-600">{selectedCareer.category}</Badge>
                                                        <CardTitle className="text-2xl md:text-3xl font-extrabold text-slate-800">
                                                            {selectedCareer.name}
                                                        </CardTitle>
                                                    </div>
                                                    <div className="text-left md:text-right bg-green-50 p-3 rounded-lg md:bg-transparent md:p-0">
                                                        <p className="text-xs md:text-sm text-slate-500">เงินเดือนโดยประมาณ</p>
                                                        <p className="text-lg md:text-xl font-bold text-green-600 flex items-center md:justify-end gap-1">
                                                            <DollarSign className="w-5 h-5" /> {selectedCareer.salary}
                                                        </p>
                                                    </div>
                                                </div>
                                                <CardDescription className="text-sm md:text-base mt-4 text-slate-600">
                                                    {selectedCareer.description}
                                                </CardDescription>
                                            </CardHeader>
                                        </Card>

                                        {/* Responsibilities */}
                                        <Card className="border-slate-200">
                                            <CardHeader className="pb-3 border-b border-slate-100 bg-slate-50/50">
                                                <CardTitle className="text-base md:text-lg flex items-center gap-2 text-slate-800">
                                                    <ListChecks className="text-blue-600 w-5 h-5" />
                                                    หน้าที่ความรับผิดชอบ
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent className="pt-4">
                                                <ul className="space-y-3">
                                                    {selectedCareer.responsibilities?.map((resp, i) => (
                                                        <li key={i} className="flex items-start gap-3 text-slate-600 text-sm md:text-base">
                                                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold mt-0.5">
                                                                {i + 1}
                                                            </span>
                                                            <span className="leading-relaxed">{resp}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </CardContent>
                                        </Card>

                                        {/* Pros & Cons */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <Card className="bg-green-50/30 border-green-100">
                                                <CardHeader className="pb-2">
                                                    <CardTitle className="text-sm md:text-base text-green-700 flex items-center gap-2">
                                                        <CheckCircle2 className="w-5 h-5" /> ข้อดี
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent><p className="text-slate-700 text-sm">{selectedCareer.pros}</p></CardContent>
                                            </Card>
                                            <Card className="bg-red-50/30 border-red-100">
                                                <CardHeader className="pb-2">
                                                    <CardTitle className="text-sm md:text-base text-red-700 flex items-center gap-2">
                                                        <XCircle className="w-5 h-5" /> ข้อสังเกต
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent><p className="text-slate-700 text-sm">{selectedCareer.cons}</p></CardContent>
                                            </Card>
                                        </div >

                                        {/* Skill Planner */}
                                        <Card className="border-slate-200 shadow-sm">
                                            <CardHeader className="bg-slate-50/50 border-b border-slate-100">
                                                <CardTitle className="text-lg md:text-xl flex items-center gap-2">
                                                    📍 วางแผนพัฒนาสกิล
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent className="p-4 md:p-6">
                                                {(() => {
                                                    const total = selectedCareer.skills.length;
                                                    const current = selectedCareer.skills.filter(s => mySkills.includes(s)).length;
                                                    const percent = (current / total) * 100;
                                                    return (
                                                        <div className="mb-6">
                                                            <div className="flex justify-between mb-2">
                                                                <span className="text-sm font-medium text-slate-600">ความพร้อม: {current}/{total}</span>
                                                                <span className="text-sm font-bold text-blue-600">{percent.toFixed(0)}%</span>
                                                            </div>
                                                            <Progress value={percent} className="h-2" />
                                                        </div>
                                                    )
                                                })()}
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                    {selectedCareer.skills.map((skill) => (
                                                        <div key={skill} className={`flex items-center space-x-3 p-3 rounded-lg border transition-all ${mySkills.includes(skill) ? 'bg-blue-50 border-blue-200' : 'bg-white border-slate-100'}`}>
                                                            <Checkbox
                                                                id={skill}
                                                                checked={mySkills.includes(skill)}
                                                                onCheckedChange={() => toggleSkill(skill)}
                                                                className="h-5 w-5"
                                                            />
                                                            <label htmlFor={skill} className={`text-sm cursor-pointer flex-1 ${mySkills.includes(skill) ? "text-blue-700 font-medium" : "text-slate-600"}`}>
                                                                {skill}
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card>

                                        {/* Roadmap */}
                                        <Card>
                                            <CardHeader><CardTitle className="text-lg">🗺️ Roadmap</CardTitle></CardHeader>
                                            <CardContent>
                                                <div className="flex flex-wrap gap-2">
                                                    {selectedCareer.roadmap.map((step, idx) => (
                                                        <Badge key={idx} variant="secondary" className="px-3 py-1 text-xs md:text-sm bg-slate-100 text-slate-700">
                                                            {idx + 1}. {step}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            ) : (
                                <div className="hidden lg:flex flex-col items-center justify-center h-full text-slate-400 bg-white rounded-2xl border border-dashed p-10">
                                    <Briefcase className="w-16 h-16 mb-4 opacity-20" />
                                    <p>เลือกอาชีพเพื่อดูรายละเอียด</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}