"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

export function PamfletIntro() {
    const [visible, setVisible] = useState(true)
    const [animateOut, setAnimateOut] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimateOut(true)
        }, 2500) // mulai animasi keluar sebelum hilang

        const removeTimer = setTimeout(() => {
            setVisible(false)
        }, 3000)

        return () => {
            clearTimeout(timer)
            clearTimeout(removeTimer)
        }
    }, [])

    if (!visible) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
            <div
                className={cn(
                    "px-10 py-8 rounded-2xl border border-slate-800",
                    "bg-slate-900 text-slate-100",
                    "shadow-2xl",
                    "transition-all duration-500",
                    "space-y-3",
                    animateOut
                        ? "opacity-0 scale-95"
                        : "opacity-100 scale-100"
                )}
            >
                <h1 className="text-2xl font-bold text-indigo-400">
                    🎉 Selamat Datang!
                </h1>
                <Image src="/images/capture/zaky-1.png" alt="Logo" className="mx-auto" width={250} height={100} />
                {/* <p className="mt-2 text-slate-400">
                    Terima kasih sudah mengunjungi halaman ini
                </p> */}
            </div>
        </div>
    )
}
