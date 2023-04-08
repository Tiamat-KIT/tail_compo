"use client"
import '../css/global.css';
import Navbar from "@/Component/Navbar"
import { SessionProvider } from "next-auth/react";
import Footer,{FooterItemProps} from '@/Component/Footer';

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const Hobby: FooterItemProps[] = [
    {text:"Twitter",url:"https://twitter.com/UtakataKyosui"},
    {text:"Mastdon",url:"https://mstdn.jp/@UtakataKyosui"}
  ]

  const Dev: FooterItemProps[] = [
    {text: "Qiita",url:"https://qiita.com/Tiamat-KIT"},
    {text: "Zenn" ,url:"https://zenn.dev/ayaextech_fill"},
    {text: "LAPRAS",url: "https://lapras.com/public/UW09DHN"}
  ]

  return (
    <html lang="ja" className='bg-slate-50'>
      <body>
        <SessionProvider>
          <Navbar />
          {children}
          {/* <hr className='divide-y pt-2'/> */}
          <div className='divider'/>
          <Footer HobbySNSList={Hobby} DevelopSNSList={Dev} />
        </SessionProvider>
      </body>
    </html>
  )
}
