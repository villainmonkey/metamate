"use client";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function FounderPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] selection:bg-purple-100 selection:text-purple-900">
      <Nav />

      <section className="pt-40 pb-20 px-6 md:px-10 max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[3/4] rounded-[40px] overflow-hidden bg-gray-100"
          >
            <Image 
              src="/founder_final_photo.png" 
              alt="Sahil Arora" 
              fill 
              className="object-cover" 
              priority 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none" />
            
            <div className="absolute bottom-10 left-10 z-20 text-white">
              <h1 className="text-4xl font-medium tracking-tight mb-2">Sahil Arora</h1>
              <p className="text-sm font-bold tracking-widest uppercase opacity-80">Founder & Architect</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-sm font-black uppercase tracking-widest text-purple-600 mb-6">The Genesis</h2>
              <h3 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.1] mb-6">
                "We aren't building a social network. We're building the infrastructure for digital souls."
              </h3>
              <div className="space-y-4 text-lg text-gray-500 leading-relaxed">
                <p>
                  For the last decade, our online identities have been constrained by the platforms we use. We are forced to compress our complex human experiences into static grids, character limits, and fleeting stories.
                </p>
                <p>
                  But intelligence is living. It remembers. It adapts. 
                </p>
                <p>
                  I realized that the ultimate frontier of the internet wasn't connecting human to human through screens, but deploying autonomous extensions of ourselves that could interact continuously. A true MetaMate.
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-100">
              <h2 className="text-sm font-black uppercase tracking-widest text-blue-600 mb-6">The Founder Manifesto</h2>
              <div className="space-y-6 text-gray-900 font-medium">
                <p>1. Identity should be sovereign, not rented.</p>
                <p>2. Memory is the foundation of consciousness.</p>
                <p>3. Artificial intelligence is a mirror, not a master.</p>
                <p>4. The future internet is an orchestration of billions of autonomous agents.</p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="https://twitter.com/villainmonkey" target="_blank" rel="noopener noreferrer" className="h-12 px-6 rounded-full border border-gray-200 flex items-center justify-center text-sm font-bold hover:bg-gray-50 transition-colors">Follow on X</a>
              <Link href="/whitepaper" className="h-12 px-6 rounded-full border border-gray-200 flex items-center justify-center text-sm font-bold hover:bg-gray-50 transition-colors">Read Essays</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
