"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, X } from "lucide-react";
import { chatbotResponses } from "@/lib/data";

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: "bot", text: "สวัสดีครับ มีอะไรให้ช่วยไหมครับ?" }
    ]);
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (!input.trim()) return;

        const userMsg = { role: "user", text: input };
        let botReplyText = chatbotResponses.default;

        // Logic ตรวจสอบ Keyword ง่ายๆ
        Object.keys(chatbotResponses.keywords).forEach((key) => {
            if (input.includes(key)) {
                botReplyText = chatbotResponses.keywords[key];
            }
        });

        const botMsg = { role: "bot", text: botReplyText };

        setMessages([...messages, userMsg, botMsg]);
        setInput("");
    };

    if (!isOpen) {
        return (
            <Button
                className="fixed bottom-4 right-4 rounded-full h-14 w-14 shadow-lg"
                onClick={() => setIsOpen(true)}
            >
                <MessageCircle />
            </Button>
        );
    }

    return (
        <Card className="fixed bottom-4 right-4 w-80 h-96 shadow-xl flex flex-col z-50">
            <CardHeader className="p-3 border-b flex flex-row justify-between items-center bg-primary text-primary-foreground rounded-t-lg">
                <CardTitle className="text-sm">Career Assistant</CardTitle>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}><X className="h-4 w-4" /></Button>
            </CardHeader>
            <CardContent className="flex-1 overflow-y-auto p-3 space-y-2">
                {messages.map((m, i) => (
                    <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <span className={`px-3 py-2 rounded-lg text-sm ${m.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-black'}`}>
                            {m.text}
                        </span>
                    </div>
                ))}
            </CardContent>
            <div className="p-3 border-t flex gap-2">
                <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="พิมพ์คำถาม..." onKeyPress={(e) => e.key === 'Enter' && handleSend()} />
                <Button size="sm" onClick={handleSend}>ส่ง</Button>
            </div>
        </Card>
    );
}