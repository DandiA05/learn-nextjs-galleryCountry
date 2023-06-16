import { generateRandomImg } from "@/lib/generateRandomImg";
import Image from "next/image";
import Link from "next/link";
import s from "../sections/places.module.css";

export const Gallery = () => {
  return (
    <ul className={s.gallery}>
      {DUMMY_DATA.map((item, index) => (
        <li key={index}>
          <Link href={`/country/${item.country}`}>
            <Image
              src={item.image}
              alt={item.country}
              width={420}
              height={320}
            />
            <p className={s.countryText}>{item.country}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

const DUMMY_DATA = [
  {
    country: "Japan",
    image: generateRandomImg("japan"),
  },
  {
    country: "Indonesia",
    image: generateRandomImg("indonesia"),
  },
  {
    country: "Germany",
    image: generateRandomImg("germany"),
  },
  {
    country: "America",
    image: generateRandomImg("america"),
  },
  {
    country: "England",
    image: generateRandomImg("england"),
  },
  {
    country: "Saudi",
    image: generateRandomImg("saudi"),
  },
];
