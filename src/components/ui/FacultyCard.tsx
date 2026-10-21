import React from 'react';
import { FacultyMember } from '../../types';
import { Award, CheckCircle } from 'lucide-react';

interface FacultyCardProps {
  member: FacultyMember;
}

export const FacultyCard: React.FC<FacultyCardProps> = ({ member }) => {
  return (
    <article className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#0E1624] border border-[#1E293B] hover:border-[#334155] transition-all duration-300 hover:-translate-y-1">
      {/* Mentor Graphic / Avatar */}
      <div className="relative mb-5 w-32 h-32 rounded-2xl overflow-hidden border border-[#1E293B] bg-[#070C14] flex items-center justify-center p-2">
        <img
          src={member.avatarSvg}
          alt={member.role}
          className="w-full h-full object-contain"
          loading="lazy"
          width="240"
          height="240"
        />
        <div className="absolute top-2 right-2">
          <Award className="w-5 h-5 text-[#00E5C8]" />
        </div>
      </div>

      {/* Credential Badge */}
      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00E5C8] bg-[#00E5C8]/10 border border-[#00E5C8]/30 px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
        <CheckCircle className="w-3.5 h-3.5" />
        {member.credentials}
      </span>

      <h3 className="text-lg font-bold text-[#F8FAFC] mb-1">
        {member.role}
      </h3>

      <p className="text-xs font-semibold text-[#38BDF8] mb-3">
        {member.subject}
      </p>

      <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
        {member.bio}
      </p>

      <div className="mt-auto pt-3 border-t border-[#1E293B] w-full text-[11px] text-[#CBD5E1] font-medium flex items-center justify-between">
        <span>Experience:</span>
        <span className="text-[#00E5C8] font-bold">{member.experience}</span>
      </div>
    </article>
  );
};

