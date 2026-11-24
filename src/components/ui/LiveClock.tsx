"use client";

import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

export function LiveClock() {
  const [timeString, setTimeString] = useState<string>("IST (UTC+5:30)");

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        });
        setTimeString(`${formatted} IST`);
      } catch {
        setTimeString("IST (UTC+5:30)");
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000 * 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[#94A3B8]">
      <Clock className="h-3 w-3 text-[#818CF8]" />
      <span>{timeString}</span>
    </span>
  );
}
