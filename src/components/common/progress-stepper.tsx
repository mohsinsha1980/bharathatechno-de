import React from "react";

interface ProgressSteps {
  icon: React.ReactNode;
  label: string;
  status: "completed" | "incomplete" | "in-progress";
}

export default function ProgressStepper({
  data,
  className,
}: {
  data: ProgressSteps[];
  className?: string;
}) {
  return (
    <nav aria-label="Progress" className={className ? className : undefined}>
      <ol className="flex items-center justify-center w-full p-3 space-x-5 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-xs dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 rtl:space-x-reverse">
        {data.map((step, idx) => {
          const isActive =
            step.status === "in-progress" || step.status === "completed";
          const liClass = isActive
            ? "flex items-center text-orange-500 dark:text-orange-500"
            : "flex items-center";
          const circleClass = isActive
            ? "flex items-center justify-center w-5 h-5 me-2 text-xs border border-orange-500 rounded-full shrink-0 dark:border-orange-500"
            : "flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400";

          return (
            <li key={step.label} className={liClass}>
              <span className={circleClass}>{idx + 1}</span>
              <span className="hidden md:block">{step.label}</span>
              {idx < data.length - 1 && (
                <svg
                  className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 12 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m7 9 4-4-4-4M1 9l4-4-4-4"
                  />
                </svg>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
