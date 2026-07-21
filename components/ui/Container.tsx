import { HTMLAttributes } from "react";
import clsx from "clsx";

export function Container({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={clsx("mx-auto w-full max-w-8xl px-6 sm:px-8 lg:px-12", className)} {...props}>
      {children}
    </div>
  );
}
