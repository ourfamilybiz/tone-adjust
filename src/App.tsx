// File: src/App.tsx

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import AllTools from "./pages/AllTools.tsx";
import Upgrade from "./pages/Upgrade.tsx";
import Auth from "./pages/Auth.tsx";
import Account from "./pages/Account.tsx";

import MakeMessageProfessional from "./pages/MakeMessageProfessional.tsx";
import ApologyMessageGenerator from "./pages/ApologyMessageGenerator.tsx";
import FixAwkwardText from "./pages/FixAwkwardText.tsx";
import MakeMessageConfident from "./pages/MakeMessageConfident.tsx";
import MakeMessageFriendlier from "./pages/MakeMessageFriendlier.tsx";
import ShortenMessageTool from "./pages/ShortenMessageTool.tsx";
import AskForPaymentProfessionally from "./pages/AskForPaymentProfessionally.tsx";
import CustomerResponseGenerator from "./pages/CustomerResponseGenerator.tsx";
import DeclineRequestPolitely from "./pages/DeclineRequestPolitely.tsx";
import FollowUpMessageGenerator from "./pages/FollowUpMessageGenerator.tsx";
import MakeMessageClearer from "./pages/MakeMessageClearer.tsx";
import ReplyToDifficultMessage from "./pages/ReplyToDifficultMessage.tsx";
import RescheduleMessageGenerator from "./pages/RescheduleMessageGenerator.tsx";
import RewriteMorePolitely from "./pages/RewriteMorePolitely.tsx";
import ThankYouMessageGenerator from "./pages/ThankYouMessageGenerator.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tools" element={<AllTools />} />
          <Route path="/upgrade" element={<Upgrade />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/account" element={<Account />} />

          <Route
            path="/make-message-professional"
            element={<MakeMessageProfessional />}
          />
          <Route
            path="/apology-message-generator"
            element={<ApologyMessageGenerator />}
          />
          <Route path="/fix-awkward-text" element={<FixAwkwardText />} />
          <Route
            path="/make-message-confident"
            element={<MakeMessageConfident />}
          />
          <Route
            path="/make-message-friendlier"
            element={<MakeMessageFriendlier />}
          />
          <Route
            path="/shorten-message-tool"
            element={<ShortenMessageTool />}
          />
          <Route
            path="/ask-for-payment-professionally"
            element={<AskForPaymentProfessionally />}
          />
          <Route
            path="/customer-response-generator"
            element={<CustomerResponseGenerator />}
          />
          <Route
            path="/decline-request-politely"
            element={<DeclineRequestPolitely />}
          />
          <Route
            path="/follow-up-message-generator"
            element={<FollowUpMessageGenerator />}
          />
          <Route
            path="/make-message-clearer"
            element={<MakeMessageClearer />}
          />
          <Route
            path="/reply-to-difficult-message"
            element={<ReplyToDifficultMessage />}
          />
          <Route
            path="/reschedule-message-generator"
            element={<RescheduleMessageGenerator />}
          />
          <Route
            path="/rewrite-more-politely"
            element={<RewriteMorePolitely />}
          />
          <Route
            path="/thank-you-message-generator"
            element={<ThankYouMessageGenerator />}
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;