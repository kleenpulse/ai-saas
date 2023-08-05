"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
	useEffect(() => {
		Crisp.configure("bb9a0e58-cd0e-49d6-ab7a-a4c9a408a693");
	}, []);
	return null;
};
