import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/917013438613"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 transition-transform hover:scale-110"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" />
      <MessageCircle className="relative h-6 w-6" />
    </a>
  );
}