"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { routes } from "@/constants";
import FreeCounter from "./FreeCounter";
import { Goldman } from "next/font/google";

interface Props {
	apiLimitCount: number;
	isPro: boolean;
}

const font = Goldman({
	subsets: ["latin"],
	weight: "700",
});

const Sidebar = ({ apiLimitCount = 0, isPro = false }: Props) => {
	const pathName = usePathname();
	return (
		<div className="space-y-4 pb-4 flex flex-col h-full bg-[#000a2d] text-white">
			<div className="px-3 py-2 flex-1">
				<Link href={"/dashboard"} className="flex items-center mt-4 mb-12">
					<div className="relative h-8 w-8 mr-3">
						<Image src={"/loading.gif"} fill alt="logo" />
					</div>
					<h1
						className={cn("text-2xl tracking-wider text-white", font.className)}
					>
						Jinius
					</h1>
				</Link>
				<div className="space-y-1">
					{routes.map((route) => (
						<Link
							key={route.href}
							href={route.href}
							className={cn(
								"text-sm flex p-3 group font-medium justify-start w-full cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
								pathName === route.href
									? "text-white bg-white/10"
									: "text-zinc-400"
							)}
						>
							<div className="flex items-center flex-1">
								<route.icon className={`h-5 w-5 mr-3 ${route.color} `} />
								{route.label}
							</div>
						</Link>
					))}
				</div>
			</div>
			<FreeCounter isPro={isPro} apiLimitCount={apiLimitCount} />
		</div>
	);
};

export default Sidebar;
