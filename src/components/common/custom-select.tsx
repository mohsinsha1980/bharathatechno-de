"use client";
import React, {
  useState,
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";

interface SelectOption {
  label: string;
  value: string;
}

interface CustomSelectProps {
  name: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  allowCustomValue?: boolean;
  otherOptionLabel?: string;
  className?: string;
  error?: boolean;
}

export interface CustomSelectRef {
  reset: () => void;
}

const CustomSelect = forwardRef<CustomSelectRef, CustomSelectProps>(
  (
    {
      name,
      placeholder,
      value,
      onChange,
      options,
      allowCustomValue = true,
      otherOptionLabel = "Other",
      className = "",
      error = false,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isCustomValue, setIsCustomValue] = useState(false);
    const [customValue, setCustomValue] = useState("");
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Expose reset method to parent component
    useImperativeHandle(ref, () => ({
      reset: () => {
        setIsCustomValue(false);
        setCustomValue("");
        setIsOpen(false);
      },
    }));

    // Close dropdown when clicking outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    // Reset internal state when parent clears the value
    useEffect(() => {
      if (!value) {
        setIsCustomValue(false);
        setCustomValue("");
        setIsOpen(false);
      }
    }, [value]);

    useEffect(() => {
      const isValueInOptions = options.some((option) => option.value === value);

      if (value && !isValueInOptions) {
        setIsCustomValue(true);
        setCustomValue(value);
      } else if (!value) {
        // ✅ When parent clears the value, reset everything
        setIsCustomValue(false);
        setCustomValue("");
        setIsOpen(false);
      }
    }, [value, options]);

    const handleOptionSelect = (optionValue: string) => {
      if (optionValue === "other") {
        setIsCustomValue(true);
        setCustomValue("");
        onChange("");
        setIsOpen(false);
      } else {
        setIsCustomValue(false);
        onChange(optionValue);
        setIsOpen(false);
      }
    };

    const handleCustomInputChange = (
      e: React.ChangeEvent<HTMLInputElement>
    ) => {
      const newValue = e.target.value;
      setCustomValue(newValue);
      onChange(newValue);
    };

    const handleCustomInputBlur = () => {
      if (!customValue.trim()) {
        setIsCustomValue(false);
        onChange("");
      }
    };

    const getDisplayValue = () => {
      if (isCustomValue) {
        return customValue;
      }
      const selectedOption = options.find((option) => option.value === value);
      return selectedOption ? selectedOption.label : "";
    };

    return (
      <div className={`custom-select-container ${className}`} ref={dropdownRef}>
        {!isCustomValue ? (
          <div className="custom-select-wrapper">
            <div
              className={`custom-select-trigger ${error ? "error" : ""}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className={getDisplayValue() ? "selected" : "placeholder"}>
                {getDisplayValue() || placeholder}
              </span>
              <span className={`custom-select-arrow ${isOpen ? "open" : ""}`}>
                ▼
              </span>
            </div>

            {isOpen && (
              <div className="custom-select-dropdown text-black">
                {options.map((option, index) => (
                  <div
                    key={`option-${index}-${option.value}`}
                    className={`custom-select-option ${
                      value === option.value ? "selected" : ""
                    }`}
                    onClick={() => handleOptionSelect(option.value)}
                  >
                    {option.label}
                  </div>
                ))}
                {allowCustomValue && (
                  <div
                    className="custom-select-option other-option"
                    onClick={() => handleOptionSelect("other")}
                  >
                    {otherOptionLabel}
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          <input
            type="text"
            name={name}
            placeholder="Enter your custom value"
            value={customValue}
            onChange={handleCustomInputChange}
            onBlur={handleCustomInputBlur}
            className={`custom-select-input ${error ? "error" : ""}`}
            autoComplete="off"
          />
        )}
      </div>
    );
  }
);

CustomSelect.displayName = "CustomSelect";

export default CustomSelect;
