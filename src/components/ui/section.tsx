import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    container?: boolean
    size?: "sm" | "md" | "lg" | "xl"
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ className, container = true, size = "lg", children, ...props }, ref) => {
        const sizes = {
            sm: "py-12 md:py-16",
            md: "py-16 md:py-24",
            lg: "py-20 md:py-32",
            xl: "py-24 md:py-40",
        }

        return (
            <section
                ref={ref}
                className={cn(sizes[size], className)}
                {...props}
            >
                {container ? (
                    <div className="container mx-auto px-4 md:px-6">
                        {children}
                    </div>
                ) : (
                    children
                )}
            </section>
        )
    }
)
Section.displayName = "Section"

export { Section }
