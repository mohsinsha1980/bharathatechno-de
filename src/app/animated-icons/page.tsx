"use client";
import BharathaIconAnimatedLg from "@/components/common/animated-icons/bharatha-icon-lg";
import BharathaIconAnimatedMd from "@/components/common/animated-icons/bharatha-icon-md";
import BharathaIconAnimatedSm from "@/components/common/animated-icons/bharatha-icon-sm";
import BharathaIconAnimatedXs from "@/components/common/animated-icons/bharatha-icon-xs";

export default function AnimatedIcons() {
  return (
    <div className="flex justify-center items-center w-full gap-12 h-full">
      <BharathaIconAnimatedLg />
      <BharathaIconAnimatedMd />
      <BharathaIconAnimatedSm />
      <BharathaIconAnimatedXs />
    </div>
  );
}
