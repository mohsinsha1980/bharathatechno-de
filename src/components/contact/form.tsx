"use client";
import React, { useState, useEffect, useRef } from "react";
import { contactFormType, formErrorType } from "@/lib/types";
import { emailRegEx, phoneRegex } from "@/lib/helper";
import { useReCaptcha } from "next-recaptcha-v3";
import LoadingSpinner from "../common/loading-spinner";
import { useInView, motion } from "framer-motion";

const initialValue: contactFormType = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
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
};

export default function ContactForm() {
  const { executeRecaptcha } = useReCaptcha();
  const [contact, setContact] = useState<contactFormType>(initialValue);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [formErrors, setFormErrors] =
    useState<formErrorType>(initialErrorState);
  const [httpError, setHttpError] = useState<string>("");
  const [hasErrors, setHasErrors] = useState<boolean>(false);

  const inputChangeHandler = (e: React.FormEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;
    setContact((currState) => {
      return {
        ...currState,
        [name]: value,
      };
    });
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
      errors.name = { invalid: true, message: "Name is required" };
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

    if (formData.subject.trim() === "") {
      errors.subject = { invalid: true, message: "Subject is required" };
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
            const updatedContact = {
              ...contact,
              token,
            };
            const res = await fetch("/api/send-enquiry", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updatedContact),
            });

            const response = await res.json();
            if (response.response && response.responseCode) {
              setHttpError(response.message);
            } else if (response && response.message) {
              setHttpError(response.message);
            } else {
              setHttpError("");
              setContact(initialValue);
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
            &ldquo;Jede großartige Lösung beginnt mit einem simplen Gespräch&rdquo;
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
                    className="mb-4"
                    style={{
                      fontSize: 14,
                      color: "green",
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
                    <input
                      type="text"
                      name="subject"
                      placeholder="What is in your mind?"
                      value={contact.subject}
                      onChange={inputChangeHandler}
                      className={formErrors.subject.invalid ? "inputError" : ""}
                      autoComplete="off"
                    />
                    {formErrors.subject.invalid && (
                      <div className="formError">
                        {formErrors.subject.message}
                      </div>
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
                  </div>
                </div>
                <div className="row">
                  <div className="item">&nbsp;</div>
                  <div className="item text-left">
                    <button type="submit">Submit</button>
                  </div>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
