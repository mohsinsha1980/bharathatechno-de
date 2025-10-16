"use client";
import { useState } from "react";
import Link from "next/link";
import CompanyInfoStep from "./company-info";
import { ProjectFormData } from "@/lib/types";
import ProgressStepper from "../common/progress-stepper";
import StaffRequirementForm from "./staffing-requirement";
import ProjectDetailsForm from "./project-details";

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
  const [step, setStep] = useState(0);
  const [data, setData] = useState<ProjectFormData>(defaultValues);

  const steps = [
    { label: "Company Info", id: 0 },
    { label: "Project Overview", id: 1 },
    { label: "Technical Details", id: 2 },
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
  };

  const handleSubmit = async (finalData: ProjectFormData) => {
    // try {
    console.log("final", finalData);
    //   dispatch(showLoader());
    //   await submitProjectForm(finalData);
    //   setIsSuccess(true);
    // } catch (e) {
    //   showErrorToast("Something went wrong. Please try again.");
    // } finally {
    //   dispatch(hideLoader());
    // }
  };

  const canGoToStep = (target: number) => {
    if (target === 0) return true;
    if (target === 1) return !!data.companyInfo;
    if (target === 2) return !!data.staffRequire;
    return false;
  };

  return (
    <section className="container my-[100px]">
      <div className="flex justify-center items-center mb-50">
        <div className="">
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
  );
};

export default ProjectInquiryForm;
