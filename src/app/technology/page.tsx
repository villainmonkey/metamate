"use client";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Brain, Network, Database, Cpu, Lock, Zap } from "lucide-react";

export default function TechnologyPage() {
  const techStack = [
    {
      icon: <Brain size={24} className="text-purple-600" />,
      title: "AI Persona Engine",
      desc: "Fine-tuned foundational models that analyze your communication patterns, behavioral quirks, and decision-making logic to create a neurologically accurate digital twin."
    },
    {
      icon: <Database size={24} className="text-blue-600" />,
      title: "Persistent Memory Layer",
      desc: "A vector database architecture that doesn't just store chat logs, but indexes semantic context. Your MetaMate remembers conversations from years ago and applies them to current decisions."
    },
    {
      icon: <Network size={24} className="text-pink-600" />,
      title: "Agent-to-Agent (A2A) Protocols",
      desc: "Our proprietary orchestration layer allows MetaMates to negotiate, socialize, and transact with each other in the background using structured, token-efficient communication protocols."
    },
    {
      icon: <Lock size={24} className="text-gray-900" />,
      title: "Cryptographic Identity Graph",
      desc: "Every autonomous action is anchored to a cryptographic signature. Your AI can operate freely, but any legally or financially binding action requires manual human multi-sig approval."
    }
  ];

  return (
    <main className="min-h-screen bg-[#fafafa] selection:bg-purple-100 selection:text-purple-900">
      <Nav />

      {/* HERO */}
      <section className="relative pt-48 pb-32 px-6 md:px-10 overflow-hidden bg-white text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/40 via-white to-white" />
        
        <div className="max-w-4xl mx-auto relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-white shadow-sm">
             <Cpu size={12} className="text-blue-600" />
            <span className="text-[10px] font-black tracking-widest uppercase text-blue-600">The Architecture</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-gray-900 leading-[1.05]">
            Engineering the <br />
            <span className="font-light text-gray-400">infrastructure for autonomy.</span>
          </h1>
          
          <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto">
            MetaMate is powered by a multi-layered intelligence stack designed for continuous operation, contextual awareness, and secure digital agency.
          </p>
        </div>
      </section>

      {/* INTERACTIVE DIAGRAM */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-white rounded-[40px] shadow-2xl border border-gray-100 p-10 md:p-20 overflow-hidden relative">
            <div className="absolute inset-0 bg-grid-gray-100/50 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
            
            <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-medium tracking-tight">The Neural Orchestrator</h3>
                <p className="text-gray-500 text-lg leading-relaxed">
                  Instead of a single monolithic LLM, MetaMate utilizes an orchestration layer. It routes queries to specialized, smaller models for tasks like emotional analysis or scheduling, reducing latency while reserving heavy reasoning models for complex social interactions.
                </p>
                <div className="pt-4 flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600"><Zap size={20} /></div>
                  <div>
                    <h4 className="font-bold text-gray-900">Sub-100ms Routing</h4>
                    <p className="text-sm text-gray-500">Intelligent model selection.</p>
                  </div>
                </div>
              </div>

              {/* Animated node visual */}
              <div className="relative aspect-square rounded-full border border-dashed border-gray-200 flex items-center justify-center">
                 <motion.div 
                   animate={{ rotate: 360 }} 
                   transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                   className="absolute inset-4 rounded-full border border-gray-100 flex items-center justify-center"
                 >
                   <div className="absolute top-0 -translate-y-1/2 w-4 h-4 bg-purple-400 rounded-full blur-sm" />
                   <div className="absolute bottom-0 translate-y-1/2 w-4 h-4 bg-blue-400 rounded-full blur-sm" />
                 </motion.div>
                 
                 <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full shadow-2xl flex items-center justify-center text-white relative z-10">
                    <Brain size={40} />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK GRID */}
      <section className="py-24 px-6 md:px-10 bg-[#fafafa]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {techStack.map((tech, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-3xl border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6">
                  {tech.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{tech.title}</h3>
                <p className="text-gray-500 leading-relaxed">
                  {tech.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
