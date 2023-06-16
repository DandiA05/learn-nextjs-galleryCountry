import { useRouter } from "next/router";
import React from "react";

const params = () => {
  const route = useRouter();
  const params = route.query.params;
  return <div>{params}</div>;
};

export default params;
