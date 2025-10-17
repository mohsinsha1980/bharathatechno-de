"use client";
import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { StaffingRequirements } from "@/lib/types";
import CustomSelect from "../common/custom-select";
import {
  DURATION_OPTIONS,
  EXPERIENCE_OPTIONS,
  ROLE_OPTIONS,
} from "@/lib/const";

// Error type
export type staffRequirementErrorType = {
  roles?: { invalid: boolean; message: string };
  numberOfResources?: { invalid: boolean; message: string };
  experienceLevel?: { invalid: boolean; message: string };
  skills?: { invalid: boolean; message: string };
  duration?: { invalid: boolean; message: string };
  availability?: { invalid: boolean; message: string };
  budget?: { invalid: boolean; message: string };
};

type Props = {
  defaultValues: StaffingRequirements;
  onNext: (data: StaffingRequirements) => void;
  onBack: () => void;
};

const initialErrorState: staffRequirementErrorType = {};

type RoleType = StaffingRequirements["roles"][number];

export default function StaffRequirementForm({
  defaultValues,
  onNext,
  onBack,
}: Props) {
  const [formData, setFormData] = useState<StaffingRequirements>(defaultValues);
  const [errors, setErrors] =
    useState<staffRequirementErrorType>(initialErrorState);

  const pullupVariant = {
    initial: { y: 5, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.5, duration: 0.8 } },
  };

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleChange = <K extends keyof StaffingRequirements>(
    field: K,
    value: StaffingRequirements[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    const validationErrors: staffRequirementErrorType = {};

    if (!formData.roles || formData.roles.length === 0) {
      validationErrors.roles = {
        invalid: true,
        message: "Wählen Sie mindestens eine Rolle aus",
      };
    }

    if (!formData.numberOfResources || formData.numberOfResources <= 0) {
      validationErrors.numberOfResources = {
        invalid: true,
        message: "Geben Sie die Anzahl der Ressourcen ein",
      };
    }

    if (!formData.experienceLevel) {
      validationErrors.experienceLevel = {
        invalid: true,
        message: "Wählen Sie die Erfahrungsstufe aus",
      };
    }

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onNext(formData);
    }
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
        {/* Roles Multi-select */}
        <div className="flex flex-col gap-2 mb-6">
          <span className="font-medium">Fachbereich: *</span>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-5 w-full">
            {ROLE_OPTIONS.map((role) => (
              <label
                key={role}
                className="inline-flex items-center space-x-2 cursor-pointer group select-none truncate"
              >
                <input
                  type="checkbox"
                  className="peer sr-only"
                  checked={formData.roles.includes(role as RoleType)}
                  onChange={(e) => {
                    const updatedRoles = e.target.checked
                      ? [...formData.roles, role as RoleType]
                      : formData.roles.filter((r) => r !== role);
                    handleChange("roles", updatedRoles);
                  }}
                  aria-label={role}
                />

                <span
                  className="inline-flex h-5 w-5 items-center justify-center rounded border border-gray-300 bg-white text-transparent
                  transition-colors duration-150 ease-out
                  peer-checked:bg-blue-600 peer-checked:text-white
                  group-hover:border-gray-400 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-blue-400"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>

                <span className="text-sm truncate">{role}</span>
              </label>
            ))}
          </div>

          {errors.roles && (
            <div className="text-red-500 text-sm mt-1">
              {errors.roles.message}
            </div>
          )}
        </div>

        {/* Number of resources */}
        <div className="row mb-2">
          <div className="item">
            <input
              type="text"
              value={formData.numberOfResources}
              onChange={(e) =>
                handleChange("numberOfResources", Number(e.target.value))
              }
              className={`${errors.numberOfResources ? "inputError" : " "}`}
              placeholder="Anzahl an Entwickler *"
            />
            {errors.numberOfResources && (
              <div className="formError">
                {errors.numberOfResources.message}
              </div>
            )}
          </div>

          {/* Experience Level */}
          <div className="item">
            <CustomSelect
              name="experienceLevel"
              placeholder="Erfahrung *"
              value={formData.experienceLevel || ""}
              onChange={(v) =>
                handleChange(
                  "experienceLevel",
                  v as StaffingRequirements["experienceLevel"]
                )
              }
              options={EXPERIENCE_OPTIONS}
              allowCustomValue={false}
              className={errors.experienceLevel ? "error" : ""}
              error={Boolean(errors.experienceLevel)}
            />
            {errors.experienceLevel && (
              <div className="formError">{errors.experienceLevel.message}</div>
            )}
          </div>
        </div>

        {/* Skills */}
        <div className="row  mb-2">
          <div className="item">
            <input
              type="text"
              value={formData?.skills || ""}
              onChange={(e) => handleChange("skills", e.target.value)}
              className={`${errors.skills ? "inputError" : ""}`}
              placeholder="Kompetenzen"
            />

            {errors.skills && (
              <div className="formError">{errors.skills.message}</div>
            )}
          </div>

          {/* Duration */}
          <div className="item">
            <CustomSelect
              name="duration"
              placeholder="Einsatzdauer"
              value={formData.duration || ""}
              onChange={(v) =>
                handleChange("duration", v as StaffingRequirements["duration"])
              }
              options={DURATION_OPTIONS}
              allowCustomValue={false}
              className={errors.duration ? "error" : ""}
              error={Boolean(errors.duration)}
            />
            {errors.duration && (
              <div className="formError">{errors.duration.message}</div>
            )}
          </div>
        </div>

        {/* Availability */}
        

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
            Next
          </button>
        </div>
      </form>
    </motion.div>
  );
}
