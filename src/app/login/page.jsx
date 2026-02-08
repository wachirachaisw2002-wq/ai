"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { users } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
    const router = useRouter();
    const [form, setForm] = useState({ username: "", password: "" });
    const [error, setError] = useState("");

    const handleLogin = () => {
        const user = users.find(u => u.username === form.username && u.password === form.password);
        if (user) {
            // ในระบบจริงใช้ Token / Cookie แต่ที่นี้ Mock โดยเก็บใน LocalStorage
            localStorage.setItem("user", JSON.stringify(user));
            router.push("/"); // กลับหน้าหลัก
        } else {
            setError("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง (ลอง user / 123)");
        }
    };

    return (
        <div className="flex h-screen items-center justify-center bg-gray-100">
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>เข้าสู่ระบบ</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label>Username</Label>
                        <Input onChange={(e) => setForm({ ...form, username: e.target.value })} />
                    </div>
                    <div className="space-y-2">
                        <Label>Password</Label>
                        <Input type="password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <Button className="w-full" onClick={handleLogin}>Login</Button>
                </CardContent>
            </Card>
        </div>
    );
}
