"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return(
    <div>
      <Navbar />
      <Hero />
    </div>
  )
  
}
