"use client";
import { useState, useRef, useEffect } from "react";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

import { 
  X,
  MessageCircle,
  Send,
  Loader2,
  ArrowDownCircleIcon
} from "lucide-react";

import {motion, AnimatePresence} from 'framer-motion'
import {useChat} from '@ai-sdk/react'
import LandingSections from "@/components/LandingSections";

export default function Chat() {
  const [isChatOpen ,setIsChatOpen]= useState(false)
const [showChatIcon, setShowChatIcon] = useState(false)
const chatIconRef= useRef<HTMLButtonElement>(null)

useEffect(() => {
  const handleScroll=()=>{
    if(window.scrollY > 200){
      setShowChatIcon(true)
    }
    else{
      setIsChatOpen(false)
      setShowChatIcon(false)
    }
  }
  handleScroll();
   
  window.addEventListener('scroll',handleScroll)

  return()=>{
    window.removeEventListener('scroll',handleScroll);

  }

}, []);
const toggleChat = ()=>{
  setIsChatOpen(!isChatOpen)
}

  return (
    <div className="flex flex-col min-h-screen">
      <LandingSections />
      <AnimatePresence>
        {showChatIcon &&(
          <motion.div
    
        )}
      </AnimatePresence>
    </div>
  );
}
