import { generateRandomImg } from "@/lib/generateRandomImg";
import Image from "next/image";
import React from "react";
import s from "./places.module.css";
import Link from "next/link";
import { Gallery } from "@/components/gallery";

export const Places = () => {
  return (
    <section className="py-20 px-6">
      <h2
        style={{
          fontSize: 120,
          marginBottom: 12,
        }}
      >
        Norwood Interiors
      </h2>
      <p>
        At Norwood Interiors, we&apos;re a US-based interior design agency that
        specializes in sustainable commercial design. With a track record of
        award-winning projects in Europe, North America, and Asia, we&apos;re
        passionate about creating spaces that are both beautiful and
        environmentally responsible. Contact us today to schedule a consultation
        and see how we can help transform your space.
      </p>
      <Gallery />
    </section>
  );
};
