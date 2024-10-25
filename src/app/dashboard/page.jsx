'use client'
import { BsBellFill, BsPersonCircle } from "react-icons/bs"
import { BsPaperclip } from "react-icons/bs"
import { BsSendArrowDown } from "react-icons/bs"
import Mic from "@/assets/Mic"

import { useState } from 'react'
import Link from 'next/link'

export default function page() {
  const [showDashboard, setSetShowDashboard] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
  return (
    <main className="relative bg-background p-5 h-screen overflow-hidden">
      <header className="relative flex items-start justify-between h-28 mb-3">
        <div className="fixed bg-blue rounded-full h-40 w-40 top-[-6%] left-[-15%]"></div>
        <div></div>
        <nav className="flex gap-5 items-center">
          <BsBellFill className="text-2xl text-header"/>
          <BsPersonCircle className="text-3xl text-header"/>
        </nav>
      </header>
      <section>
        <h1 className="text-4xl mb-5 font-extrabold text-header tracking-tighter">Welcome,<br/> Guest</h1>
        
        <div className="flex items-center justify-evenly h-10 w-full mb-3 rounded-[20px_20px_0_0]">
          <p className="bg-btnWhite w-36 h-8 p-1 text-center font-semibold rounded-lg">Dashboard</p>
          <p className="bg-btnWhite w-36 h-8 p-1 text-center font-semibold rounded-lg">Custom</p>
        </div>
        <div className="rounded-2xl h-20 w-full bg-white drop-shadow-[0_0_15px_rgb(0,0,0,0.15)]">

        </div>
      </section>

      <article className="absolute h-screen w-screen">

      </article>

      <footer className="fixed bottom-10 w-full">
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <div className="flex items-center bg-white rounded-3xl px-4 h-14 w-9/12 drop-shadow-[0_0_20px_rgb(0,0,0,0.25)]">
            <div className="flex gap-4 items-center">
              <div className="relative">
                <BsPaperclip className="text-4xl text-header p-1 rounded-full bg-btnWhite"/>
                <input type="file" className="top-[-3%] absolute w-8 opacity-0"/>
              </div>
              <input type="text" className="text-lg w-full mr-2" placeholder="Ask me anything!"/>
            </div>
            <Mic output="text-4xl text-header p-2.5 rounded-full bg-btnWhite"/>
          </div>
          <button type="submit" className="relative h-14 w-14 rounded-full bg-navbar">
            <BsSendArrowDown className="absolute text-3xl text-btnWhite top-3.5 left-2.5"/>
          </button>
        </form>
      </footer>
    </main>
  )
}
