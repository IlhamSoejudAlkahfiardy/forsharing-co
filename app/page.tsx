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
import { formatNumber } from "@/utils/formatNumber";
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
import { Button } from "@/components/ui/button";
import { FaEye } from "react-icons/fa";
import { Donation } from "@/types/donation.type";

type Page = "transaction" | "report" | "foundation";

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedDonation, setSelectedDonation] = useState<Donation | null>(null)
  const [page, setPage] = useState<Page>("transaction");
  const searchDonationsByNameAmountNotes = donations.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase()) || item.amount.toString().includes(search.toLowerCase()) || item.notes.toLowerCase().includes(search.toLowerCase());
  })

  function handleOpenImage(index: number) {
    setSelectedDonation(donations[index])
  }

  function handleCloseImage() {
    setSelectedDonation(null)
  }

  function calculateTotalDonatur() {
    return searchDonationsByNameAmountNotes.length
  }

  function calculateTotalDonations() {
    return searchDonationsByNameAmountNotes.reduce((acc, item) => item.category === "in" ? acc + item.amount : acc, 0)
  }

  function calculateTotalExpenses() {
    return searchDonationsByNameAmountNotes.reduce((acc, item) => item.category === "out" ? acc + item.amount : acc, 0)
  }

  function calculateRemainingBalance() {
    return calculateTotalDonations() - calculateTotalExpenses()
  }



  return (
    <>
      <PamfletIntro />
      <div className="container max-w-md w-full mx-auto p-4">
        <div className="mt-10 flex flex-col gap-5">
          <p className="font-semibold text-xl text-sky-400">
            Laporan Keuangan ForSharing
          </p>
          <SearchBar
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="flex w-full items-center gap-3">
            <Button size="sm" className={`rounded-full border cursor-pointer px-4 ${page === "transaction" ? 'bg-sky-500 hover:bg-sky-500 border-sky-500 text-slate-100' : 'bg-slate-900 hover:bg-slate-900 border-slate-800 text-slate-100'} `} onClick={() => setPage("transaction")}>Transaksi</Button>
            <Button size="sm" className={`rounded-full border cursor-pointer px-4 ${page === "report" ? 'bg-sky-500 hover:bg-sky-500 border-sky-500 text-slate-100' : 'bg-slate-900 hover:bg-slate-900 border-slate-800 text-slate-100'} `} onClick={() => setPage("report")}>Report</Button>
            <Button disabled size="sm" className={`rounded-full border cursor-pointer px-4 ${page === "foundation" ? 'bg-sky-500 hover:bg-sky-500 border-sky-500 text-slate-100' : 'bg-slate-900 hover:bg-slate-900 border-slate-800 text-slate-100'} `} onClick={() => setPage("foundation")}>Foundation</Button>
          </div>
          {page === "transaction" && (
            <div className="flex flex-col gap-5 w-full">
              {searchDonationsByNameAmountNotes.length === 0 && (
                <div className="w-full flex items-center justify-center gap-3 rounded-full bg-slate-900 border border-slate-800 p-3 pr-5">
                  <p className="text-sm font-medium text-slate-100">
                    Tidak ada donasi yang ditemukan
                  </p>
                </div>
              )}
              {searchDonationsByNameAmountNotes.map((item, index) => (
                <div className="w-full flex flex-wrap items-center justify-between gap-3 rounded-full bg-slate-900 border border-slate-800 p-3 pr-6" key={item.id}>
                  <div className="flex gap-3 items-center">
                    <div className="aspect-square w-12 flex items-center justify-center rounded-full bg-slate-800">
                      <FaEye onClick={() => handleOpenImage(index)} className="text-slate-500 text-base" />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm font-medium text-slate-100">
                        {item.name}
                      </p>
                      <p className="text-xs max-w-40 overflow-hidden text-ellipsis whitespace-nowrap font-light text-slate-100">
                        {item.notes}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <p className={`text-xs text-end font-medium ${item.category === "in" ? 'text-green-400' : 'text-red-400'} `}>
                      {item.category === "in" ? '+' : '-'}{" "}{formatNumber(item.amount)}
                    </p>
                    <p className="text-xs text-end font-light text-slate-500">
                      {item.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
          {page === "report" && (
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader className="space-y-5">
                <div className="space-y-2">
                  <CardTitle className="text-slate-100">Jumlah Donatur</CardTitle>
                  <CardDescription className="text-green-400">{calculateTotalDonatur()}</CardDescription>
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-slate-100">Jumlah Donasi</CardTitle>
                  <CardDescription className="text-green-400">Rp {formatNumber(calculateTotalDonations())}</CardDescription>
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-slate-100">Jumlah Pengeluaran</CardTitle>
                  <CardDescription className="text-red-400">Rp {formatNumber(calculateTotalExpenses())}</CardDescription>
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-slate-100">Sisa Keuangan</CardTitle>
                  <CardDescription className="text-green-400">Rp {formatNumber(calculateRemainingBalance())}</CardDescription>
                </div>
              </CardHeader>
              <CardFooter className="flex flex-col justify-start items-start gap-5">
                <p className="text-xs font-light text-slate-100">
                  Data per tanggal 21-02-26
                </p>
              </CardFooter>
            </Card>
          )}
        </div>
        <Dialog open={!!selectedDonation} onOpenChange={handleCloseImage}>
          <DialogContent className="bg-slate-900 border-slate-800 max-w-3xl">
            {selectedDonation && (
              <>
                <div className="relative w-full h-[60vh]">
                  <Image
                    src={selectedDonation.image}
                    alt={selectedDonation.name}
                    fill
                    className="object-contain rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-xs font-light text-slate-100">
                    {selectedDonation.notes}
                  </p>
                </div>
              </>

            )}
          </DialogContent>
        </Dialog>

      </div>
    </>
  );
}
