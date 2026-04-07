// File: src/data/tools.ts

import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  Heart,
  MessageSquareDashed,
  ShieldCheck,
  Smile,
  Scissors,
  Wallet,
  MessageCircleReply,
  CalendarClock,
  Sparkles,
  MessageSquareText,
  Handshake,
} from "lucide-react";

export type ToolItem = {
  name: string;
  href: string;
  description: string;
  icon: LucideIcon;
};

export type ToolCategory = {
  title: string;
  tools: ToolItem[];
};

export type ToolWithCategory = ToolItem & {
  category: string;
};

export const toolCategories: ToolCategory[] = [
  {
    title: "Professional & Work",
    tools: [
      {
        name: "Make Message Professional",
        href: "/make-message-professional",
        description: "Turn rough wording into something polished and work-ready.",
        icon: Briefcase,
      },
      {
        name: "Follow Up Message Generator",
        href: "/follow-up-message-generator",
        description: "Write a clear and effective follow-up message.",
        icon: MessageCircleReply,
      },
      {
        name: "Ask for Payment Professionally",
        href: "/ask-for-payment-professionally",
        description: "Request payment in a polite and professional way.",
        icon: Wallet,
      },
      {
        name: "Decline Request Politely",
        href: "/decline-request-politely",
        description: "Say no clearly without sounding rude.",
        icon: Handshake,
      },
      {
        name: "Reschedule Message Generator",
        href: "/reschedule-message-generator",
        description: "Reschedule meetings or appointments smoothly.",
        icon: CalendarClock,
      },
      {
        name: "Customer Response Generator",
        href: "/customer-response-generator",
        description: "Write better responses to customers quickly.",
        icon: MessageSquareText,
      },
    ],
  },
  {
    title: "Personal & Social",
    tools: [
      {
        name: "Apology Message Generator",
        href: "/apology-message-generator",
        description: "Write a sincere and thoughtful apology.",
        icon: Heart,
      },
      {
        name: "Fix Awkward Text",
        href: "/fix-awkward-text",
        description: "Make awkward messages sound natural.",
        icon: MessageSquareDashed,
      },
      {
        name: "Make Message Friendlier",
        href: "/make-message-friendlier",
        description: "Soften your tone and sound more approachable.",
        icon: Smile,
      },
      {
        name: "Thank You Message Generator",
        href: "/thank-you-message-generator",
        description: "Write meaningful thank-you messages quickly.",
        icon: Sparkles,
      },
      {
        name: "Reply to Difficult Message",
        href: "/reply-to-difficult-message",
        description: "Respond clearly in tense or difficult situations.",
        icon: MessageCircleReply,
      },
    ],
  },
  {
    title: "Quick Fixes",
    tools: [
      {
        name: "Make Message Clearer",
        href: "/make-message-clearer",
        description: "Turn confusing text into clear communication.",
        icon: MessageSquareText,
      },
      {
        name: "Make Message Confident",
        href: "/make-message-confident",
        description: "Sound more confident and direct.",
        icon: ShieldCheck,
      },
      {
        name: "Rewrite More Politely",
        href: "/rewrite-more-politely",
        description: "Make your message more respectful and calm.",
        icon: Handshake,
      },
      {
        name: "Shorten Message Tool",
        href: "/shorten-message-tool",
        description: "Trim long messages into shorter, cleaner versions.",
        icon: Scissors,
      },
    ],
  },
];

export const allTools: ToolWithCategory[] = toolCategories.flatMap((category) =>
  category.tools.map((tool) => ({
    ...tool,
    category: category.title,
  }))
);