import * as React from "react"
import { cn } from "../lib/utils"



export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline"
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const baseStyles = "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium border transition-colors focus:outline-none"
  
  const variants = {
    default: "bg-teal-500/10 text-teal-400 border-teal-500/20",
    secondary: "bg-slate-800 text-slate-300 border-slate-700/50",
    outline: "text-slate-400 border-slate-800 bg-transparent"
  }

  return (
    <div className={cn(baseStyles, variants[variant], className)} {...props} />
  )
}
