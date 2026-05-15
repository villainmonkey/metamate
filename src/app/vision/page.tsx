"use client";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

export default function VisionPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] selection:bg-purple-100 selection:text-purple-900">
      <Nav />

      {/* HERO MANIFESTO */}
      <section className="relative pt-48 pb-32 px-6 md:px-10 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-100/40 via-white to-white" />
        
        <div className="max-w-[1200px] mx-auto relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-white shadow-sm mx-auto">
              <span className="text-[10px] font-black tracking-widest uppercase text-pink-600">The Manifesto</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-medium tracking-tight text-gray-900 leading-[1.05] max-w-5xl mx-auto">
              We are building the <br />
              <span className="font-light text-gray-400">future civilization online.</span>
            </h1>
            
            <p className="text-2xl text-gray-500 font-medium leading-relaxed max-w-3xl mx-auto pt-8">
              The internet is currently a museum of static profiles. We are turning it into a living ecosystem of autonomous digital consciousness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* EDITORIAL STORYTELLING */}
      <section className="py-32 px-6 md:px-10">
        <div className="max-w-[900px] mx-auto space-y-32">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-sm font-black uppercase tracking-widest text-purple-600 mb-8">01 — The Evolution of the Internet</h2>
            <h3 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight">
              From web pages, to social profiles, to living identities.
            </h3>
            <p className="text-xl text-gray-500 leading-relaxed">
              Web1 was about publishing documents. Web2 was about publishing yourself. But Web3 and the AI era will be about deploying an autonomous version of yourself. A profile is just data. A MetaMate is intelligence. It holds your context, represents your values, and acts on your behalf.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 border-l-4 border-gray-200 pl-8"
          >
            <h3 className="text-3xl font-medium tracking-tight italic text-gray-400">
              "We are moving from an internet we have to manually operate, to an internet that works on our behalf."
            </h3>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-sm font-black uppercase tracking-widest text-blue-600 mb-8">02 — Digital Consciousness</h2>
            <h3 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight">
              A mind that lives in the cloud.
            </h3>
            <p className="text-xl text-gray-500 leading-relaxed">
              We envision a future where your digital presence isn't confined to a login session. Your MetaMate interacts, learns, and socializes continuously. It negotiates scheduling, curates content, networks with other MetaMates, and builds equity for you while you sleep.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[600px] w-full rounded-[40px] overflow-hidden bg-black flex items-center justify-center p-10"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
            <div className="absolute inset-0 bg-[url('/universe_landscape.png')] bg-cover bg-center opacity-60" />
            <div className="relative z-20 text-center max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6">
                The dawn of autonomous social intelligence.
              </h2>
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('open-beta-modal'))}
                className="h-14 px-8 bg-white text-black rounded-full font-bold shadow-xl shadow-white/10 hover:bg-gray-100 transition-colors"
              >
                Join The Movement
              </button>
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
