"use client";
import React, { useState, useEffect, useRef } from "react";
import { contactFormType, formErrorType } from "@/lib/types";
import { emailRegEx, phoneRegex } from "@/lib/helper";
import { useReCaptcha } from "next-recaptcha-v3";
import LoadingSpinner from "../common/loading-spinner";
import { useInView, motion } from "framer-motion";
import CustomSelect from "../common/custom-select";
import { CONTACT_SERVICES } from "@/lib/services";
import CalendlyScheduler from "../common/calendly";

const initialValue: contactFormType = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  picture: "",
  file: undefined,
};

const initialErrorState: formErrorType = {
  name: {
    invalid: false,
    message: "",
  },
  email: {
    invalid: false,
    message: "",
  },
  phone: {
    invalid: false,
    message: "",
  },
  subject: {
    invalid: false,
    message: "",
  },
  picture: {
    invalid: false,
    message: "",
  },
  file: {
    invalid: false,
    message: "",
  },
  message: {
    invalid: false,
    message: "",
  },
};

export default function ContactForm() {
  const { executeRecaptcha } = useReCaptcha();
  const [contact, setContact] = useState<contactFormType>(initialValue);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [formErrors, setFormErrors] =
    useState<formErrorType>(initialErrorState);
  const [httpError, setHttpError] = useState<string>("");
  const [hasErrors, setHasErrors] = useState<boolean>(false);
  const [openBookCall, setOpenBookCall] = useState(false);

  const inputChangeHandler = (e: React.FormEvent<HTMLInputElement>): void => {
    const { name, value, files } = e.currentTarget;

    if (name === "picture" && files && files.length > 0) {
      setContact((prev) => ({ ...prev, picture: files[0] }));
    } else if (name === "file" && files && files.length > 0) {
      setContact((prev) => ({ ...prev, file: files[0] }));
    } else {
      setContact((prev) => ({ ...prev, [name]: value }));
    }
  };

  const selectChangeHandler = (value: string): void => {
    const selectedOption = CONTACT_SERVICES.find(
      (option) => option.value === value
    );
    const displayValue = selectedOption ? selectedOption.label : value;
    setContact((prev) => ({ ...prev, subject: displayValue }));
  };

  const textareaChangeHandler = (
    e: React.FormEvent<HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.currentTarget;
    setContact((currState) => {
      return {
        ...currState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setFormErrors(() => validateForm(contact));
    setIsSubmitted(true);
  };

  const validateForm = (formData: contactFormType) => {
    const errors = { ...initialErrorState };

    if (formData.name.trim() === "") {
      errors.name = { invalid: true, message: "Vor&Nachname ist erforderlich" };
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
      errors.phone = { invalid: true, message: "Telefonnummer ist erforderlich" };
    }

    if (formData?.message.trim() === "") {
      errors.message = { invalid: true, message: "Deine Naehrichtaums ist erforderlich." };
    }

    if (
      formData.phone.trim() !== "" &&
      (!phoneRegex.test(formData.phone.trim()) ||
        formData.phone.startsWith("+1231234567890"))
    ) {
      errors.phone = {
        invalid: true,
        message: "Invalid Telefonnummer (+1231234567890)",
      };
    }

    if (formData.phone.trim().length > 13) {
      errors.phone = {
        invalid: true,
        message: "Telefonnummer Die Nummer darf nicht länger als 13 Ziffern sein",
      };
    }

    if (formData.subject.trim() === "") {
      errors.subject = { invalid: true, message: "Betreff ist erforderlich" };
    }

    if (formData.picture instanceof File) {
      if (!formData.picture.type.startsWith("image/")) {
        errors.picture = {
          invalid: true,
          message: "Es sind nur Bilddateien zulässig",
        };
      } else if (formData.picture.size > 5 * 1024 * 1024) {
        errors.picture = {
          invalid: true,
          message: "Das Bild muss kleiner als 5 MB sein",
        };
      }
    }

    // --- Document (only PDFs) ---
    if (formData.file instanceof File) {
      if (formData.file.type !== "application/pdf") {
        errors.file = {
          invalid: true,
          message: "Es sind nur PDF-Dateien zulässig",
        };
      } else if (formData.file.size > 10 * 1024 * 1024) {
        errors.file = { invalid: true, message: "PDF must be under 10MB" };
      }
    }

    let validationErrors = false;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Object.entries(errors).forEach(([key, value]) => {
      if (value.invalid) {
        validationErrors = true;
      }
    });

    if (validationErrors) {
      setHasErrors(true);
    } else {
      setHasErrors(false);
    }
    return errors;
  };

  useEffect(() => {
    const controller = new AbortController();

    const sendMessageHandler = async () => {
      try {
        if (isSubmitted) {
          if (hasErrors) {
            setIsSubmitted(false);
          } else {
            const token = await executeRecaptcha("form_submit");

            // Create FormData for file uploads
            const formData = new FormData();
            formData.append("name", contact.name);
            formData.append("email", contact.email);
            formData.append("phone", contact.phone);
            formData.append("subject", contact.subject);
            formData.append("message", contact.message || "");
            formData.append("token", token);

            // Add files if they exist
            if (contact.picture instanceof File) {
              formData.append("picture", contact.picture);
            }
            if (contact.file instanceof File) {
              formData.append("file", contact.file);
            }

            const res = await fetch("/api/send-enquiry", {
              method: "POST",
              body: formData, // Don't set Content-Type header, let browser set it with boundary
            });

            const response = await res.json();

            // Check if the request was successful
            if (res.ok && response.status === 200) {
              // Success - reset form and show success message
              setHttpError(
                "Form submitted successfully! We'll get back to you soon."
              );
              setContact(initialValue);
              setFormErrors(initialErrorState);

              // Reset file inputs
              if (pictureInputRef.current) {
                pictureInputRef.current.value = "";
              }
              if (fileInputRef.current) {
                fileInputRef.current.value = "";
              }

              // Clear success message after 5 seconds
              setTimeout(() => {
                setHttpError("");
              }, 5000);
            } else {
              // Error - show error message
              setHttpError(
                response.message || "Something went wrong. Please try again."
              );
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
  }, [isSubmitted, hasErrors, contact, executeRecaptcha]);

  const pullupVariant = {
    initial: { y: 5, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 1,
        duration: 1,
      },
    },
  };

  const fadeVariant = {
    initial: { y: 10, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 1.5,
        duration: 1,
      },
    },
  };

  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const pictureInputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });
  return (
    <>
      {isSubmitted && <LoadingSpinner />}
      <section className="bl_contact_form">
        <div className="container container-small my-[100px]">
          <motion.h2
            ref={ref2}
            variants={pullupVariant}
            initial="initial"
            animate={isInView2 ? "animate" : ""}
            className="mb-[80px]"
          >
            „Jede großartige Lösung beginnt mit einem simplen Gespräch“
          </motion.h2>

          <motion.div
            ref={ref3}
            variants={fadeVariant}
            initial="initial"
            animate={isInView3 ? "animate" : ""}
          >
            <form autoComplete="off" onSubmit={handleSubmit}>
              <div className="bl_form">
                {httpError ? (
                  <p
                    className={`mb-4 ${
                      hasErrors ? "text-red-600" : "text-green-600"
                    }`}
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      textAlign: "center",
                    }}
                  >
                    {httpError}
                  </p>
                ) : null}

                <div className="row">
                  <div className="item">
                    <input
                      type="text"
                      name="name"
                      placeholder="Vor&Nachname"
                      value={contact.name}
                      onChange={inputChangeHandler}
                      className={formErrors.name.invalid ? "inputError" : ""}
                      autoComplete="off"
                    />
                    {formErrors.name.invalid && (
                      <div className="formError">{formErrors.name.message}</div>
                    )}
                  </div>
                  <div className="item">
                    <input
                      type="email"
                      name="email"
                      placeholder="E-Mail"
                      value={contact.email}
                      onChange={inputChangeHandler}
                      className={formErrors.email.invalid ? "inputError" : ""}
                      autoComplete="off"
                    />
                    {formErrors.email.invalid && (
                      <div className="formError">
                        {formErrors.email.message}
                      </div>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="item">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Telefonnummer"
                      value={contact.phone}
                      onChange={inputChangeHandler}
                      className={formErrors.phone.invalid ? "inputError" : ""}
                      autoComplete="off"
                    />
                    {formErrors.phone.invalid && (
                      <div className="formError">
                        {formErrors.phone.message}
                      </div>
                    )}
                  </div>
                  <div className="item">
                    <CustomSelect
                      name="subject"
                      placeholder="Wählen Sie einen Dienst oder „Andere“ aus."
                      value={contact.subject}
                      onChange={selectChangeHandler}
                      options={CONTACT_SERVICES}
                      allowCustomValue={true}
                      otherOptionLabel="Other (Please specify)"
                      className={formErrors.subject.invalid ? "error" : ""}
                      error={formErrors.subject.invalid}
                    />
                    {formErrors.subject.invalid && (
                      <div className="formError">
                        {formErrors.subject.message}
                      </div>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="item">
                    <label
                      htmlFor="picture"
                      style={{
                        display: "block",
                        marginBottom: "8px",
                        fontWeight: "500",
                        fontSize: 14,
                        color: "#666",
                      }}
                    >
                      Bild hochladen
                    </label>
                    <input
                      type="file"
                      id="picture"
                      name="picture"
                      accept="image/*"
                      ref={pictureInputRef}
                      onChange={inputChangeHandler}
                      className={
                        formErrors.picture?.invalid ? "inputError" : ""
                      }
                    />
                    {contact.picture instanceof File && (
                      <div
                        style={{
                          marginTop: "8px",
                          fontSize: "12px",
                          color: "#666",
                        }}
                      >
                        Selected: {contact.picture.name} (
                        {(contact.picture.size / 1024 / 1024).toFixed(2)} MB)
                      </div>
                    )}
                    {formErrors.picture?.invalid && (
                      <div className="formError">
                        {formErrors.picture.message}
                      </div>
                    )}
                  </div>
                  <div className="item">
                    <label
                      htmlFor="file"
                      style={{
                        display: "block",
                        marginBottom: "8px",
                        fontWeight: "500",
                        fontSize: 14,
                        color: "#666",
                      }}
                    >
                      Laden Sie ein PDF-Dokument hoch
                    </label>
                    <input
                      type="file"
                      id="file"
                      name="file"
                      accept="application/pdf"
                      ref={fileInputRef}
                      onChange={inputChangeHandler}
                      className={formErrors.file?.invalid ? "inputError" : ""}
                    />
                    {contact.file instanceof File && (
                      <div
                        style={{
                          marginTop: "8px",
                          fontSize: "14px",
                          color: "#666",
                        }}
                      >
                        Selected: {contact.file.name} (
                        {(contact.file.size / 1024 / 1024).toFixed(2)} MB)
                      </div>
                    )}
                    {formErrors.file?.invalid && (
                      <div className="formError">{formErrors.file.message}</div>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="item full">
                    <textarea
                      cols={10}
                      rows={5}
                      name="message"
                      placeholder="Deine Naehrichtaums"
                      value={contact.message}
                      onChange={textareaChangeHandler}
                      autoComplete="off"
                    ></textarea>
                    {formErrors.message?.invalid && (
                      <div className="formError">
                        {formErrors.message.message}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row  gap-4 justify-end mb-4">
                  <div className="item">
                    <button
                      type="button"
                      onClick={() => setOpenBookCall(true)}
                      className="border rounded-4xl px-8 py-2 mr-3"
                    >
                      Book an Appointment
                    </button>
                  </div>
                  <div className="item text-center">
                    <button
                      type="submit"
                      className="border rounded-3xl px-8 py-2"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </motion.div>
          {openBookCall && (
            <CalendlyScheduler onClose={() => setOpenBookCall(false)} />
          )}
        </div>
      </section>
    </>
  );
}
