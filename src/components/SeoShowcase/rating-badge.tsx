import { Rating } from "@/types/page";
import React from "react";

export const Star = ({ filled }: { filled: boolean }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="1"
    className="inline-block"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 .587l3.668 7.431L23.6 9.75l-5.4 5.26L19.335 24 12 19.897 4.665 24l1.135-8.99L.4 9.75l7.932-1.732L12 .587z" />
  </svg>
);

export const RatingBadge: React.FC<{ rating?: Rating }> = ({ rating }) => {
  if (!rating) return null;
  const max = rating.max ?? 5;
  const filledCount = Math.round(rating.score);

  return (
    <div className="flex items-center gap-3 bg-white/6 backdrop-blur-sm px-3 py-2 rounded-lg w-max">
      <div className="flex items-center gap-1 text-yellow-400">
        {Array.from({ length: max }).map((_, i) => (
          <Star key={i} filled={i < filledCount} />
        ))}
      </div>
      <div className="text-sm text-white/90">
        <span className="font-semibold">{rating.score.toFixed(1)}</span>
        <span className="text-xs text-white/70"> ({rating.count ?? 0}+)</span>
      </div>
    </div>
  );
};