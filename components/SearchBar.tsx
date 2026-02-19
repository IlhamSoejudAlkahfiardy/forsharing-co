"use client"

import * as React from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface SearchBarProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    containerClassName?: string
}

export function SearchBar({
    className,
    containerClassName,
    ...props
}: SearchBarProps) {
    return (
        <div
            className={cn(
                "relative w-full max-w-md",
                containerClassName
            )}
        >
            <Search
                className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
            />

            <Input
                type="text"
                placeholder="Cari berdasarkan nama, nominal, atau notes"
                className={cn(
                    "h-11 pl-10 pr-4 rounded-full",
                    "bg-slate-900",
                    "border border-slate-800",
                    "text-slate-100 placeholder:text-slate-500",
                    "focus-visible:ring-2 focus-visible:ring-indigo-500/40",
                    "focus-visible:border-indigo-500/60",
                    "transition-all duration-200",
                    "hover:border-slate-700",
                    className
                )}
                {...props}
            />
        </div>
    )
}
