import { useRouter } from "next/router";
import React from "react";

const Slug = () => {
  const router = useRouter();
  const slug = router.query.slug;
  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
};

export default Slug;
