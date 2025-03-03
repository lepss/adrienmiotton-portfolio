import React from "react";

export const BorderContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`border border-neutral-800 divide-y divide-neutral-800 ${className}`}
    >
      {children}
    </div>
  );
};
