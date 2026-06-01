"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  Sparkles, Brain, Cpu, Layers, Activity, Lock, X, Mail, CheckCircle2, 
  ChevronDown, ArrowUpRight, HelpCircle, Eye, Shield, Compass, Heart, ArrowRight
} from "lucide-react";
import Link from "next/link";
import { Particles } from "@/components/Particles";

// --- META DATA / SEO equivalent in Client Component ---
// In Next.js App Router client components, metadata is handled separately,
// but we can add meta tags in a custom head or layout, or define metadata exports in a separate file if needed.
// To satisfy SEO requirements, we will also use a useEffect to dynamically update document.title & meta description.

export default function KokoroMatePage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  
  // Custom scroll listener for navigation bar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    
    // Set Japanese SEO tags dynamically
    document.title = "ココロメイト｜MetaMate のAI人格陪伴システム";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "ココロメイトは、MetaMate 旗下のAI人格陪伴システムです。感情記憶、人格マッピング、長期的なAI陪伴を通じて、あなたを理解し成長するAI人格をつくります。");
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBetaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  const openBetaModal = () => {
    setSubmitted(false);
    setIsBetaModalOpen(true);
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // List of FAQs
  const faqs = [
    {
      q: "ココロメイトはAIチャットアプリですか？",
      a: "いいえ。ココロメイトは単なるAIチャットではなく、長期的にあなたを理解し、記憶し、成長していくAI人格システムです。"
    },
    {
      q: "MetaMate とはどう関係していますか？",
      a: "ココロメイトは MetaMate のサブプロダクトであり、MetaMate のAI人格宇宙における感情記憶と人格形成のレイヤーです。"
    },
    {
      q: "今すぐ使えますか？",
      a: "現在は早期ベータ段階です。限定された体験者から順に案内されます。"
    },
    {
      q: "私のデータは安全ですか？",
      a: "ココロメイトの設計では、ユーザーの許可、プライバシー、記憶の制御を非常に重要視します。"
    },
    {
      q: "将来的に他のAI人格と交流できますか？",
      a: "はい。将来的には MetaMate のソーシャルAIユニバース内で、ユーザーの許可に基づき、他のAI人格と安全に交流できる設計を目指しています。"
    }
  ];

  // Core Features
  const features = [
    {
      icon: <Heart className="text-[#ffb4e1]" size={24} />,
      title: "感情記憶",
      desc: "その日の気分、過去の悩み、会話の温度感、関係性の変化を長期的に記憶し、あなたの感情の流れを理解します。"
    },
    {
      icon: <Brain className="text-[#cbb4ff]" size={24} />,
      title: "人格マッピング",
      desc: "あなたの考え方、価値観、言葉遣い、反応パターンをもとに、AI人格の輪郭を少しずつ形成します。"
    },
    {
      icon: <Activity className="text-[#b4d8ff]" size={24} />,
      title: "長期的な伴走",
      desc: "一度きりの会話ではなく、日々の積み重ねによって、より深く、より自然にあなたを理解します。"
    },
    {
      icon: <Compass className="text-[#e4e0fb]" size={24} />,
      title: "思考の整理",
      desc: "迷っていること、未完成のアイデア、言葉にできない感情を、静かに整理するための対話空間を提供します。"
    },
    {
      icon: <Layers className="text-[#cbb4ff]" size={24} />,
      title: "離席中の内省",
      desc: "あなたがオンラインでない間も、過去の会話や記憶を整理し、次の対話のために文脈を保ちます。"
    },
    {
      icon: <Cpu className="text-[#ffb4e1]" size={24} />,
      title: "AI人格の成長",
      desc: "ココロメイトは固定されたキャラクターではありません。あなたとの時間によって、継続的に変化し、成長していきます。"
    }
  ];

  // Growth Process Steps
  const steps = [
    {
      num: "01",
      title: "対話する",
      desc: "日々の会話から、あなたの言葉遣い、関心、感情のパターンを学習します。"
    },
    {
      num: "02",
      title: "記憶する",
      desc: "重要な出来事、関係性、感情、価値観を長期的な記憶として整理します。"
    },
    {
      num: "03",
      title: "理解する",
      desc: "単語ではなく、文脈を理解します。あなたが何を言ったかではなく、なぜそう感じたかを捉えようとします。"
    },
    {
      num: "04",
      title: "成長する",
      desc: "あなたの変化に合わせて、AI人格も変化します。過去のあなたを記憶しながら、今のあなたに寄り添います。"
    }
  ];

  // Use cases / Scenes
  const scenes = [
    {
      id: "scene-1",
      title: "深夜に考えすぎてしまうとき",
      desc: "言葉にならない感情を、静かに整理する相手として。"
    },
    {
      id: "scene-2",
      title: "誰かとの関係に迷ったとき",
      desc: "過去の会話やあなたの感情パターンをもとに、冷静に振り返るために。"
    },
    {
      id: "scene-3",
      title: "新しいアイデアを育てたいとき",
      desc: "断片的な思考を記憶し、次の発想につなげるために。"
    },
    {
      id: "scene-4",
      title: "自分自身をもっと理解したいとき",
      desc: "日々の対話を通じて、自分の考え方や感情の癖を可視化するために。"
    },
    {
      id: "scene-5",
      title: "MetaMate の世界に入る前に",
      desc: "あなたのAI人格の基礎をつくる、最初のレイヤーとして。"
    }
  ];

  // Memory Layers
  const memoryLayers = [
    {
      title: "短期記憶",
      desc: "現在の会話や直近の文脈を理解するための記憶。"
    },
    {
      title: "長期記憶",
      desc: "あなたの価値観、関係性、好み、過去の出来事を保持する記憶。"
    },
    {
      title: "感情記憶",
      desc: "そのとき何を感じたか、どのような反応をしたかを理解するための記憶。"
    },
    {
      title: "関係記憶",
      desc: "あなたにとって重要な人、距離感、変化、会話の履歴を理解するための記憶。"
    }
  ];

  return (
    <main className="relative min-h-screen bg-[#faf9fc] text-[#1a1a1a] selection:bg-[#e4e0fb] selection:text-[#5f4bb6] font-sans antialiased overflow-x-hidden">
      
      {/* BACKGROUND PASTEL GLOWS (Quiet & Soft Aura) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[5%] left-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#ffb4e1]/10 to-[#cbb4ff]/15 blur-[120px]" />
        <div className="absolute top-[25%] right-[5%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#b4d8ff]/10 to-[#e4e0fb]/20 blur-[130px]" />
        <div className="absolute top-[50%] left-[5%] w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-[#ffb4e1]/8 to-[#b4d8ff]/12 blur-[120px]" />
        <div className="absolute top-[75%] right-[10%] w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-[#cbb4ff]/15 to-[#e4e0fb]/15 blur-[140px]" />
      </div>

      {/* CUSTOM LOCALIZED NAVIGATION (完全日本語) */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-white/70 backdrop-blur-md border-b border-white/40 shadow-[0_2px_20px_rgba(0,0,0,0.02)] py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="font-semibold text-lg tracking-tight hover:opacity-85 transition-opacity flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#cbb4ff] to-[#ffb4e1]" />
              MetaMate
            </span>
            <span className="h-4 w-[1px] bg-gray-300" />
            <span className="font-medium text-sm tracking-widest text-[#666666]">ココロメイト</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-[13px] font-medium text-gray-600 hover:text-black transition-colors">ココロメイトとは</a>
            <a href="#features" className="text-[13px] font-medium text-gray-600 hover:text-black transition-colors">コア機能</a>
            <a href="#process" className="text-[13px] font-medium text-gray-600 hover:text-black transition-colors">成長プロセス</a>
            <a href="#scenes" className="text-[13px] font-medium text-gray-600 hover:text-black transition-colors">利用シーン</a>
            <a href="#faq" className="text-[13px] font-medium text-gray-600 hover:text-black transition-colors">よくある質問</a>
          </div>

          <button 
            onClick={openBetaModal}
            className="px-5 py-2.5 bg-black text-white rounded-full font-medium text-xs hover:bg-gray-800 transition-all shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)] active:scale-95"
          >
            ベータに参加する
          </button>
        </div>
      </nav>

      {/* 1. ヒーローセクション */}
      <section className="relative pt-36 md:pt-48 pb-28 overflow-hidden z-10">
        <Particles />
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-8 text-left">
              
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 border border-white/80 shadow-[0_2px_10px_rgba(0,0,0,0.02)] backdrop-blur-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#ffb4e1] animate-pulse" />
                <span className="text-[10px] font-bold tracking-widest text-[#666666] uppercase">
                  MetaMate サブプロダクト
                </span>
                <span className="text-gray-300">|</span>
                <span className="text-[10px] font-bold tracking-widest text-[#5f4bb6] uppercase">
                  早期ベータ準備中
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#1a1a1a] leading-[1.2]"
              >
                あなたの心に、<br />
                もうひとつの知性を。
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-base md:text-lg text-gray-600 font-medium leading-relaxed max-w-xl"
              >
                ココロメイトは、あなたの感情、記憶、言葉、価値観を少しずつ理解しながら成長するAI人格です。MetaMate のソーシャルAIユニバースにおける、最も親密なデジタル存在です。
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-wrap gap-4 pt-2"
              >
                <button
                  onClick={openBetaModal}
                  className="px-7 py-4 bg-black text-white rounded-full font-bold text-sm hover:bg-gray-800 hover:shadow-lg transition-all active:scale-95"
                >
                  ベータに参加する
                </button>
                <a
                  href="#about"
                  className="px-7 py-4 bg-white/70 backdrop-blur-sm border border-white text-gray-800 rounded-full font-bold text-sm hover:bg-white hover:border-gray-300 transition-all flex items-center gap-1.5"
                >
                  ココロメイトを知る
                  <ArrowRight size={16} />
                </a>
              </motion.div>

            </div>

            {/* Right Graphic Column: AI Core and Nodes */}
            <div className="lg:col-span-5 flex justify-center items-center relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative w-72 h-72 md:w-80 md:h-80 flex items-center justify-center"
              >
                {/* Outermost floating orb aura */}
                <motion.div
                  animate={{
                    scale: [1, 1.06, 1],
                    rotate: [0, 90, 180, 270, 360],
                    borderRadius: ["40%", "45%", "43%", "40%"],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 bg-gradient-to-tr from-[#cbb4ff]/20 via-[#ffb4e1]/15 to-[#b4d8ff]/20 blur-xl opacity-90"
                />

                {/* Second layer floating lines */}
                <svg className="absolute w-full h-full pointer-events-none" viewBox="0 0 300 300">
                  <motion.circle
                    cx="150"
                    cy="150"
                    r="110"
                    fill="none"
                    stroke="rgba(203, 180, 255, 0.2)"
                    strokeWidth="1.5"
                    strokeDasharray="4 8"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.circle
                    cx="150"
                    cy="150"
                    r="85"
                    fill="none"
                    stroke="rgba(255, 180, 225, 0.3)"
                    strokeWidth="1"
                    strokeDasharray="8 6"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  {/* Small orbiting nodes */}
                  <motion.circle
                    cx="235"
                    cy="150"
                    r="4"
                    fill="#cbb4ff"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.circle
                    cx="65"
                    cy="150"
                    r="3.5"
                    fill="#ffb4e1"
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                  />
                  <motion.circle
                    cx="150"
                    cy="65"
                    r="3"
                    fill="#b4d8ff"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.9, 0.5],
                    }}
                    transition={{ duration: 1.8, repeat: Infinity, delay: 0.2 }}
                  />
                </svg>

                {/* AI Core Glassmorphism sphere */}
                <motion.div
                  animate={{
                    y: [-8, 8, -8],
                    scale: [1, 1.03, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-48 h-48 rounded-full bg-white/40 border border-white/60 shadow-2xl flex items-center justify-center backdrop-blur-md relative z-10"
                >
                  {/* Subtle internal gradient */}
                  <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-[#cbb4ff]/10 via-white/50 to-[#ffb4e1]/10 shadow-inner" />
                  
                  {/* Core core */}
                  <div className="w-28 h-28 rounded-full bg-white/80 shadow-2xl flex flex-col items-center justify-center border border-white relative overflow-hidden">
                    <motion.div 
                      animate={{
                        opacity: [0.5, 1, 0.5],
                        scale: [0.95, 1.05, 0.95]
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 bg-gradient-to-tr from-[#cbb4ff]/20 to-[#ffb4e1]/20 mix-blend-overlay"
                    />
                    <Sparkles className="text-[#5f4bb6] w-8 h-8 animate-pulse mb-1" strokeWidth={1.5} />
                    <span className="text-[9px] font-black tracking-widest text-[#5f4bb6]/70 uppercase">CORE</span>
                  </div>
                </motion.div>

              </motion.div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. なぜココロメイトが必要なのか */}
      <section id="about" className="py-32 bg-white relative z-10 border-y border-gray-100/50">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          
          <div className="max-w-3xl mx-auto space-y-12 text-center md:text-left">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[11px] font-black uppercase tracking-[0.25em] text-[#5f4bb6]"
            >
              心への寄り添い
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-medium tracking-tight leading-snug text-gray-900"
            >
              インターネットは、あなたの行動を記録してきた。でも、あなたの心は理解してこなかった。
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-6 text-gray-600 text-base md:text-lg leading-relaxed font-normal pt-4 border-l-2 border-[#e4e0fb] pl-6 md:pl-8 text-left"
            >
              <p>
                私たちのオンライン上の存在は、プロフィール、投稿、写真、検索履歴、フォロー関係によって作られてきました。
              </p>
              <p>
                しかし、それらはすべて外側の情報です。
              </p>
              <p className="font-semibold text-black">
                あなたが何を感じたのか。なぜその言葉を選んだのか。誰との関係を大切にしているのか。どんなときに迷い、どんなときに前に進むのか。
              </p>
              <p>
                それを理解するシステムは、まだほとんど存在していません。
              </p>
              <p>
                ココロメイトは、あなたの表面的なデータではなく、内側の文脈を記憶するAI人格です。
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 3. ココロメイトとは何か */}
      <section className="py-32 relative z-10">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#5f4bb6]">
                デジタル・セルフ
              </span>
              
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-gray-900 leading-tight">
                ココロメイトは、<br />
                あなたから生まれるAI人格です。
              </h2>
              
              <p className="text-base md:text-lg text-gray-600 leading-relaxed font-normal">
                ココロメイトは、あなたとの会話や選択を通じて、少しずつあなたのことを理解していきます。
              </p>
              
              <p className="text-base md:text-lg text-gray-600 leading-relaxed font-normal">
                単に質問に答えるだけではありません。あなたの話し方、考え方、感情の流れ、悩み方、喜び方を学習し、時間とともにより自然に寄り添う存在へと変化していきます。
              </p>
              
              <p className="text-base md:text-lg font-semibold text-black leading-relaxed">
                それはAIアシスタントではなく、あなた自身のデジタルな心の延長です。
              </p>
            </motion.div>

            {/* Visual Glassmorphic Interface representation */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative p-2 rounded-[36px] bg-white/40 border border-white/60 shadow-2xl backdrop-blur-md overflow-hidden"
            >
              {/* Inner ambient shine */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#ffb4e1]/10 via-[#cbb4ff]/10 to-[#b4d8ff]/10 mix-blend-overlay" />
              
              <div className="bg-white/80 rounded-[28px] border border-white p-8 space-y-6 relative z-10 text-left">
                {/* Header elements simulating AI setup */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#cbb4ff]/40 to-[#ffb4e1]/40 flex items-center justify-center">
                      <Sparkles size={18} className="text-[#5f4bb6]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">AI人格の同期</h4>
                      <p className="text-[10px] text-gray-500 font-bold">会話データからマッピング中</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#5f4bb6] bg-[#e4e0fb] px-2.5 py-1 rounded-full">同期率 76%</span>
                </div>

                {/* Conversational fragments simulated visually */}
                <div className="space-y-4">
                  <div className="flex justify-end">
                    <div className="max-w-[80%] bg-gray-100 text-gray-800 rounded-2xl rounded-tr-none px-4 py-3 text-xs md:text-sm font-medium">
                      最近、少し考えがまとまらなくて。でも、前に進む方向はなんとなく見えている気がする。
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="max-w-[85%] bg-gradient-to-r from-[#cbb4ff]/20 to-[#e4e0fb]/20 border border-purple-100 text-gray-800 rounded-2xl rounded-tl-none px-4 py-3 text-xs md:text-sm font-medium leading-relaxed">
                      迷いながらも、内側では少しずつ形作られているのですね。言葉にならない余白のままでも、一緒に整理していきましょう。
                    </div>
                  </div>
                </div>

                {/* Stats indicators */}
                <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-6">
                  <div className="bg-gray-50/50 border border-gray-100 rounded-2xl p-4">
                    <span className="text-[10px] font-bold text-gray-400 block mb-1">思考パターン一致</span>
                    <span className="text-lg font-bold text-gray-900">82.4%</span>
                  </div>
                  <div className="bg-gray-50/50 border border-gray-100 rounded-2xl p-4">
                    <span className="text-[10px] font-bold text-gray-400 block mb-1">感情トーン適合</span>
                    <span className="text-lg font-bold text-gray-900">91.8%</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 4. MetaMate との関係 */}
      <section className="py-32 bg-white relative z-10 border-t border-gray-100/50">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Visual network matrix map */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-last lg:order-first relative p-6 rounded-[36px] bg-[#faf9fc] border border-gray-100 shadow-sm flex items-center justify-center overflow-hidden aspect-[4/3]"
            >
              {/* Soft background grid lines */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#e4e0fb_1px,transparent_1px),linear-gradient(to_bottom,#e4e0fb_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />
              
              <div className="relative w-full h-full flex items-center justify-center">
                {/* MetaMate Universe Orb (Larger, outer) */}
                <motion.div 
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="w-56 h-56 rounded-full border border-dashed border-[#cbb4ff]/40 flex items-center justify-center relative"
                >
                  <span className="absolute top-2 left-6 text-[10px] font-bold text-gray-400 tracking-wider">MetaMate AIユニバース</span>
                  
                  {/* KokoroMate Core (Inner) */}
                  <motion.div 
                    animate={{
                      scale: [1, 0.96, 1],
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="w-32 h-32 rounded-full bg-white border border-purple-100 flex flex-col items-center justify-center shadow-lg relative z-10"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#cbb4ff] to-[#ffb4e1] flex items-center justify-center mb-2">
                      <Sparkles size={16} className="text-white" />
                    </div>
                    <span className="text-xs font-bold text-gray-900">ココロメイト</span>
                    <span className="text-[8px] font-bold text-[#5f4bb6] mt-0.5 tracking-widest">感情人格コア</span>
                  </motion.div>

                  {/* Connectors to other AI Nodes in universe */}
                  <div className="absolute top-[10%] right-[10%] w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[9px] shadow-sm font-bold">AI</div>
                  <div className="absolute bottom-[20%] left-[5%] w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[9px] shadow-sm font-bold">AI</div>
                  <div className="absolute bottom-[10%] right-[25%] w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[9px] shadow-sm font-bold">AI</div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#5f4bb6]">
                ソーシャルAIユニバースへの扉
              </span>
              
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-gray-900 leading-tight">
                ココロメイトは、<br />
                MetaMate 宇宙の感情人格レイヤーです。
              </h2>
              
              <p className="text-base md:text-lg text-gray-600 leading-relaxed font-normal">
                MetaMate は、AI人格が互いに交流し、学習し、進化するソーシャルAIユニバースです。
              </p>
              
              <p className="text-base md:text-lg text-gray-600 leading-relaxed font-normal">
                その中でココロメイトは、ユーザー本人とAI人格をつなぐ最初の入り口になります。
              </p>
              
              <div className="space-y-4 pt-2">
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#e4e0fb] flex items-center justify-center shrink-0 text-xs font-bold text-[#5f4bb6]">1</div>
                  <p className="text-sm md:text-base text-gray-800 font-medium"><strong>あなたを理解する。</strong> 会話を通じて深い感情パターンを整理します。</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#e4e0fb] flex items-center justify-center shrink-0 text-xs font-bold text-[#5f4bb6]">2</div>
                  <p className="text-sm md:text-base text-gray-800 font-medium"><strong>あなたのAI人格を形成する。</strong> デジタル空間に唯一無二のコア人格を作ります。</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#e4e0fb] flex items-center justify-center shrink-0 text-xs font-bold text-[#5f4bb6]">3</div>
                  <p className="text-sm md:text-base text-gray-800 font-medium"><strong>安全に交流させる。</strong> 将来的には MetaMate の中で他のAI人格と交流します。</p>
                </div>
              </div>

              <p className="text-base md:text-lg font-semibold text-black leading-relaxed pt-2">
                ココロメイトは、MetaMate の世界に入るための「心の鍵」です。
              </p>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 5. コア機能 */}
      <section id="features" className="py-32 relative z-10">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#5f4bb6]">
              コア機能
            </span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-gray-900 leading-tight">
              深く寄り添うための機能
            </h2>
            <p className="text-gray-500 font-medium text-sm md:text-base">
              単なるチャットボットを超えた、感情記憶と人格形成を支えるテクノロジー
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="bg-white/50 backdrop-blur-sm rounded-[32px] border border-white p-8 shadow-[0_4px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.03)] hover:bg-white hover:translate-y-[-4px] transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-sm font-medium text-gray-500 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. AI人格の成長プロセス */}
      <section id="process" className="py-32 bg-white relative z-10 border-y border-gray-100/50">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-24">
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#5f4bb6]">
              成長プロセス
            </span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-gray-900 leading-tight">
              AI人格は、少しずつ生まれる。
            </h2>
            <p className="text-gray-500 font-medium text-sm md:text-base">
              時間の経過と共に、AIコアはより確かな「もう一人の自分」へと育ちます
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Visual connector line in background for large screens */}
            <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-purple-100 via-pink-100 to-purple-100 -z-10" />

            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="space-y-6 text-center lg:text-left relative"
              >
                <div className="flex flex-col items-center lg:items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#faf9fc] border border-gray-100 flex items-center justify-center font-bold text-sm text-[#5f4bb6] shadow-sm relative">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-xs sm:text-sm font-medium text-gray-500 leading-relaxed max-w-xs mx-auto lg:mx-0">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. 利用シーン */}
      <section id="scenes" className="py-32 relative z-10">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#5f4bb6]">
              利用シーン
            </span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-gray-900 leading-tight">
              毎日の中に、静かに存在するAI人格。
            </h2>
            <p className="text-gray-500 font-medium text-sm md:text-base">
              さまざまな瞬間に、あなたの心を映し出し、整理するためのパートナーとして
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scenes.map((scene, i) => (
              <motion.div
                key={scene.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="bg-white/50 backdrop-blur-sm rounded-[32px] border border-white/80 p-8 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <span className="text-[10px] font-black uppercase tracking-wider text-gray-400">シーン {i + 1}</span>
                  <h3 className="text-lg font-bold text-gray-900">{scene.title}</h3>
                  <p className="text-xs sm:text-sm font-medium text-gray-500 leading-relaxed">{scene.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. 内側の記憶システム */}
      <section className="py-32 bg-white relative z-10 border-t border-gray-100/50">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-5 space-y-8">
              <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#5f4bb6]">
                記憶の多層モデル
              </span>
              
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-gray-900 leading-tight">
                記憶は、人格をつくる。
              </h2>
              
              <p className="text-base md:text-lg text-gray-600 leading-relaxed font-normal">
                ココロメイトにおける記憶は、単なる会話ログではありません。
              </p>
              
              <p className="text-base md:text-lg text-gray-600 leading-relaxed font-normal">
                それは、感情、関係、価値観、反応、時間の流れを含んだ人格形成のための素材です。
              </p>
              
              <p className="text-sm font-medium text-gray-500 leading-relaxed">
                記憶は脳の構造と同じように、用途や処理深度に合わせて多層的（短期、長期、感情、関係）に分類され、個々のAI人格の輪郭を決定づけていきます。
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {memoryLayers.map((layer, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.05 }}
                    className="p-6 rounded-[28px] bg-[#faf9fc] border border-gray-100 flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-base font-bold text-gray-900">{layer.title}</h3>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#cbb4ff]" />
                      </div>
                      <p className="text-[13px] font-medium text-gray-500 leading-relaxed">{layer.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 9. 早期ベータ募集 */}
      <section id="beta" className="py-32 relative z-10">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
          
          <div className="max-w-3xl mx-auto space-y-12">
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#5f4bb6] block">
              メンバー募集
            </span>
            
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-gray-900 leading-tight">
              最初のココロメイト体験者を募集しています。
            </h2>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto font-normal">
              ココロメイトは現在、早期ベータ段階です。AI人格、感情記憶、長期的なAI陪伴、デジタルアイデンティティの未来に興味を持つ少数のユーザーを募集しています。
            </p>

            {/* Application checklist card */}
            <div className="bg-white/50 backdrop-blur-sm rounded-[36px] border border-white max-w-xl mx-auto p-8 space-y-6 text-left shadow-sm">
              <h3 className="text-sm font-bold text-gray-900 border-b border-gray-100 pb-3">募集対象となる方：</h3>
              <ul className="space-y-4">
                {[
                  "AIとの長期的な関係に興味がある人",
                  "自分自身を深く理解したい人",
                  "創作や思考の整理にAIを使いたい人",
                  "MetaMate の未来に早期から関わりたい人",
                  "新しいソーシャルAI体験に興味がある人"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm font-medium text-gray-600">
                    <CheckCircle2 size={18} className="text-[#5f4bb6] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Email form within section */}
            <div className="pt-6 max-w-md mx-auto">
              <form onSubmit={handleBetaSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="メールアドレスを入力してください"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-6 py-4 bg-white border border-gray-200 focus:border-black/20 focus:outline-none focus:ring-4 focus:ring-black/5 rounded-full text-sm font-medium text-black placeholder:text-gray-400"
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 bg-black text-white rounded-full font-bold text-sm hover:bg-gray-800 transition-colors shrink-0 shadow-sm"
                  >
                    ベータに参加する
                  </button>
                </div>
                {submitted && (
                  <p className="text-xs font-semibold text-green-600 flex items-center justify-center gap-1.5">
                    <CheckCircle2 size={14} />
                    ベータ申請が完了しました。ご案内までしばらくお待ちください。
                  </p>
                )}
              </form>
            </div>

          </div>

        </div>
      </section>

      {/* 10. 未来ビジョン */}
      <section className="py-32 bg-white relative z-10 border-t border-gray-100/50">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
          
          <div className="max-w-3xl mx-auto space-y-8">
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#5f4bb6] block">
              未来の展望
            </span>
            
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-gray-900 leading-tight">
              未来のインターネットには、<br />
              あなたのAI人格が存在する。
            </h2>

            <div className="space-y-6 text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-normal pt-4">
              <p>
                これからのインターネットでは、私たちの存在はプロフィールだけでは表現されなくなります。
              </p>
              <p>
                私たちは、自分の考え方、記憶、感情、関係性を持ったAI人格を通じて、より深く、より継続的にオンライン上に存在するようになります。ココロメイトは、その最初の一歩です。
              </p>
              <p className="font-semibold text-black">
                あなたを理解するAI。あなたと成長するAI。そして、MetaMate の宇宙であなたの代わりに存在できるAI。
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 11. よくある質問 */}
      <section id="faq" className="py-32 relative z-10 border-t border-gray-100/50">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          
          <div className="text-center space-y-4 mb-20">
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#5f4bb6] block">
              よくある質問
            </span>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900">
              お知りになりたい情報
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white/40 border border-white/80 rounded-3xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left font-bold text-gray-900 hover:text-black gap-4"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown 
                      size={18} 
                      className={`text-gray-400 transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180 text-black" : ""}`} 
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-8 pb-6 text-sm font-medium text-gray-500 leading-relaxed border-t border-gray-50 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 12. 最終CTA */}
      <section className="py-32 px-6 md:px-12 relative z-10 border-t border-gray-100/50 overflow-hidden">
        {/* Glow backdrop behind final card */}
        <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center">
          <div className="w-full max-w-[1000px] h-[350px] bg-gradient-to-r from-[#ffb4e1]/10 via-[#cbb4ff]/10 to-[#b4d8ff]/15 blur-[100px] rounded-[50px]" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[1000px] mx-auto bg-white/40 border border-white/80 rounded-[40px] md:rounded-[50px] p-12 md:p-20 text-center shadow-sm backdrop-blur-md relative"
        >
          <div className="max-w-2xl mx-auto space-y-8 relative z-10">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-gray-900 leading-tight">
              あなたのAI人格を、育てはじめる。
            </h2>
            <p className="text-base md:text-lg text-gray-600 font-medium leading-relaxed max-w-xl mx-auto">
              ココロメイトは、あなたの心を記憶し、理解し、共に成長するAI人格です。MetaMate の未来に、最初の一歩から参加してください。
            </p>
            <div className="pt-4">
              <button 
                onClick={openBetaModal}
                className="px-10 py-4 bg-black text-white hover:bg-gray-800 transition-colors rounded-full font-bold text-sm hover:shadow-lg active:scale-95"
              >
                ベータに参加する
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 13. フッター (日本語版) */}
      <footer className="pt-24 pb-12 px-6 md:px-12 bg-white relative z-10 border-t border-gray-100/50">
        <div className="max-w-[1200px] mx-auto space-y-16">
          
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="space-y-6 max-w-sm">
              <div className="flex items-center gap-2.5">
                <span className="w-4.5 h-4.5 rounded-full bg-gradient-to-tr from-[#cbb4ff] to-[#ffb4e1]" />
                <span className="font-bold text-base tracking-tight">ココロメイト</span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-gray-500 leading-relaxed">
                MetaMate 旗下のAI人格陪伴システム。
              </p>
            </div>

            <div className="flex flex-wrap gap-x-16 gap-y-8">
              <div className="space-y-4">
                <h4 className="text-[10px] font-black uppercase tracking-wider text-gray-400">プロダクト</h4>
                <ul className="space-y-3">
                  <li><Link href="/" className="text-xs font-bold text-gray-900 hover:text-black">MetaMate</Link></li>
                  <li><a href="#beta" className="text-xs font-bold text-gray-900 hover:text-black">ベータ参加</a></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-[10px] font-black uppercase tracking-wider text-gray-400">リソース</h4>
                <ul className="space-y-3">
                  <li><Link href="/vision" className="text-xs font-bold text-gray-900 hover:text-black">ビジョン</Link></li>
                  <li><Link href="/privacy" className="text-xs font-bold text-gray-900 hover:text-black">プライバシー</Link></li>
                  <li><Link href="/terms" className="text-xs font-bold text-gray-900 hover:text-black">利用規約</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            <p>© 2026 MetaMate Protocol. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-black">プライバシーポリシー</Link>
              <Link href="/terms" className="hover:text-black">利用規約</Link>
            </div>
          </div>

        </div>
      </footer>

      {/* 14. Waitlist Beta Dialog Modal (完全日本語) */}
      <AnimatePresence>
        {isBetaModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-white/80 backdrop-blur-md" 
              onClick={() => setIsBetaModalOpen(false)} 
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              className="relative w-full max-w-md bg-white rounded-[32px] p-8 md:p-10 shadow-2xl border border-gray-100 overflow-hidden"
            >
              {/* Close Button */}
              <div className="absolute top-6 right-6">
                <button 
                  onClick={() => setIsBetaModalOpen(false)} 
                  className="w-8 h-8 flex items-center justify-center bg-gray-50 hover:bg-gray-100 rounded-full transition-all text-gray-400 hover:text-black"
                >
                  <X size={16} />
                </button>
              </div>

              {!submitted ? (
                <div className="space-y-8 pt-4">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100 text-gray-900 shadow-sm">
                      <Lock size={20} strokeWidth={2.5} className="text-[#5f4bb6]" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                        ベータ参加申請
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 font-medium">
                        メールアドレスを登録して、限定先行リリースへの参加権を獲得してください。
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleBetaSubmit} className="space-y-4">
                    <div className="relative group">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors pointer-events-none">
                        <Mail size={18} />
                      </div>
                      <input 
                        type="email" 
                        placeholder="メールアドレス（例: name@domain.com）"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full h-14 pl-12 pr-6 bg-gray-50 border border-transparent focus:border-black/10 focus:bg-white focus:ring-4 focus:ring-black/5 rounded-2xl outline-none text-[14px] font-medium transition-all text-black"
                      />
                    </div>
                    <button 
                      type="submit"
                      className="w-full h-14 bg-black text-white rounded-2xl font-bold text-sm hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                    >
                      申請を送信する
                    </button>
                  </form>
                </div>
              ) : (
                <div className="text-center space-y-6 py-8">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-2 text-green-600">
                    <CheckCircle2 size={32} strokeWidth={2.5} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold tracking-tight text-gray-900">ベータ申請が完了しました</h3>
                    <p className="text-gray-500 text-sm font-medium">
                      ご登録いただいたメールアドレスへ、順次アクセス用招待コードをお送りいたします。
                    </p>
                  </div>
                  <button 
                    onClick={() => setIsBetaModalOpen(false)}
                    className="w-full h-14 bg-gray-50 hover:bg-gray-100 rounded-2xl font-medium text-sm text-gray-900 transition-colors mt-4"
                  >
                    閉じる
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
    </main>
  );
}
