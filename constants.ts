import {
	LayoutDashboard,
	MessageSquare,
	ImageIcon,
	VideoIcon,
	Music,
	Settings,
	Code,
} from "lucide-react";

export const MAX_FREE_COUNTS = 5;

// Routes Array
export const routes = [
	{
		label: "Dashboard",
		href: "/dashboard",
		icon: LayoutDashboard,
		color: "text-sky-700",
	},
	{
		label: "Conversation",
		href: "/conversation",
		icon: MessageSquare,
		color: "text-violet-500",
	},
	{
		label: "Image Generation",
		href: "/image",
		icon: ImageIcon,
		color: "text-pink-700",
	},
	{
		label: "Video Generation",
		href: "/video",
		icon: VideoIcon,
		color: "text-orange-700",
	},
	{
		label: "Music Generation",
		href: "/music",
		icon: Music,
		color: "text-emerald-500",
	},
	{
		label: "Code Generation",
		href: "/code",
		icon: Code,
		color: "text-cyan-500",
	},
	{
		label: "Settings",
		href: "/settings",
		icon: Settings,
	},
];

// Tools Array
export const tools = [
	{
		label: "Conversation",
		href: "/conversation",
		icon: MessageSquare,
		color: "text-violet-500",
		bgColor: "bg-violet-500/10",
	},
	{
		label: "Image Generation",
		href: "/image",
		icon: ImageIcon,
		color: "text-pink-700",
		bgColor: "bg-pink-700/10",
	},
	{
		label: "Video Generation",
		href: "/video",
		icon: VideoIcon,
		color: "text-orange-700",
		bgColor: "bg-orange-700/10",
	},
	{
		label: "Music Generation",
		href: "/music",
		icon: Music,
		color: "text-emerald-700",
		bgColor: "bg-emerald-700/10",
	},
	{
		label: "Code Generation",
		href: "/code",
		icon: Code,
		color: "text-cyan-700",
		bgColor: "bg-cyan-700/10",
	},
];

// Testimonials Array

export const testimonials = [
	{
		name: "Eric Phil",
		title: "Senior Developer",
		avatar: "J",
		message:
			"This AI tool has revolutionized the way I work. It's fast, efficient, and incredibly accurate. I couldn't be happier with the results!",
	},
	{
		name: "Claire Smith",
		title: "Lead Developer",
		avatar: "J",
		message:
			"I've been using this AI tool for months now and it has never let me down. The insights it provides are invaluable and have helped me make better decisions in my work.",
	},
	{
		name: "Bob Johnson",
		title: "Software Engineer",
		avatar: "B",
		message:
			"I was skeptical at first, but this AI tool has exceeded all my expectations. It's easy to use and has saved me countless hours of work. Highly recommended!",
	},
	{
		name: "Alice Lee",
		title: "Full Stack Developer",
		avatar: "A",
		message:
			"This AI tool is a game-changer. It has streamlined my workflow and helped me deliver better results in less time. I can't imagine working without it now.",
	},
	{
		name: "Charlie Brown",
		title: "Front End Developer",
		avatar: "C",
		message:
			"I've tried many AI tools in the past, but this one is by far the best. It's intuitive, powerful, and has helped me take my work to the next level. Highly recommended!",
	},
];
