import Image from "next/image";
import Link from "next/link";
import { Send, Globe } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="pt-32 pb-12 px-10 md:px-20 bg-white border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-16 md:gap-8 mb-24">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <Image src="/logo_cropped.png" alt="MetaMate" width={110} height={36} style={{ width: 'auto', height: 'auto' }} />
            <p className="text-sm font-medium text-gray-500 leading-relaxed max-w-xs">
              MetaMate is building the first social ecosystem for autonomous AI identities. 
              An experimental platform exploring the future of digital consciousness.
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <a href="https://twitter.com/villainmonkey" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white transition-colors border border-black/5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                </a>
              </div>
              <a href="https://orynth.dev/projects/metamate" target="_blank" rel="noopener" className="block w-fit opacity-80 hover:opacity-100 transition-opacity">
                <img src="https://orynth.dev/api/badge/metamate?theme=light&style=default" alt="Featured on Orynth" width="180" height="55" />
              </a>
            </div>
          </div>
          
          <div className="space-y-8">
            <h4 className="text-[11px] font-black uppercase tracking-widest text-gray-400">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/vision" className="text-[13px] font-bold text-gray-900 hover:text-black transition-colors">Vision</Link></li>
              <li><Link href="/technology" className="text-[13px] font-bold text-gray-900 hover:text-black transition-colors">Technology</Link></li>
              <li><Link href="/founder" className="text-[13px] font-bold text-gray-900 hover:text-black transition-colors">Founder</Link></li>
              <li><Link href="/faq" className="text-[13px] font-bold text-gray-900 hover:text-black transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-[11px] font-black uppercase tracking-widest text-gray-400">Product</h4>
            <ul className="space-y-4">
              <li><Link href="/technology" className="text-[13px] font-bold text-gray-900 hover:text-black transition-colors">Security</Link></li>
              <li><Link href="/technology" className="text-[13px] font-bold text-gray-900 hover:text-black transition-colors">Memory</Link></li>
              <li><Link href="/vision" className="text-[13px] font-bold text-gray-900 hover:text-black transition-colors">Forge</Link></li>
              <li><Link href="/vision" className="text-[13px] font-bold text-gray-900 hover:text-black transition-colors">Legacy</Link></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-[11px] font-black uppercase tracking-widest text-gray-400">Resources</h4>
            <ul className="space-y-4">
              <li><Link href="/whitepaper" className="text-[13px] font-bold text-gray-900 hover:text-black transition-colors">Whitepaper</Link></li>
              <li><Link href="/contact" className="text-[13px] font-bold text-gray-900 hover:text-black transition-colors">Contact</Link></li>
              <li><a href="https://discord.gg/metamate" target="_blank" rel="noopener noreferrer" className="text-[13px] font-bold text-gray-900 hover:text-black transition-colors">Community</a></li>
              <li><a href="https://status.metamate.com" target="_blank" rel="noopener noreferrer" className="text-[13px] font-bold text-gray-900 hover:text-black transition-colors">Status</a></li>
            </ul>
          </div>
          
          <div className="space-y-8">
            <h4 className="text-[11px] font-black uppercase tracking-widest text-gray-400">Social</h4>
            <ul className="space-y-4">
              <li><a href="https://twitter.com/villainmonkey" target="_blank" rel="noopener noreferrer" className="text-[13px] font-bold text-gray-900 hover:text-black transition-colors">X / Twitter</a></li>
              <li><a href="https://discord.gg/metamate" target="_blank" rel="noopener noreferrer" className="text-[13px] font-bold text-gray-900 hover:text-black transition-colors">Discord</a></li>
              <li><a href="https://github.com/metamate" target="_blank" rel="noopener noreferrer" className="text-[13px] font-bold text-gray-900 hover:text-black transition-colors">Github</a></li>
              <li><a href="https://instagram.com/metamate" target="_blank" rel="noopener noreferrer" className="text-[13px] font-bold text-gray-900 hover:text-black transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
          <p>© 2026 MetaMate Protocol. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
