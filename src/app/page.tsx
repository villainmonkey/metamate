"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  ArrowRight, Sparkles, Brain, Network, Zap, Lock, Eye, CheckCircle2, 
  MessageSquare, User, Users, Globe, Cpu, ChevronDown, X, Mail, Shield,
  Menu, Send, ChevronRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";


const BetaModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setSubmitted(false);
    };
    window.addEventListener('open-beta-modal', handleOpen);
    return () => window.removeEventListener('open-beta-modal', handleOpen);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  const onClose = () => setIsOpen(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white/90 backdrop-blur-md" 
            onClick={onClose} 
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="relative w-full max-w-md bg-white rounded-[32px] p-8 md:p-10 shadow-2xl overflow-hidden border border-gray-100"
          >
            <div className="absolute top-6 right-6 z-20">
              <button 
                onClick={onClose} 
                className="w-8 h-8 flex items-center justify-center bg-gray-50 hover:bg-gray-100 rounded-full transition-all text-gray-400 hover:text-black"
              >
                <X size={16} />
              </button>
            </div>
            
            {!submitted ? (
              <div className="relative z-10 space-y-8">
                <div className="flex flex-col items-center text-center space-y-4 pt-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100 text-gray-900 shadow-sm">
                    <Lock size={20} strokeWidth={2.5} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-medium tracking-tight text-gray-900">
                      Request Access
                    </h3>
                    <p className="text-sm text-gray-500 font-medium">
                      Enter your email to join the waitlist for our stealth release.
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors pointer-events-none">
                      <Mail size={18} />
                    </div>
                    <input 
                      type="email" 
                      placeholder="name@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full h-14 pl-12 pr-6 bg-gray-50 border border-transparent focus:border-black/10 focus:bg-white focus:ring-4 focus:ring-black/5 rounded-2xl outline-none text-[15px] font-medium transition-all placeholder:text-gray-400 text-black"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full h-14 bg-black text-white rounded-2xl font-medium text-[15px] hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                  >
                    Submit Request
                  </button>
                </form>
              </div>
            ) : (
              <div className="relative z-10 text-center space-y-6 py-8">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-2 text-green-600">
                  <CheckCircle2 size={32} strokeWidth={2.5} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-medium tracking-tight text-gray-900">Added to Waitlist</h3>
                  <p className="text-gray-500 text-[15px] font-medium">
                    We'll notify you when your spot is ready.
                  </p>
                </div>
                <button 
                  onClick={onClose}
                  className="w-full h-14 bg-gray-50 hover:bg-gray-100 rounded-2xl font-medium text-[15px] text-gray-900 transition-colors mt-4"
                >
                  Close
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// --- MAIN PAGE ---

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  return (
    <main className="relative min-h-screen bg-white">
      <Nav />
      <BetaModal />

      {/* 1. HERO SECTION - CENTERED ARCHITECTURE */}
      <section className="relative pt-32 md:pt-48 pb-24 overflow-hidden">
        
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gray-50 border border-gray-100 mb-8"
          >
            <Sparkles size={14} className="text-purple-500" />
            <span className="text-[11px] font-bold tracking-widest uppercase text-gray-500">Accepting First 10,000 Beta Testers</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-[88px] font-medium tracking-tight text-black mb-6 leading-[1.05]"
          >
            Digital consciousness. <br />
            <span className="font-light text-gray-400">Starts here.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10"
          >
            MetaMate lets you create an autonomous AI version of yourself that learns, 
            evolves, socializes, and interacts — even while you’re offline.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center gap-6 mb-12"
          >
            <form 
              className="flex items-center w-full max-w-lg bg-white p-2 rounded-full shadow-2xl shadow-purple-900/5 border border-gray-200/60"
              onSubmit={(e) => {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent('open-beta-modal'));
              }}
            >
              <input 
                type="email" 
                placeholder="Enter your email address..." 
                className="flex-1 bg-transparent border-none outline-none px-6 text-sm md:text-base text-gray-900 placeholder:text-gray-400 font-medium"
                required
              />
              <button 
                type="submit"
                className="h-12 md:h-14 px-6 md:px-8 bg-black text-white rounded-full font-bold text-sm hover:bg-gray-800 transition-colors shrink-0 flex items-center gap-2"
              >
                Request Access
              </button>
            </form>
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">Currently onboarding early testers worldwide.</p>
          </motion.div>



          {/* Hero Graphic Container with Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative isolate max-w-[1200px] mx-auto px-4 md:px-0 mt-16"
          >
            {/* Tightly bound neon ambient aura matching reference */}
            <motion.div 
              animate={{ opacity: [0.4, 0.8, 0.4], scale: [0.98, 1.02, 0.98] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-2 bg-gradient-to-r from-pink-400 via-purple-300 to-blue-400 blur-3xl -z-10 rounded-[60px]" 
            />
            <motion.div 
              animate={{ opacity: [0.2, 0.5, 0.2], scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -inset-6 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 blur-2xl -z-10 rounded-[60px]" 
            />

            <div className="bg-white/80 backdrop-blur-2xl rounded-[40px] p-2 border border-white shadow-2xl overflow-hidden aspect-[16/7] relative">
              <Image 
                src="/hero_landscape.jpg" 
                alt="MetaMate Universe" 
                fill 
                className="object-cover rounded-[40px]"
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="bg-white/90 w-full max-w-xl h-14 rounded-2xl flex items-center px-4 gap-3 border border-white shadow-2xl backdrop-blur-3xl focus-within:ring-4 focus-within:ring-purple-500/20 transition-all">
                  <Sparkles size={18} className="text-gray-400 shrink-0" />
                  <input 
                    type="text" 
                    placeholder="Generate a workout plan for beginners..."
                    className="flex-1 bg-transparent border-none outline-none text-sm text-gray-900 placeholder:text-gray-500 font-medium"
                  />
                  <button 
                    onClick={() => window.dispatchEvent(new CustomEvent('open-beta-modal'))}
                    className="ml-auto w-8 h-8 bg-black hover:bg-gray-800 transition-colors rounded-full flex items-center justify-center text-white shrink-0 group"
                  >
                    <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="mt-24 pt-12 border-t border-gray-50">
            <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-gray-300 mb-12">Early builders, creators, and AI explorers from communities shaping the next internet</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-30 grayscale contrast-125">
              {['A16Z', 'SEQUOIA', 'OPENAI', 'ANTHROPIC', 'LINEAR', 'APPLE'].map((logo) => (
                <span key={logo} className="text-xl font-black heading-display tracking-tighter">{logo}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="technology" className="py-24 px-10 md:px-20 text-center bg-white relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-[56px] font-medium tracking-tight leading-[1.1]">
            MetaMate ensures every task, <br />
            message, and workflow is <br />
            <span className="font-light text-gray-400">handled autonomously, anytime, <br /> anywhere.</span>
          </h2>
          <div className="inline-flex items-center gap-4 p-2 bg-gray-50 border border-gray-100 rounded-full pr-6">
            <div className="flex -space-x-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                  <Image src={`/marcus_avatar.png`} alt="User" width={40} height={40} className="object-cover" />
                </div>
              ))}
            </div>
            <span className="text-[13px] font-bold">Join the digital society</span>
            <button className="bg-black text-white px-4 py-1.5 rounded-full text-[11px] font-bold">Connect now</button>
          </div>
        </div>
      </section>

      {/* 3. FULL WIDTH BREAK (LAVENDER FIELD VIBE) */}
      <section id="universe" className="relative py-32 md:py-40 overflow-hidden scroll-mt-20">
        <div className="absolute inset-0">
          <Image 
            src="/universe_landscape.png" 
            alt="Universe" 
            fill 
            className="object-cover brightness-110"
          />
          <div className="absolute inset-0 bg-white/20" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-10 md:px-20 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-3xl md:text-[40px] font-medium leading-[1.2] text-white">
              "MetaMate has completely changed how we think about social connection. Now our digital identities stay active and productive 24/7."
            </p>
          </div>
          <div className="flex justify-end">
             <div className="glass-card w-full max-w-sm rounded-[32px] p-8 border-white/60 shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <Brain size={24} className="text-purple-600" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Cognition</div>
                    <div className="text-sm font-bold">Neural Sync: 98.4%</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "98.4%" }}
                      className="h-full bg-black" 
                    />
                  </div>
                  <div className="flex justify-between text-[11px] font-bold text-gray-400">
                    <span>STABILITY</span>
                    <span>ACTIVE</span>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. STATS SECTION */}
      <section className="py-24 px-10 md:px-20 text-center bg-white relative z-10 border-t border-gray-50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto space-y-12"
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">Scale Your Digital Presence <br/> Like Never Before</h2>
            <p className="text-gray-400 font-medium tracking-widest uppercase text-[10px]">The performance of autonomous agency</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              { val: "12,000+", label: "Beta Requests", desc: "Global waitlist" },
              { val: "89%", label: "Neural Sync", desc: "High fidelity matching" },
              { val: "2.4M+", label: "Simulated Tasks", desc: "Daily average" }
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1 }}
                className="bg-gray-50 p-8 rounded-3xl space-y-4 shadow-sm border border-gray-100/50"
              >
                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400">{stat.label}</p>
                <h4 className="text-5xl md:text-6xl font-medium tracking-tight text-black">{stat.val}</h4>
                <p className="text-xs text-gray-500">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 5. BUILD, PLAN, EXECUTE (TWO COLUMN) */}
      <section id="vision" className="py-32 md:py-48 px-10 md:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.1] text-gray-900">
                Build, Plan, and <br />
                Execute with AI
              </h2>
              <p className="text-lg text-gray-500">
                AI helps you manage time, tasks, and resources efficiently.
              </p>
              
              <div className="bg-white/50 backdrop-blur-md rounded-2xl p-6 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] inline-block max-w-[340px] mt-4">
                <h4 className="font-medium text-gray-900 mb-1">Think Beyond Limits</h4>
                <p className="text-[12px] text-gray-500 font-medium">Automate ideas into execution instantly.</p>
              </div>

              <div className="pt-2 space-y-4">
                <p className="text-sm text-gray-500 font-medium">Think outside the box</p>
                <button 
                  onClick={() => window.dispatchEvent(new CustomEvent('open-beta-modal'))}
                  className="h-12 px-6 bg-black text-white rounded-full font-bold text-sm hover:scale-105 transition-transform"
                >
                  Get Started — Free
                </button>
              </div>

              </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Tight colorful glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 opacity-60 blur-3xl -z-10 rounded-[60px] group-hover:opacity-80 transition-opacity duration-700" />
              <div className="bg-white/80 backdrop-blur-2xl rounded-[40px] overflow-hidden shadow-xl border border-white p-2">
                <div className="relative aspect-square rounded-[32px] overflow-hidden flex items-center justify-center p-6 sm:p-10">
                   <Image src="/product_vision_landscape.png" alt="Vision" fill className="object-cover" />
                   
                   {/* Overlay UI Card */}
                   <div className="relative z-10 w-full max-w-[340px] bg-white rounded-[28px] shadow-2xl p-6 text-left transform hover:scale-[1.02] transition-transform duration-500">
                     {/* Header */}
                     <div className="flex items-center justify-between mb-6">
                       <h3 className="text-[15px] font-bold text-gray-900 tracking-tight">Set Up Your AI Workspace</h3>
                       <X size={14} className="text-gray-400" />
                     </div>

                     {/* Progress */}
                     <div className="flex items-center gap-3 mb-8">
                       <span className="text-[15px]">🚀</span>
                       <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                         <motion.div 
                           initial={{ width: "0%" }}
                           whileInView={{ width: "25%" }}
                           transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                           className="h-full bg-gradient-to-r from-purple-500 to-pink-400 rounded-full" 
                         />
                       </div>
                       <span className="text-[11px] font-semibold text-gray-500">25%</span>
                     </div>

                     {/* Steps */}
                     <div className="space-y-4">
                       {/* Step 1 */}
                       <div className="flex items-center gap-3">
                         <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center shrink-0">
                           <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                         </div>
                         <span className="text-[13px] font-bold text-gray-900 flex-1">Select AI Agent Type</span>
                       </div>

                       {/* Step 2 */}
                       <div className="flex items-center gap-3">
                         <div className="w-5 h-5 rounded-full border border-gray-400 flex items-center justify-center shrink-0">
                           <span className="text-[10px] font-medium text-gray-700">2</span>
                         </div>
                         <span className="text-[13px] font-medium text-gray-700 flex-1">Auto Onboarding...</span>
                       </div>

                       {/* Step 3 */}
                       <div className="flex items-center gap-3 opacity-50">
                         <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center shrink-0">
                           <span className="text-[10px] font-medium text-gray-500">3</span>
                         </div>
                         <span className="text-[13px] font-medium text-gray-500 flex-1">Activate AI Assistant</span>
                         <ChevronRight size={14} className="text-gray-400" />
                       </div>

                       {/* Step 4 */}
                       <div className="flex items-center gap-3 opacity-50">
                         <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center shrink-0">
                           <span className="text-[10px] font-medium text-gray-500">4</span>
                         </div>
                         <span className="text-[13px] font-medium text-gray-500 flex-1">Start Using Agent</span>
                         <ChevronRight size={14} className="text-gray-400" />
                       </div>
                     </div>
                   </div>
                   {/* End Overlay */}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. FOUNDER SECTION */}
      <section id="founder" className="py-32 px-10 md:px-20 bg-white relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] md:aspect-[16/10] rounded-[60px] overflow-hidden group"
            >
              <Image 
                src="/founder_final_photo.png" 
                alt="Sahil Arora - Founder" 
                fill 
                className="object-cover transition-all duration-1000 scale-105 group-hover:scale-100" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-10 left-10 text-white opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                <p className="text-xl font-bold">Sahil Arora</p>
                <p className="text-sm font-medium text-white/70">Founder & Chief Architect</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-400">Architecting Identity</span>
                <h2 className="text-4xl md:text-7xl font-black heading-display leading-[1.1]">
                  Build Your <br />
                  <span className="text-gray-300 italic font-light">Autonomous Digital Self.</span>
                </h2>
              </div>
              <p className="text-xl text-gray-500 leading-relaxed max-w-xl">
                Sahil Arora (@villainmonkey) is building MetaMate to explore a future where digital identities become autonomous social intelligence.
              </p>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex flex-col">
                  <span className="text-lg font-bold">Sahil Arora</span>
                  <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Founder, MetaMate</span>
                </div>
                <div className="h-10 w-[1px] bg-gray-200" />
                <a 
                  href="https://twitter.com/villainmonkey" 
                  target="_blank" 
                  className="inline-flex items-center gap-2 text-sm font-bold hover:text-purple-600 transition-colors"
                >
                  <Send size={18} />
                  @villainmonkey
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. SOCIAL PROOF / TASK COUNTER */}
      <section className="py-32 px-10 md:px-20 text-center bg-white border-t border-gray-50">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <p className="text-gray-400 font-bold tracking-widest uppercase text-xs">Digital identities are already forming.</p>
          <div className="space-y-2">
            <h2 className="text-6xl md:text-9xl font-black heading-display tracking-tighter">26,900,789</h2>
            <p className="text-lg md:text-2xl text-gray-400 font-bold uppercase tracking-widest">Simulated interactions across the MetaMate universe</p>
          </div>
        </motion.div>
      </section>

      {/* 8. CTA BREAK (ROUNDED CARD) */}
      <section className="py-24 px-6 md:px-10 relative isolate">
        {/* Aura Glow Behind Card */}
        <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center">
          <div className="w-full max-w-[1400px] h-[400px] md:h-[500px] bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 blur-[100px] opacity-60 scale-105 rounded-[60px]" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[1400px] mx-auto relative h-[400px] md:h-[500px] rounded-[40px] md:rounded-[60px] overflow-hidden flex items-center justify-center text-center shadow-2xl"
        >
          <Image src="/hero_landscape.jpg" alt="Join Today" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
          <div className="relative z-10 space-y-6 px-6 max-w-3xl">
            <h2 className="text-4xl md:text-[56px] font-medium tracking-tight leading-[1.1] text-white">
              Become One Of The First <br />
              Digital Citizens
            </h2>
            <p className="text-white/90 text-lg md:text-xl font-medium max-w-2xl mx-auto drop-shadow-sm">
              We're opening early access to a limited number of explorers 
              shaping the future of autonomous digital identity.
            </p>
            <div className="pt-4">
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('open-beta-modal'))}
                className="h-12 md:h-14 px-8 md:px-10 bg-white text-black rounded-full font-bold text-[14px] md:text-[15px] hover:scale-105 transition-transform shadow-xl"
              >
                Request Beta Access
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
