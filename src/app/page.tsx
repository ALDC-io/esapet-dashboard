"use client";

import { useState } from "react";
import { Dashboard } from "@/components/dashboard/Dashboard";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { BarChart3, Sparkles } from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <div className="p-6">
        <Tabs className="w-full">
          <div className="flex items-center justify-between mb-6">
            {/* ESA Pet Logo */}
            <div className="flex items-center gap-3">
              <img
                src="/esapet-logo.svg"
                alt="ESA Pet"
                className="h-9"
              />
              <div className="h-6 w-px bg-border/70" />
              <p className="text-sm font-medium text-muted-foreground">
                Analytics Dashboard
              </p>
            </div>

            <TabsList className="grid grid-cols-2 max-w-md">
              <TabsTrigger
                value="dashboard"
                isActive={activeTab === "dashboard"}
                onClick={() => setActiveTab("dashboard")}
              >
                <BarChart3 className="h-4 w-4 mr-1.5" />
                Dashboard
              </TabsTrigger>
              <TabsTrigger
                value="insights"
                isActive={activeTab === "insights"}
                onClick={() => setActiveTab("insights")}
              >
                <Sparkles className="h-4 w-4 mr-1.5" />
                AI Insights
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="dashboard" isActive={activeTab === "dashboard"}>
            <Dashboard />
          </TabsContent>

          <TabsContent value="insights" isActive={activeTab === "insights"}>
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <Sparkles className="h-12 w-12 text-primary/30 mb-4" />
              <h2 className="text-lg font-semibold text-foreground">
                AI Insights — Coming Soon
              </h2>
              <p className="text-sm text-muted-foreground max-w-md mt-2">
                Eclipse-powered AI analysis of your marketing performance, funnel optimization,
                and customer acquisition. Ask questions in natural language about revenue trends,
                screening completion rates, and growth opportunities.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <div className="mt-auto border-t border-border/50 px-6 py-4">
        <div className="flex items-center justify-center gap-2">
          <span className="text-xs text-muted-foreground">Powered by</span>
          <img
            src="/aldc-icon.svg"
            alt="ALDC"
            className="h-5 w-5"
          />
          <span className="text-xs font-medium text-foreground">ALDC</span>
          <span className="text-xs text-muted-foreground">&middot; Analytic Labs Data Company</span>
        </div>
      </div>
    </main>
  );
}
