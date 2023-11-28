"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("e2262f29-a7b6-40de-83f1-99863889bb91");
  }, []);

  return null;
};
