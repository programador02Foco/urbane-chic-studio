import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-[color,background-color,transform,border-color] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary px-7 text-primary-foreground hover:-translate-y-0.5 hover:bg-primary/90",
        primary: "bg-primary px-7 text-primary-foreground hover:-translate-y-0.5 hover:bg-primary/90",
        champagne: "bg-accent px-7 text-accent-foreground hover:-translate-y-0.5 hover:bg-accent/90",
        outline: "border border-primary/20 bg-transparent px-6 text-primary hover:bg-primary hover:text-primary-foreground",
        icon: "size-11 bg-transparent p-0 text-foreground hover:bg-secondary",
        text: "min-h-0 rounded-none px-0 py-1 text-foreground underline decoration-accent decoration-2 underline-offset-8 hover:text-accent",
        secondary: "bg-secondary px-6 text-secondary-foreground hover:bg-secondary/80",
        ghost: "bg-transparent px-4 text-foreground hover:bg-secondary",
        link: "min-h-0 rounded-none px-0 text-primary underline-offset-4 hover:underline",
        destructive: "bg-destructive px-6 text-destructive-foreground hover:bg-destructive/90",
      },
      size: {
        default: "h-12",
        sm: "h-10 px-5 text-xs",
        lg: "h-14 px-8",
        icon: "size-11",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants, type ButtonProps };