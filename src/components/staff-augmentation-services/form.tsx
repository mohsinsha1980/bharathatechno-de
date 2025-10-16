"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
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
    experienceLevel: "Select Option",
    skills: [],
    duration: "Select Option",
    availability: "Select Option",
    budget: "",
  },
  projectDetails: {
    toolsAndPlatforms: "",
    requiredDomainExperience: "",
    additionalNotes: "",
  },
};

const ProjectInquiryForm = () => {
  const { executeRecaptcha } = useReCaptcha();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<ProjectFormData>(defaultValues);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [httpError, setHttpError] = useState<string>("");

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
    setData((prev) => ({ ...prev, projectOverview: values }));
    setStep(2);
  };

  const handleTechnicalDetails = async (
    values: ProjectFormData["projectDetails"]
  ) => {
    setData((prev) => ({ ...prev, projectDetails: values }));
    await handleSubmit({ ...data, projectDetails: values });
    handleSubmit(data);
  };

  const handleSubmit = async (finalData: ProjectFormData) => {
    setData(finalData);
    setIsSubmitted(true);
  };

  useEffect(() => {
    const controller = new AbortController();

    const sendMessageHandler = async () => {
      try {
        if (isSubmitted) {
          if (httpError) {
            setIsSubmitted(false);
          } else {
            const token = await executeRecaptcha("form_submit");
            const updatedContact = {
              ...data,
              token,
            };
            const res = await fetch("/api/staff-augmentation", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updatedContact),
            });

            const response = await res.json();
            if (res.ok && response.status === 200) {
              setHttpError(
                "Form submitted successfully! We'll get back to you soon."
              );
            } else if (response && response.message) {
              setHttpError(response.message);
            } else {
              setHttpError("");
              setData(defaultValues);
            }
            setIsSubmitted(false);
          }
        }
      } catch (e: unknown) {
        const error =
          e instanceof Error ? e : new Error("Something went wrong!");
        setHttpError(error.message);
        setIsSubmitted(false);
      }
    };

    sendMessageHandler();

    return () => {
      controller.abort();
    };
  }, [isSubmitted, data, httpError, executeRecaptcha]);

  const canGoToStep = (target: number) => {
    if (target === 0) return true;
    if (target === 1) return !!data.companyInfo;
    if (target === 2) return !!data.staffRequire;
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
                    <Link
                      href="#"
                      className="no-underline text-inherit"
                      onClick={() =>
                        canGoToStep(i)
                          ? setStep(i)
                          : alert("Please complete previous steps first.")
                      }
                    >
                      {s.id + 1}
                    </Link>
                  ),
                };
              })}
              className="my-8"
            />
            {httpError ? (
              <p
                className="mb-4"
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: "blue",
                  textAlign: "center",
                }}
              >
                {httpError}
              </p>
            ) : null}
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
              />
            )}
            {step === 2 && (
              <ProjectDetailsForm
                onSubmit={handleTechnicalDetails}
                defaultValues={data.projectDetails}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectInquiryForm;
