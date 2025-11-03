import React from "react";
import { ContactInfoProps } from "./ContactInfo.types";
import { FaPhone, FaEnvelope, FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

export const ContactInfo: React.FC<ContactInfoProps> = ({ data }) => {
  return (
    <div className="w-full max-w-lg bg-white rounded-lg border border-gray-200 p-6 flex flex-col gap-6 shadow-sm">
      {/* Header */}
      <h3 className="text-[26px] font-weight-[700] font-semibold text-gray-900">Contact Info</h3>

      {/* Phone & Email */}
      <div className="flex flex-col gap-3 text-[20px] font-weight-[700]">
        <div className="flex items-center gap-3">
          <FaPhone className="text-blue-600 text-lg" />
          <span className="text-gray-700 font-medium">{data.phone}</span>
        </div>
        <div className="flex items-center gap-3">
          <FaEnvelope className="text-blue-600 text-lg" />
          <a
            href={`mailto:${data.email}`}
            className="text-gray-700 font-medium hover:text-blue-600"
          >
            {data.email}
          </a>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-3">
        {data.socialLinks.map((social, idx) => (
          <a
            key={idx}
            href={social.href}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-800 hover:bg-blue-400 hover:text-white transition"
          >
            {social.icon}
          </a>
        ))}
      </div>

      <hr className="border-gray-200" />

      {/* Office Locations */}
      <div className="flex flex-col gap-4 text-[20px] font-weight-[700]">
        {data.offices.map((office, idx) => (
          <div key={idx} className="flex flex-col gap-1">
            <h3 className="font-semibold text-gray-900">{office.title}</h3>
            <p className="text-gray-600 leading-snug text-[18px]">{office.address}</p>
          </div>
        ))}
      </div>

      <hr className="border-gray-200" />

      {/* Office Hours */}
      <div className="flex flex-col gap-1 text-[20px] font-weight-[700]">
        <h3 className="font-semibold text-gray-900">Our Office Hours</h3>
        {data.hours.map((hour, idx) => (
          <p key={idx} className="text-gray-600 text-[18px]">
            {hour.days}: {hour.time}
          </p>
        ))}
      </div>
    </div>
  );
};

