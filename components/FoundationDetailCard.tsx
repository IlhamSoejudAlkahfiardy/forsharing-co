"use client"

import Image from "next/image"
import { MapPin, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface FoundationDetailProps {
    name: string
    address: string
    image: string
    mapsEmbedUrl: string
    mapsLink: string
}

export function FoundationDetailCard({
    name,
    address,
    image,
    mapsEmbedUrl,
    mapsLink,
}: FoundationDetailProps) {
    return (
        <div className="bg-slate-950 text-slate-100 flex items-center justify-center">
            <Card className="w-full max-w-4xl bg-slate-900 border-slate-800 rounded-2xl shadow-2xl">
                <CardContent className="p-8 space-y-8">

                    {/* Image */}
                    {/* <div className="relative w-full h-64 overflow-hidden"> */}
                    <Image
                        src={image}
                        alt={name}
                        width={384}
                        height={100}
                        className="rounded-xl"
                    />
                    {/* </div> */}

                    {/* Foundation Name */}
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold text-indigo-400">
                            {name}
                        </h1>
                        <div className="flex items-start gap-2 text-slate-400">
                            <MapPin className="w-4 h-4 mt-1 shrink-0" />
                            <p className="text-sm">{address}</p>
                        </div>
                    </div>

                    {/* Google Maps Embed */}
                    <div className="rounded-xl overflow-hidden border border-slate-800">
                        <iframe
                            src={mapsEmbedUrl}
                            width="100%"
                            height="300"
                            loading="lazy"
                            className="rounded-xl"
                        />
                    </div>

                    {/* Google Maps Link */}
                    <div>
                        <a
                            href={mapsLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition"
                        >
                            Lihat di Google Maps
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>

                </CardContent>
            </Card>
        </div>
    )
}