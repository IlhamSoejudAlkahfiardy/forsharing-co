"use client";

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
} from "@/components/ui/card";
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
} from "@/components/ui/dialog";
import { PamfletIntro } from "@/components/PamfletIntro";
import { Button } from "@/components/ui/button";
import { FaEye } from "react-icons/fa";
import { Donation } from "@/types/donation.type";
import { FoundationDetailCard } from "@/components/FoundationDetailCard";

type Page = "transaction" | "report" | "foundation" | "donation";
type DataReport = {
  donatur: number;
  totalDonasi: number;
  totalPengeluaran: number;
  sisaKeuangan: number;
  tanggal: string;
};

export default function Home() {
  // const [search, setSearch] = useState("");
  // const [selectedDonation, setSelectedDonation] = useState<Donation | null>(
  //   null,
  // );
  const [page, setPage] = useState<Page>("report");
  const [dataReport, setDataReport] = useState<DataReport>({
    donatur: 44,
    totalDonasi: 4173786,
    totalPengeluaran: 0,
    sisaKeuangan: 4173786,
    tanggal: "27-02-26 - 17:00 WIB",
  });
  // const searchDonationsByNameAmountNotes = donations.filter((item) => {
  //   return (
  //     item.name.toLowerCase().includes(search.toLowerCase()) ||
  //     item.amount.toString().includes(search.toLowerCase()) ||
  //     item.notes.toLowerCase().includes(search.toLowerCase())
  //   );
  // });

  // function handleOpenImage(index: number) {
  //   setSelectedDonation(donations[index]);
  // }

  // function handleCloseImage() {
  //   setSelectedDonation(null);
  // }

  // function calculateTotalDonatur() {
  //   return searchDonationsByNameAmountNotes.length;
  // }

  // function calculateTotalDonations() {
  //   return searchDonationsByNameAmountNotes.reduce(
  //     (acc, item) => (item.category === "in" ? acc + item.amount : acc),
  //     0,
  //   );
  // }

  // function calculateTotalExpenses() {
  //   return searchDonationsByNameAmountNotes.reduce(
  //     (acc, item) => (item.category === "out" ? acc + item.amount : acc),
  //     0,
  //   );
  // }

  // function calculateRemainingBalance() {
  //   return calculateTotalDonations() - calculateTotalExpenses();
  // }

  return (
    <>
      <PamfletIntro />
      <div className="container max-w-md min-h-screen w-full mx-auto p-4">
        <div className="mt-10 flex flex-col gap-5">
          <p className="font-semibold text-xl text-center text-sky-400">
            Informasi Kegiatan ForSharing Vol 1
          </p>
          {/* <SearchBar
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          /> */}
          <div className="flex w-full items-center gap-3">
            {/* <Button size="sm" className={`rounded-full border cursor-pointer px-4 ${page === "transaction" ? 'bg-sky-500 hover:bg-sky-500 border-sky-500 text-slate-100' : 'bg-slate-900 hover:bg-slate-900 border-slate-800 text-slate-100'} `} onClick={() => setPage("transaction")}>Transaksi</Button> */}
            <Button
              size="sm"
              className={`rounded-full border cursor-pointer px-4 ${page === "report" ? "bg-sky-500 hover:bg-sky-500 border-sky-500 text-slate-100" : "bg-slate-900 hover:bg-slate-900 border-slate-800 text-slate-100"} `}
              onClick={() => setPage("report")}
            >
              Report
            </Button>
            <Button
              size="sm"
              className={`rounded-full border cursor-pointer px-4 ${page === "foundation" ? "bg-sky-500 hover:bg-sky-500 border-sky-500 text-slate-100" : "bg-slate-900 hover:bg-slate-900 border-slate-800 text-slate-100"} `}
              onClick={() => setPage("foundation")}
            >
              Yayasan
            </Button>
            <Button
              size="sm"
              className={`rounded-full border cursor-pointer px-4 ${page === "donation" ? "bg-sky-500 hover:bg-sky-500 border-sky-500 text-slate-100" : "bg-slate-900 hover:bg-slate-900 border-slate-800 text-slate-100"} `}
              onClick={() => setPage("donation")}
            >
              Donasi
            </Button>
          </div>
          {/* {page === "transaction" && (
            <div className="flex flex-col gap-5 w-full">
              {searchDonationsByNameAmountNotes.length === 0 && (
                <div className="w-full flex items-center justify-center gap-3 rounded-full bg-slate-900 border border-slate-800 p-3 pr-5">
                  <p className="text-sm font-medium text-slate-100">
                    Tidak ada donasi yang ditemukan
                  </p>
                </div>
              )}
              {searchDonationsByNameAmountNotes.map((item, index) => (
                <div
                  className="w-full flex flex-wrap items-center justify-between gap-3 rounded-full bg-slate-900 border border-slate-800 p-3 pr-6"
                  key={item.id}
                >
                  <div className="flex gap-3 items-center">
                    <div className="aspect-square w-12 flex items-center justify-center rounded-full bg-slate-800">
                      <FaEye
                        onClick={() => handleOpenImage(index)}
                        className="text-slate-500 text-base"
                      />
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
                    <p
                      className={`text-xs text-end font-medium ${item.category === "in" ? "text-green-400" : "text-red-400"} `}
                    >
                      {item.category === "in" ? "+" : "-"}{" "}
                      {formatNumber(item.amount)}
                    </p>
                    <p className="text-xs text-end font-light text-slate-500">
                      {item.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )} */}
          {page === "report" && (
            <Card className="bg-slate-900 border-slate-800 rounded-2xl">
              <CardHeader className="space-y-5">
                <div className="space-y-2">
                  <CardTitle className="text-slate-100">
                    Jumlah Donatur
                  </CardTitle>
                  <CardDescription className="text-green-400">
                    {dataReport.donatur}
                  </CardDescription>
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-slate-100">
                    Jumlah Donasi
                  </CardTitle>
                  <CardDescription className="text-green-400">
                    Rp {formatNumber(dataReport.totalDonasi)}
                  </CardDescription>
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-slate-100">
                    Jumlah Pengeluaran
                  </CardTitle>
                  <CardDescription className="text-red-400">
                    Rp {formatNumber(dataReport.totalPengeluaran)}
                  </CardDescription>
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-slate-100">
                    Sisa Keuangan
                  </CardTitle>
                  <CardDescription className="text-green-400">
                    Rp {formatNumber(dataReport.sisaKeuangan)}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardFooter className="flex flex-col justify-start items-start gap-5">
                <p className="text-xs font-light text-slate-100">
                  Data per tanggal {dataReport.tanggal}
                </p>
              </CardFooter>
            </Card>
          )}
          {page === "foundation" && (
            <FoundationDetailCard
              name="Yayasan Hidayah Umat Gresik"
              address="Jl. Jaksa Agung Suprapto Gang 8E. 4 (Sebelumnya di Perum. Sidorukun, Kec. Gresik, Kabupaten Gresik, Jawa Timur 61112"
              image="/images/assets/yayasan.jpg"
              mapsLink="https://maps.app.goo.gl/9o7qwuaSjKoRxngq6"
              mapsEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.2042308937503!2d112.65160451746065!3d-7.160004882673149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd801d6621a13d9%3A0x9df549bc384c41a2!2sYayasan%20Hidayah%20Umat%20Gresik!5e0!3m2!1sid!2sid!4v1771820057594!5m2!1sid!2sid"
            />
          )}
          {page === "donation" && (
            <div className="w-full flex flex-col gap-5">
              <Image
                src={"/images/assets/banner.jpeg"}
                alt="banner"
                width={384}
                height={256}
                className="mx-auto rounded-2xl"
              />
              <Image
                src={"/images/assets/qris.jpeg"}
                alt="QRIS"
                width={384}
                height={256}
                className="mx-auto rounded-2xl"
              />
            </div>
          )}
        </div>
        {/* <Dialog open={!!selectedDonation} onOpenChange={handleCloseImage}>
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
        </Dialog> */}
      </div>
    </>
  );
}
