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
      <ol className="flex items-center gap-4 w-full">
        {data.map((step, idx) => {
          const isCompleted = step.status === "completed";
          const isCurrent = step.status === "in-progress";
          const circleBase =
            "inline-flex h-7 w-7 items-center justify-center rounded-full text-[13px] font-semibold";
          const circleClass = isCompleted
            ? `${circleBase} bg-black text-white border border-black`
            : isCurrent
            ? `${circleBase} bg-black text-white border border-black`
            : `${circleBase} bg-gray-300 text-gray-700 border border-gray-300`;
          const labelClass = isCurrent
            ? "ml-2 text-sm font-semibold underline"
            : isCompleted
            ? "ml-2 text-sm font-medium text-white"
            : "ml-2 text-sm text-gray-300";

          return (
            <li key={step.label} className="flex items-center min-w-0">
              <div className="flex items-center">
                <div
                  className={circleClass}
                  aria-current={isCurrent ? "step" : undefined}
                >
                  {step.icon ?? idx + 1}
                </div>
                <span className={labelClass}>{step.label}</span>
              </div>
              {/* Connector */}
              {idx < data.length - 1 && (
                <div
                  className="mx-4 h-px w-10 sm:w-16 bg-gray-300"
                  aria-hidden="true"
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
