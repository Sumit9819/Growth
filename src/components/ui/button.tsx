import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { Loader2, ArrowRight } from "lucide-react";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
    asChild?: boolean;
    showIcon?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", isLoading, asChild = false, showIcon = false, children, ...props }, ref) => {
        const variants = {
            primary: "bg-white/5 border border-border-highlight text-foreground hover:bg-white/10 hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] backdrop-blur-sm",
            secondary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20",
            outline: "border border-border bg-transparent hover:bg-accent hover:text-accent-foreground",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline p-0 h-auto font-semibold",
        };

        const sizes = {
            sm: "h-9 px-4 text-xs",
            md: "h-12 px-6 py-3 text-sm",
            lg: "h-14 px-8 text-base",
        };

        const classes = cn(
            "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
            variants[variant],
            size !== "md" && variant === "link" ? "" : sizes[size], // Link variant doesn't need height/padding
            className
        );

        if (asChild) {
            return (
                <Slot className={classes} ref={ref} {...props}>
                    {children}
                </Slot>
            );
        }

        return (
            <button
                className={classes}
                ref={ref}
                disabled={isLoading || props.disabled}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {children}
                {showIcon && !isLoading && <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />}
            </button>
        );
    }
);
Button.displayName = "Button";

export { Button };
