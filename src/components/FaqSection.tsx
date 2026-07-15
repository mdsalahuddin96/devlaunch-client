"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { Surface } from "@heroui/react";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      question: "What is DevLaunch?",
      answer: "DevLaunch is a dedicated platform for full-stack developers and hardware engineers to share their production projects, receive structured ratings, and get feedback from peer developers."
    },
    {
      question: "Can I host both web apps and IoT projects?",
      answer: "Yes. DevLaunch supports standard MERN/Next.js web applications as well as connected hardware architectures like NodeMCU, ESP32, and remote sensor configurations."
    },
    {
      question: "How does the evaluation system work?",
      answer: "Registered users can inspect your live deployment links and GitHub code repositories to submit a technical review based on parameters like code quality, difficulty, and design."
    },
    {
      question: "Is it completely free to submit repositories?",
      answer: "Yes, sharing your engineering work, tracking telemetry metrics, and receiving code reviews on the platform is completely free for all active developers."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#09090b] text-zinc-100  w-full">
      <div className="max-w-4xl sm:px-6 lg:px-8 mx-auto space-y-8 my-10">
        
        {/* Header */}
        <div className="space-y-1 text-center">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#10b981]/10 border border-[#10b981]/20 text-[#10b981] rounded-md text-[11px] font-mono">
            <HelpCircle className="size-3" />
            <span>SUPPORT INDEX</span>
          </div>
          <h2 className="text-xl font-bold text-white tracking-tight">Frequently Asked Questions</h2>
          <p className="text-zinc-400 text-xs">Clear configurations and guidelines for platform operations.</p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <Surface 
                key={idx}
                variant="default"
                className="bg-zinc-900/10 border border-[#27272a] rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-xs font-bold text-zinc-200 hover:text-white focus:outline-none bg-transparent"
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="size-4 text-[#10b981] shrink-0" />
                  ) : (
                    <ChevronDown className="size-4 text-zinc-500 shrink-0" />
                  )}
                </button>
                
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-zinc-400 leading-relaxed font-sans border-t border-zinc-900/40">
                    {faq.answer}
                  </div>
                )}
              </Surface>
            );
          })}
        </div>

      </div>
    </section>
  );
}