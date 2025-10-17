"use client";
import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { CompanyInfo } from "@/lib/types";

export type companyInfoErrorType = {
  fullName: { invalid: boolean; message: string };
  companyName?: { invalid: boolean; message: string };
  email: { invalid: boolean; message: string };
  phone: { invalid: boolean; message: string };
  website: { invalid: boolean; message: string };
  address: { invalid: boolean; message: string };
};

type CompanyProps = {
  defaultValues: CompanyInfo;
  onNext: (data: CompanyInfo) => void;
};

const initialErrorState: companyInfoErrorType = {
  fullName: { invalid: false, message: "" },
  companyName: { invalid: false, message: "" },
  email: { invalid: false, message: "" },
  phone: { invalid: false, message: "" },
  website: { invalid: false, message: "" },
  address: { invalid: false, message: "" },
};

const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9+()-\s]*$/;

export default function CompanyInfoForm({
  defaultValues,
  onNext,
}: CompanyProps) {
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>(defaultValues);
  const [errors, setErrors] = useState<companyInfoErrorType>(initialErrorState);

  const inputChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setCompanyInfo((prev) => ({ ...prev, [name]: value }));
  };

  const validateField = (formData: CompanyInfo) => {
    const errors = { ...initialErrorState };

    if (formData.fullName.trim() === "") {
      errors.fullName = { invalid: true, message: "Name is required" };
    }

    if (formData.email.trim() === "") {
      errors.email = { invalid: true, message: "Email is required" };
    }

    if (
      formData.email.trim() !== "" &&
      !emailRegEx.test(formData.email.trim())
    ) {
      errors.email = { invalid: true, message: "Invalid email" };
    }

    if (formData.phone.trim() === "") {
      errors.phone = { invalid: true, message: "Phone is required" };
    }

    if (
      formData.phone.trim() !== "" &&
      (!phoneRegex.test(formData.phone.trim()) ||
        formData.phone.startsWith("+1231234567890"))
    ) {
      errors.phone = {
        invalid: true,
        message: "Invalid phone (+1231234567890)",
      };
    }

    if (formData.phone.trim().length > 13) {
      errors.phone = {
        invalid: true,
        message: "Phone number cannot exceed 13 digits",
      };
    }

    return errors;
  };

  const pullupVariant = {
    initial: { y: 5, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.5, duration: 0.8 } },
  };

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const validationErrors = validateField(companyInfo);
    setErrors(validationErrors);

    const formHasErrors = Object.values(validationErrors).some(
      (err) => err.invalid
    );

    if (!formHasErrors) {
      onNext(companyInfo);
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
      <form onSubmit={handleSubmit}>
        <div className="bl_form">
          <div className="row">
            <div className="item">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name *"
                value={companyInfo.fullName}
                onChange={inputChangeHandler}
                className={errors.fullName.invalid ? "inputError" : ""}
              />
              {errors.fullName.invalid && (
                <div className="formError">{errors.fullName.message}</div>
              )}
            </div>
            <div className="item">
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={companyInfo.companyName}
                onChange={inputChangeHandler}
                className={errors?.companyName?.invalid ? "inputError" : ""}
              />
              {errors?.companyName?.invalid && (
                <div className="formError">{errors.companyName.message}</div>
              )}
            </div>
          </div>

          <div className="row">
            <div className="item">
              <input
                type="email"
                name="email"
                placeholder="Company Email * "
                value={companyInfo.email}
                onChange={inputChangeHandler}
                className={errors.email.invalid ? "inputError" : ""}
              />
              {errors.email.invalid && (
                <div className="formError">{errors.email.message}</div>
              )}
            </div>
            <div className="item">
              <input
                type="tel"
                name="phone"
                placeholder="Company Phone*"
                value={companyInfo.phone}
                onChange={inputChangeHandler}
                className={errors.phone.invalid ? "inputError" : ""}
              />
              {errors.phone.invalid && (
                <div className="formError">{errors.phone.message}</div>
              )}
            </div>
          </div>

          <div className="row">
            <div className="item">
              <input
                type="text"
                name="website"
                placeholder="Company Website (Optional)"
                value={companyInfo.website}
                onChange={inputChangeHandler}
                className={errors.website.invalid ? "inputError" : ""}
              />
              {errors.website.invalid && (
                <div className="formError">{errors.website.message}</div>
              )}
            </div>
            <div className="item">
              <input
                type="text"
                name="address"
                placeholder="Company Address (Optional)"
                value={companyInfo.address}
                onChange={inputChangeHandler}
                className={errors.address.invalid ? "inputError" : ""}
              />
              {errors.address.invalid && (
                <div className="formError">{errors.address.message}</div>
              )}
            </div>
          </div>

          <div className="item m-auto">
            <button
              type="submit"
              className="border rounded-3xl px-8 py-2 text-lg"
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </motion.div>
  );
}
