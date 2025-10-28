import { SeoShowcaseProps } from "@/types/page";
import React, { useState } from "react";
import { ServiceCard } from "./service-card";
import { TestimonialCard } from "./testimonial-card";

/**
 * SeoShowcase - a modular, data-driven, flexbox-based component
 * Props:
 *  - services: ServiceItem[]
 *  - testimonial: Testimonial
 *  - testimonialPosition: "left" | "right"
 */
export const SeoShowcase: React.FC<SeoShowcaseProps> = ({
  services,
  testimonial,
  testimonialPosition = "right",
}) => {
    const [overEle, setOverEle] = useState<number>(NaN);

  const isLeft = testimonialPosition === "left";

  const handleOver = (eleIndx:number) => {
    setOverEle(eleIndx)
  }

  const handleMouseLeave = () => {
    setOverEle(NaN)
  }
  return (
    <section className="relative rounded-xl"> {/* px-8 md:px-12 lg:px-20 py-10  */}
      <div className="flex w-[77rem] flex-row lg:flex-col gap-1 items-stretch border border-gray-200">
        <div>
            {/* Services container (flex wrap for responsive layout) */}
        <div className={`grid grid-cols-3 ${isLeft ? "order-2" : "order-1"}`}>
          {services.map((s, indx) => (
            <ServiceCard key={s.id} item={s} indx={indx} overEle={overEle} onOver={handleOver} onMouseLeave={handleMouseLeave} />
          ))}

        </div>
          {/* call to action and badges area to mimic screenshot */}
          <div className="w-full flex items-center gap-6 mt-4">
            
            <div className="flex justify-around gap-4">
                <a
                href="#"
                className="inline-block px-6 py-3 bg-black text-white rounded-lg shadow-md hover:opacity-95"
                >
                    Get Free Consultation
                </a>

              <div className="border rounded-md px-4 py-2 bg-white/70">Clutch ★★★★★</div>
              <div className="border rounded-md px-4 py-2 bg-white/70">Gartner ★★★★★</div>
            </div>
          </div>
        </div>

        {/* Testimonial card area */}
        <div className={`max-w-sm ${isLeft ? "order-1" : "order-2"}`}>
          <TestimonialCard testimonial={testimonial} />
        </div>
      </div>
    </section>
  );
};
