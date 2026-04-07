// File: src/pages/AskForPaymentProfessionally.tsx
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroTool from "@/components/HeroTool";
import Footer from "@/components/Footer";
import RelatedTools from "@/components/RelatedTools";

import {
  ArrowRight,
  BadgeDollarSign,
  CheckCircle2,
  FileText,
  HelpCircle,
  Receipt,
  RefreshCcw,
  Shield,
  Wallet,
  WalletCards,
} from "lucide-react";

export default function AskForPaymentProfessionally() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

     <Helmet>
  <title>Ask for Payment Professionally | Say It Better</title>
  <meta
    name="description"
    content="Write a professional payment request message that is clear, firm, and respectful. Perfect for invoices, reminders, and client communication."
  />
</Helmet>

      <HeroTool
        title="Ask for Payment Professionally"
        subtitle="Write payment reminders that sound firm, respectful, and professional."
        placeholder="Paste your payment reminder or describe what needs to be paid."
        defaultTone="Professional"
      />

      <section className="pb-12">
  <div className="container max-w-4xl space-y-6">
    <div className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8">
      
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">
          When to use this tool
        </h2>

        <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
          Use this tool when your message feels unclear, messy, or difficult to understand.
          It helps improve clarity so your message is easier to follow and makes sense quickly.
        </p>
      </div>

      <div className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold tracking-tight">
          What this tool helps with
        </h2>

        <ul className="space-y-2 text-sm text-muted-foreground md:text-base">
          <li>• rewriting unclear messages</li>
          <li>• improving clarity and structure</li>
          <li>• simplifying wording</li>
          <li>• making messages easier to understand</li>
        </ul>
      </div>

    </div>
  </div>
</section>

      <section className="pb-16">
        <div className="container max-w-5xl space-y-8">

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-5">
              <BadgeDollarSign size={20} />
              <h2 className="mt-3 font-semibold">What it does</h2>
              <p className="text-sm text-muted-foreground mt-2">
                Makes payment requests sound more professional and easier to send.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5">
              <Receipt size={20} />
              <h2 className="mt-3 font-semibold">Best for</h2>
              <p className="text-sm text-muted-foreground mt-2">
                Invoices, overdue balances, and payment follow-ups.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5">
              <Shield size={20} />
              <h2 className="mt-3 font-semibold">Why it helps</h2>
              <p className="text-sm text-muted-foreground mt-2">
                Helps you stay firm without sounding rude.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6">
            <h2 className="text-xl font-semibold">Before & after</h2>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-muted/50 p-4 rounded-xl">
                <p className="text-sm">Just reminding you that you still owe me.</p>
              </div>

              <div className="bg-primary/5 p-4 rounded-xl">
                <p className="text-sm">
                  I wanted to follow up regarding the outstanding payment. Please let me know if you need anything.
                </p>
              </div>
            </div>
          </div>

          <details className="border border-border rounded-xl p-4">
            <summary className="font-semibold">Learn more</summary>
            <p className="text-sm text-muted-foreground mt-2">
              Helps you send payment reminders clearly and professionally.
            </p>
          </details>

        </div>
      </section>

      <RelatedTools currentHref="/ask-for-payment-professionally" />
      <Footer />
    </div>
  );
}