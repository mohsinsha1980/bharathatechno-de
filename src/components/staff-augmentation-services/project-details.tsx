"use client";
import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { ProjectDetails } from "@/lib/types";

type Props = {
  defaultValues: ProjectDetails;
  onSubmit: (data: ProjectDetails) => void;
};

export default function ProjectDetailsForm({ defaultValues, onSubmit }: Props) {
  const [formData, setFormData] = useState<ProjectDetails>(defaultValues);

  const pullupVariant = {
    initial: { y: 5, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.5, duration: 0.8 } },
  };

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleChange = (field: keyof ProjectDetails, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <motion.div
      ref={ref}
      variants={pullupVariant}
      initial="initial"
      animate={isInView ? "animate" : ""}
      className="bl_contact_form"
    >
      <form onSubmit={handleSubmit} className="bl_form">
        <div className="row">
          <div className="item">
            <label>Tools and Platforms (Optional)</label>
            <input
              type="text"
              value={formData.toolsAndPlatforms || ""}
              onChange={(e) =>
                handleChange("toolsAndPlatforms", e.target.value)
              }
              placeholder="Tools and Platforms"
            />
          </div>
          <div className="item">
            <label>Required Domain Experience (Optional)</label>
            <input
              type="text"
              value={formData.requiredDomainExperience || ""}
              onChange={(e) =>
                handleChange("requiredDomainExperience", e.target.value)
              }
              placeholder="Required Domain Experience"
            />
          </div>
        </div>

        <div className="row">
          <div className="item">
            <label>Additional Notes (Optional)</label>
            <textarea
              value={formData.additionalNotes || ""}
              onChange={(e) => handleChange("additionalNotes", e.target.value)}
              placeholder="Additional Notes"
              rows={4}
              className="w-full"
            />
          </div>
          <div className="item"></div>
        </div>

        <div className="item m-auto mt-4">
          <button type="submit" className="border rounded-3xl px-8 py-2">
            Submit
          </button>
        </div>
      </form>
    </motion.div>
  );
}
