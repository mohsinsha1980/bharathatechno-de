import React from "react";

export default function CaseStudyTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="my-[100px]">
      <div className="bl_case_study grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 gap-[80px] justify-center items-center">
        {children}
      </div>
    </div>
  );
}
