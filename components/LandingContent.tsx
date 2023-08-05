"use client";

import { testimonials } from "@/constants";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export const LandingContent = () => {
	return (
		<div className="px-10 pb-20">
			<h2 className="text-center text-4xl text-white font-extrabold mb-10">
				Testimonials
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
				{testimonials.map((item) => (
					<Card
						key={item.message}
						className="bg-[#03091f] border-none text-white mr-2 mb-2"
					>
						<CardHeader>
							<CardTitle className="flex items-center gap-x-2">
								<div>
									<p className="text-lg">{item.name}</p>
									<p className="text-zinc-400 text-sm">{item.title}</p>
								</div>
							</CardTitle>
							<CardContent className="pt-4 px-0">{item.message}</CardContent>
						</CardHeader>
					</Card>
				))}
			</div>
		</div>
	);
};
