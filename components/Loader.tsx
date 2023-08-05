import Image from "next/image";

const loadingDots = () => {
	return (
		<div className="inline-flex gap-1">
			<div className="w-2 h-2 bg-gray-800 rounded-full animate-pulse"></div>
			<div className="w-2 h-2 bg-gray-800 rounded-full animate-pulse delay-400"></div>
			<div className="w-2 h-2 bg-gray-800 rounded-full animate-pulse delay-1000"></div>
		</div>
	);
};

export const Loader = () => {
	return (
		<div className="h-full flex flex-col gap-y-4 items-center justify-center">
			<div className="w-12 h-12 relative ">
				<Image src={"/loading.gif"} fill alt="loader" />
			</div>
			<p className="text-sm text-muted-foreground">
				Jinius is Thinking {loadingDots()}
			</p>
		</div>
	);
};
