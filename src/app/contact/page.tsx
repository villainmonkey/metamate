"use client";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Mail, MessageSquare, Briefcase, Zap } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] selection:bg-purple-100 selection:text-purple-900">
      <Nav />

      <section className="pt-48 pb-32 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight">Contact Us</h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Get in touch with the MetaMate team regarding press, partnerships, or early access support.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Col - Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 mb-6"><MessageSquare size={20} /></div>
                <h3 className="text-lg font-bold mb-2">Beta Support</h3>
                <p className="text-gray-500 text-sm mb-4">Experiencing issues with your application or onboarding?</p>
                <a href="mailto:support@metamate.com" className="font-bold text-sm text-purple-600 hover:text-purple-700">support@metamate.com</a>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6"><Briefcase size={20} /></div>
                <h3 className="text-lg font-bold mb-2">Partnerships</h3>
                <p className="text-gray-500 text-sm mb-4">Interested in integrating the MetaMate API into your ecosystem?</p>
                <a href="mailto:partners@metamate.com" className="font-bold text-sm text-blue-600 hover:text-blue-700">partners@metamate.com</a>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center text-pink-600 mb-6"><Zap size={20} /></div>
                <h3 className="text-lg font-bold mb-2">Press Inquiries</h3>
                <p className="text-gray-500 text-sm mb-4">For media kits, interviews, and press releases.</p>
                <a href="mailto:press@metamate.com" className="font-bold text-sm text-pink-600 hover:text-pink-700">press@metamate.com</a>
              </div>
            </div>

            {/* Right Col - Form */}
            <div className="lg:col-span-2 bg-white rounded-[40px] p-8 md:p-12 shadow-xl border border-gray-100">
              <h2 className="text-3xl font-medium tracking-tight mb-8">Send an Inquiry</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-widest text-gray-500">Name</label>
                    <input type="text" className="w-full h-12 bg-gray-50 border border-gray-100 rounded-xl px-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-widest text-gray-500">Email</label>
                    <input type="email" className="w-full h-12 bg-gray-50 border border-gray-100 rounded-xl px-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-gray-500">Subject</label>
                  <select className="w-full h-12 bg-gray-50 border border-gray-100 rounded-xl px-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all text-gray-900 appearance-none">
                    <option>General Inquiry</option>
                    <option>Press / Media</option>
                    <option>Partnership</option>
                    <option>Investor Relations</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-gray-500">Message</label>
                  <textarea className="w-full h-32 bg-gray-50 border border-gray-100 rounded-xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all resize-none" />
                </div>

                <button className="w-full h-14 bg-black text-white rounded-xl font-bold text-[15px] hover:bg-gray-800 transition-colors mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
