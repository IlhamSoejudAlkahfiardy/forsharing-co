"use client"

import Link from "next/link"
import {
    Instagram,
    Github,
    Linkedin,
    ChevronDown,
} from "lucide-react"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export function Footer() {
    return (
        <footer className="w-full border-t border-slate-800 bg-slate-950">
            <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col items-center gap-4">

                {/* Text */}
                <p className="text-sm text-slate-400 text-center">
                    Developed with{" "}
                    <span className="text-indigo-400">love</span>{" "}
                    by{" "}
                    <Popover>
                        <PopoverTrigger asChild>
                            <button className="inline-flex items-center gap-1 text-slate-100 font-medium hover:text-indigo-400 transition">
                                Alkahfiardy
                                <ChevronDown size={14} className="opacity-60" />
                            </button>
                        </PopoverTrigger>

                        <PopoverContent
                            align="center"
                            className="w-48 bg-slate-900 border border-slate-800 text-slate-100"
                        >
                            <div className="flex flex-col gap-3">

                                <Link
                                    href="https://www.instagram.com/alkahfiardy/"
                                    target="_blank"
                                    className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition"
                                >
                                    <Instagram size={16} />
                                    Instagram
                                </Link>

                                <Link
                                    href="https://github.com/IlhamSoejudAlkahfiardy"
                                    target="_blank"
                                    className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition"
                                >
                                    <Github size={16} />
                                    GitHub
                                </Link>

                                <Link
                                    href="https://www.linkedin.com/in/ilhamsoejudalkahfiardy/"
                                    target="_blank"
                                    className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition"
                                >
                                    <Linkedin size={16} />
                                    LinkedIn
                                </Link>

                            </div>
                        </PopoverContent>
                    </Popover>{" "}
                    for{" "}
                    <span className="text-indigo-400 font-medium">
                        ForSharing.co
                    </span>
                </p>

                {/* Existing Social Icons (Tetap Ada) */}
                <div className="flex items-center gap-6">
                    <Link
                        href="https://www.instagram.com/forsharing.co/"
                        target="_blank"
                        className="text-slate-400 hover:text-indigo-400 transition duration-200 hover:scale-110"
                    >
                        <Instagram size={20} />
                    </Link>
                    {/* 
                    <Link
                        href="#"
                        target="_blank"
                        className="text-slate-400 hover:text-indigo-400 transition duration-200 hover:scale-110"
                    >
                        <Github size={20} />
                    </Link>

                    <Link
                        href="#"
                        target="_blank"
                        className="text-slate-400 hover:text-indigo-400 transition duration-200 hover:scale-110"
                    >
                        <Linkedin size={20} />
                    </Link> */}
                </div>

            </div>
        </footer>
    )
}