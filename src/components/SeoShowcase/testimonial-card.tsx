import React from "react";
import { RatingBadge } from "./rating-badge";
import { Testimonial } from "@/types/page";

export const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <aside className="bg-gradient-to-br h-[100%] from-[#0f1724] to-[#0b1220] relative rounded-tr-lg rounded-br-lg">
      <div className="opacity-95 px-6 py-8">
        <div className="flex items-start gap-3">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-16 h-16 rounded-md border-4 border-white/20 object-cover"
          />
          <div className="text-white">
            <div className="font-semibold text-sm">{testimonial.name}</div>
            <div className="text-xs text-white/80">{testimonial.role}</div>
          </div>
        </div>

        <div className="mt-6 text-white">
          <blockquote className="text-[17px] leading-relaxed font-medium">“{testimonial.quote}”</blockquote>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <RatingBadge rating={testimonial.rating} />
          <div className="text-xs text-white/60">From {testimonial.rating?.count ?? 0}+ reviews</div>
        </div>
      </div>
    </aside>
  );
};