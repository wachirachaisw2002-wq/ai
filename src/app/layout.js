import { Inter, Prompt } from "next/font/google";
import "./globals.css";
import ChatBot from "@/components/ChatBot";

// กำหนด Font
const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const prompt = Prompt({ 
  subsets: ["thai", "latin"], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-prompt'
});

export const metadata = {
  title: "Career Path Developer",
  description: "วางแผนอนาคต สู่สายงานที่คุณใฝ่ฝัน",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${prompt.variable} font-sans antialiased bg-[#F8FAFC]`}>
        
        {/* ส่วนแสดงเนื้อหาหลัก (Page Content) */}
        <main className="min-h-screen w-full relative">
           {children}
        </main>

        {/* Chatbot ลอยอยู่ด้านบนทุกหน้า */}
        <ChatBot />
        
      </body>
    </html>
  );
}