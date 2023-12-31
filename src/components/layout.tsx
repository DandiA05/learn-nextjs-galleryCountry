import Link from "next/link";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="p-4 flex justify-between gap-4">
        <Link className="text-4xl font-bold" href={"/"}>
          Norwood
        </Link>
        <div className="flex gap-2">
          <Link
            className="border border-black rounded-ful block py-2 px-6 rounded-full"
            href="/list"
          >
            Country List
          </Link>
          <Link
            className="border border-black rounded-ful block py-2 px-6 rounded-full"
            href="/schedule-a-consultation"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
      {children}
      <footer className="py-16 px-8">
        <h4>Norwood</h4>
        <p>Norwood Interiors | Interior Designer | New York, USA</p>
        <p>40 West 25th Street, New York, NY 10010</p>
        <p>000-000-0000 | info@norwoodinteriors.com</p>
      </footer>
    </>
  );
};

export default Layout;
