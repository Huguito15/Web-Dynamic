"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, Send, X, Loader2 } from "lucide-react";
import { useLanguage } from "@/content/i18n-context";

type ChatMessage = { role: "user" | "model"; text: string };

export function ChatWidget() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ role: "model", text: t.chat.greeting }]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const nextMessages: ChatMessage[] = [...messages, { role: "user", text }];
    setMessages(nextMessages);
    setInput("");
    setError(false);
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });
      if (!response.ok) throw new Error("request_failed");
      const data = await response.json();
      setMessages((prev) => [...prev, { role: "model", text: data.reply }]);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? t.chat.closeLabel : t.chat.openLabel}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.6, duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-24 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-champagne text-carbon shadow-xl shadow-black/20 sm:bottom-28 sm:right-8"
      >
        {open ? <X size={26} /> : <Bot size={26} />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            role="dialog"
            aria-label={t.chat.title}
            className="fixed bottom-[152px] right-6 z-40 flex h-[70svh] max-h-[560px] w-[calc(100vw-3rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-carbon/10 bg-cream shadow-2xl sm:bottom-[184px] sm:right-8"
          >
            <div className="flex items-center gap-3 bg-carbon px-5 py-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-champagne text-carbon">
                <Bot size={18} />
              </div>
              <div className="min-w-0">
                <p className="truncate font-serif text-base text-cream">{t.chat.title}</p>
                <p className="truncate text-xs text-cream/60">{t.chat.subtitle}</p>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-champagne text-carbon"
                        : "bg-white text-carbon/85 border border-carbon/10"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-2 rounded-2xl border border-carbon/10 bg-white px-4 py-2.5 text-carbon/60">
                    <Loader2 size={16} className="animate-spin" />
                  </div>
                </div>
              )}
              {error && <p className="text-center text-xs text-red-700">{t.chat.error}</p>}
            </div>

            <div className="border-t border-carbon/10 bg-white p-3">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={t.chat.placeholder}
                  maxLength={1000}
                  className="flex-1 rounded-full border border-carbon/15 bg-cream px-4 py-2.5 text-sm text-carbon outline-none focus:border-champagne"
                />
                <button
                  type="button"
                  onClick={sendMessage}
                  disabled={loading || !input.trim()}
                  aria-label={t.chat.send}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-champagne text-carbon transition-opacity duration-400 disabled:opacity-40"
                >
                  <Send size={16} />
                </button>
              </div>
              <p className="mt-2 text-center text-[11px] text-carbon/45">{t.chat.disclaimer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
