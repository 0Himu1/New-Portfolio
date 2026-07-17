"use client";

import { useEffect } from "react";
import { initPostHog } from "@/lib/analytics";

export function PostHogAnalytics() {
  useEffect(() => {
    initPostHog();
  }, []);

  return null;
}
