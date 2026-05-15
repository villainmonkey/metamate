"use client";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#fafafa] selection:bg-purple-100 selection:text-purple-900 flex flex-col">
      <Nav />

      <section className="flex-1 relative pt-48 pb-32 px-6 md:px-10 overflow-hidden bg-white flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-100/40 via-white to-white" />
        
        <div className="max-w-3xl mx-auto text-center relative z-10 space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block"
          >
            <h1 className="text-7xl md:text-9xl font-black text-gray-900 tracking-tighter mb-4">404</h1>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl font-medium tracking-tight text-gray-900"
          >
            This Identity Hasn’t Been Initialized.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-500 font-medium max-w-xl mx-auto leading-relaxed"
          >
            The page you’re looking for does not exist inside the MetaMate universe.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="pt-8 flex justify-center"
          >
            <Link 
              href="/"
              className="h-14 px-8 bg-black text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors shadow-xl shadow-black/10"
            >
              <ArrowLeft size={18} /> Return To MetaMate
            </Link>
          </motion.div>
        </div>

        {/* Ambient visuals */}
        <div className="absolute -z-10 top-1/2 left-1/4 w-[500px] h-[500px] bg-purple-200/30 blur-[120px] rounded-full mix-blend-multiply" />
        <div className="absolute -z-10 bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-200/30 blur-[120px] rounded-full mix-blend-multiply" />
      </section>

      <Footer />
    </main>
  );
}
