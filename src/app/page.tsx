"use client"
import AboutUs from "@/app/about/page";
import Section from "@/components/utils/section";
import { useEffect, useState } from "react";
import Products from "./products/page";
import Testimonials from "@/components/utils/testimonials";

export default function Home() {



  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Section />
      <AboutUs />
      <Products />
      <Testimonials />
    </main>
  )
}
