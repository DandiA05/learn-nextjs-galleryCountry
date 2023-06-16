import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";
import Header from "../components/header";
import Layout from "../components/layout";
import Hero from "@/sections/hero";
import { Places } from "@/sections/places";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const route = useRouter();

  return (
    <main
    // className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Hero />
      <Places />
    </main>
  );
}
