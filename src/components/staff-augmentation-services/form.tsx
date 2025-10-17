"use client";
import { useState } from "react";
import CompanyInfoStep from "./company-info";
import { ProjectFormData } from "@/lib/types";
import ProgressStepper from "../common/progress-stepper";
import StaffRequirementForm from "./staffing-requirement";
import ProjectDetailsForm from "./project-details";
import { useReCaptcha } from "next-recaptcha-v3";
import LoadingSpinner from "../common/loading-spinner";

const defaultValues: ProjectFormData = {
  companyInfo: {
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    website: "",
    address: "",
  },
  staffRequire: {
    roles: [],
    numberOfResources: 0,
    experienceLevel: undefined,
    skills: "",
    duration: undefined,
  },
  projectDetails: {
    availability: undefined,
    budget: "",
    toolsAndPlatforms: "",
    requiredDomainExperience: "",
    additionalNotes: "",
  },
};

export default function ProjectInquiryForm() {
  const { executeRecaptcha } = useReCaptcha();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<ProjectFormData>(defaultValues);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formMessage, setFormMessage] = useState<string>("");
  const [httpError, setHttpError] = useState<boolean>(false);

  const steps = [
    { label: "Unternehmen", id: 0 },
    { label: "Anforderungen", id: 1 },
    { label: "Einzelheiten", id: 2 },
  ];

  const handleCompanyInfo = (values: ProjectFormData["companyInfo"]) => {
    setData((prev) => ({ ...prev, companyInfo: values }));
    setStep(1);
  };

  const handleProjectOverview = (values: ProjectFormData["staffRequire"]) => {
    setData((prev) => ({ ...prev, staffRequire: values }));
    setStep(2);
  };

  const handleTechnicalDetails = async (
    values: ProjectFormData["projectDetails"]
  ) => {
    const finalData = { ...data, projectDetails: values };
    setData(finalData);
    await handleSubmit(finalData);
  };

  const handleSubmit = async (finalData: ProjectFormData) => {
    setIsSubmitted(true);
    try {
      const token = await executeRecaptcha("form_submit");
      const updatedContact = { ...finalData, token };

      const res = await fetch("/api/staff-augmentation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedContact),
      });

      const response = await res.json();
      if (res.ok && response.status === 200) {
        setFormMessage(
          "Formular erfolgreich abgeschickt! Wir melden uns in Kürze bei Ihnen."
        );
        setHttpError(true);
        setData(defaultValues);
      } else {
        
        setFormMessage(response?.message || "Übermittlung fehlgeschlagen. Versuchen Sie es erneut.");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setFormMessage(error.message);
      } else {
        setFormMessage("Etwas ist schief gelaufen.");
      }
    } finally {
      setIsSubmitted(false);
    }
  };

  const canGoToStep = (target: number) => {
    setFormMessage("");
    if (target === 0) return true;
    if (target === 1)
      return (
        !!data.companyInfo?.email &&
        !!data.companyInfo?.fullName &&
        !!data.companyInfo?.phone
      );
    if (target === 2) return !!data.staffRequire?.roles;
    return false;
  };

  return (
    <>
      {isSubmitted && <LoadingSpinner />}
      <section className="container my-[100px]">
        <div className="flex justify-center items-center mb-50">
          <div className="w-[90%] md:w-[600px] lg:w-[700px]">
            <h1 className="text-center text-3xl font-bold">
              Projektpersonalanfrage
            </h1>
            <p className="mt-2 text-center text-sm md:text-base text-white/70">
              Teilen Sie uns Ihre Teamanforderungen, Ihren Zeitplan und die
              erforderlichen Fähigkeiten mit. Wir bringen Sie mit geprüften
              Experten zusammen und melden uns in Kürze bei Ihnen.
            </p>

            <ProgressStepper
              data={steps.map((s, i) => {
                const status =
                  i < step
                    ? "completed"
                    : i === step
                    ? "in-progress"
                    : "incomplete";
                return {
                  label: s.label,
                  status,
                  icon: (
                    <button
                      className="no-underline text-inherit"
                      onClick={() =>
                        canGoToStep(i)
                          ? setStep(i)
                          : setFormMessage(
                              "Bitte vorherige Schritte abschließen."
                            )
                      }
                    >
                      {s.id + 1}
                    </button>
                  ),
                };
              })}
              className="my-8"
            />

            {formMessage && (
              <p
                className={`mb-4 text-center font-semibold  ${
                  httpError ? "text-red-600" : "text-green-600"
                }`}
                style={{ fontSize: 16 }}
              >
                {formMessage}
              </p>
            )}

            {step === 0 && (
              <CompanyInfoStep
                onNext={handleCompanyInfo}
                defaultValues={data.companyInfo}
              />
            )}
            {step === 1 && (
              <StaffRequirementForm
                onNext={handleProjectOverview}
                defaultValues={data.staffRequire}
                onBack={() => setStep(0)}
              />
            )}
            {step === 2 && (
              <ProjectDetailsForm
                onSubmit={handleTechnicalDetails}
                defaultValues={data.projectDetails}
                onBack={() => setStep(1)}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
