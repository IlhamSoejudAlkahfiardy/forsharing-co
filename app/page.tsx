"use client"

import { donations } from "@/assets/donations";
import { SearchBar } from "@/components/SearchBar";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { formatRupiah } from "@/utils/formatRupiah";
import Image from "next/image";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { PamfletIntro } from "@/components/PamfletIntro";

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const searchDonationsByNameAmountNotes = donations.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase()) || item.amount.toString().includes(search.toLowerCase()) || item.notes.toLowerCase().includes(search.toLowerCase());
  })

  function handleOpenImage(image: string) {
    setSelectedImage(image)
  }

  function handleCloseImage() {
    setSelectedImage(null)
  }

  return (
    <>
      <PamfletIntro />
      <div className="container max-w-md w-full mx-auto p-4">
        <div className="mt-10 flex flex-col gap-3">
          <p className="font-semibold text-xl text-sky-400">
            Laporan Keuangan Masuk
          </p>
          <SearchBar
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="flex flex-col gap-5 w-full">
            {searchDonationsByNameAmountNotes.map((item) => (
              <Card className="bg-slate-900 border-slate-800" key={item.id}>
                <CardContent className="space-y-2">
                  <p className="text-sm font-medium text-slate-100">
                    Bukti Uang Masuk
                  </p>
                  <Image
                    className="cursor-pointer"
                    src={item.image} alt="Bukti Uang Masuk" width={200} height={100}
                    onClick={() => handleOpenImage(item.image)}
                    loading="lazy"
                  />
                </CardContent>
                <CardFooter className="flex flex-col justify-start items-start gap-5">
                  <div className="flex flex-col gap-2">
                    <p className="text-sm font-medium text-slate-400">
                      Nama
                    </p>
                    <p className="text-2xl font-bold text-slate-100">
                      {item.name}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-sm font-medium text-slate-400">
                      Total Keuangan Masuk
                    </p>
                    <p className="text-2xl font-bold text-slate-100">
                      {formatRupiah(item.amount)}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-sm font-medium text-slate-400">
                      Notes
                    </p>
                    <p className="text-sm font-normal text-slate-100">
                      {item.notes}
                    </p>
                  </div>
                  <div className=" w-full flex  justify-between">
                    <p className="text-xs font-light text-slate-400">
                      Tanggal
                    </p>
                    <p className="text-xs font-light text-slate-100">
                      {item.date}
                    </p>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        <Dialog open={!!selectedImage} onOpenChange={handleCloseImage}>
          <DialogContent className="bg-slate-900 border-slate-800 max-w-3xl">
            {selectedImage && (
              <div className="relative w-full h-[70vh]">
                <Image
                  src={selectedImage}
                  alt="Preview"
                  fill
                  className="object-contain rounded-md"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>

      </div>
    </>
  );
}
