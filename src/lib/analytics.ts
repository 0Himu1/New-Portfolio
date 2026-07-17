"use client";

import posthog from "posthog-js";

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY ?? "phc_kMHBCtcoCX2C9g8xhFoeenEYfZHC9V9N92jay6CSMhbw";
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";

type AnalyticsProperties = Record<string, string | number | boolean | null | undefined>;

export function initPostHog() {
  if (typeof window === "undefined" || !POSTHOG_KEY || posthog.__loaded) {
    return;
  }

  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    defaults: "2026-05-30",
    person_profiles: "identified_only",
    capture_pageview: "history_change",
    capture_pageleave: true,
    mask_all_text: true
  });
}

export function capturePortfolioEvent(eventName: string, properties: AnalyticsProperties = {}) {
  if (typeof window === "undefined" || !posthog.__loaded) {
    return;
  }

  posthog.capture(eventName, {
    page_path: window.location.pathname,
    page_hash: window.location.hash || null,
    ...properties
  });
}
