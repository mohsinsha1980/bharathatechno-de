"use client";
import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { ProjectDetails } from "@/lib/types";
import CustomSelect from "../common/custom-select";
import { AVAILABILITY_OPTIONS } from "@/lib/const";

export type projectDetailsErrorType = {
  availability: { invalid: boolean; message: string };
  budget?: { invalid: boolean; message: string };
  toolsAndPlatforms?: { invalid: boolean; message: string };
  requiredDomainExperience?: { invalid: boolean; message: string };
  additionalNotes?: { invalid: boolean; message: string };
};

const initialErrorState: projectDetailsErrorType = {
  availability: { invalid: false, message: "" },
};

type Props = {
  defaultValues: ProjectDetails;
  onSubmit: (data: ProjectDetails) => void;
  onBack: () => void;
};

export default function ProjectDetailsForm({
  defaultValues,
  onSubmit,
  onBack,
}: Props) {
  const [formData, setFormData] = useState<ProjectDetails>(defaultValues);
  const [errors, setErrors] =
    useState<projectDetailsErrorType>(initialErrorState);

  const pullupVariant = {
    initial: { y: 5, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.5, duration: 0.8 } },
  };

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleChange = (
    field: keyof ProjectDetails,
    value: ProjectDetails[keyof ProjectDetails]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    validateForm();
    onSubmit(formData);
  };

  const validateForm = () => {
    const validationErrors: projectDetailsErrorType = {
      availability: {
        invalid: false,
        message: "",
      },
    };

    if (!formData.availability || formData.availability.length === 0) {
      validationErrors.availability = {
        invalid: true,
        message: "Select at least one role",
      };
    }

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };
  console.log(errors);
  return (
    <motion.div
      ref={ref}
      variants={pullupVariant}
      initial="initial"
      animate={isInView ? "animate" : ""}
      className="bl_contact_form"
    >
      <form onSubmit={handleSubmit} className="bl_form">
        <div className="row mb-2">
          <div className="item">
            <CustomSelect
              name="availability"
              placeholder="Verfügbarkeit *"
              value={formData.availability || ""}
              onChange={(v) =>
                handleChange(
                  "availability",
                  v as ProjectDetails["availability"]
                )
              }
              options={AVAILABILITY_OPTIONS}
              allowCustomValue={false}
              className={errors.availability.invalid ? "error" : ""}
            />
            {errors.availability && (
              <div className="formError">{errors.availability.message}</div>
            )}
          </div>
          <div className="item">
            <input
              type="text"
              value={formData.budget || ""}
              onChange={(e) => handleChange("budget", e.target.value)}
              placeholder="Budget"
            />
          </div>
        </div>
        <div className="row mb-2">
          <div className="item">
            <input
              type="text"
              value={formData.toolsAndPlatforms || ""}
              onChange={(e) =>
                handleChange("toolsAndPlatforms", e.target.value)
              }
              placeholder="Tools and Plattformen"
            />
          </div>
          <div className="item">
            <input
              type="text"
              value={formData.requiredDomainExperience || ""}
              onChange={(e) =>
                handleChange("requiredDomainExperience", e.target.value)
              }
              placeholder="Gewünschte Branchenerfahrung "
            />
          </div>
        </div>

        <div className="row mb-2">
          <div className="item full">
            <textarea
              value={formData.additionalNotes || ""}
              onChange={(e) => {
                e.target.style.height = "auto";
                e.target.style.height = e.target.scrollHeight + "px";
                handleChange("additionalNotes", e.target.value);
              }}
              placeholder="Sonstiges"
              rows={1}
              className="w-full resize"
            />
          </div>
        </div>

        <div className="item m-auto mt-4">
          <button
            type="button"
            onClick={onBack}
            className="border rounded-3xl px-8 py-2 text-lg mb-4 mr-4"
          >
            Back
          </button>
          <button
            type="submit"
            className="border rounded-3xl px-8 py-2 text-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </motion.div>
  );
}
