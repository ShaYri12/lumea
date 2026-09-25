"use client";

import { motion } from "motion/react";
import { Sparkles, Wind, Flower } from "lucide-react";
import { Button } from "./ui/button";

export function ExampleComponent() {
  return (
    <div className="space-y-8 p-8">
      {/* Motion Example */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-2xl font-light tracking-wide">
          Motion Animation Example
        </h2>
      </motion.div>

      {/* Lucide Icons Example */}
      <div className="flex justify-center gap-6">
        <Sparkles className="w-6 h-6 text-neutral-600" />
        <Wind className="w-6 h-6 text-neutral-600" />
        <Flower className="w-6 h-6 text-neutral-600" />
      </div>

      {/* Button Component Example */}
      <div className="flex flex-wrap justify-center gap-4">
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="ghost">Ghost Button</Button>
      </div>
    </div>
  );
}
