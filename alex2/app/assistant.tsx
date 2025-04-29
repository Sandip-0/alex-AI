"use client";

import { useState } from "react";
import { AssistantRuntimeProvider } from "@assistant-ui/react";
import { useChatRuntime } from "@assistant-ui/react-ai-sdk";
import { Thread } from "@/components/assistant-ui/thread";
import { ThreadList } from "@/components/assistant-ui/thread-list";
import { Menu } from "lucide-react"; // You can replace with any icon

export const Assistant = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const runtime = useChatRuntime({ api: "/api/chat" });

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <div className="relative h-dvh md:grid md:grid-cols-[200px_1fr] gap-2 px-4 py-4">
        {/* Hamburger Button */}
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="absolute left-4 top-4 z-20 block md:hidden"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-10 md:static md:translate-x-0 ${
            showSidebar ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ThreadList />
        </div>

        {/* Main Chat Thread */}
        <div className="h-full overflow-hidden">
          <Thread />
        </div>
      </div>
    </AssistantRuntimeProvider>
  );
};
