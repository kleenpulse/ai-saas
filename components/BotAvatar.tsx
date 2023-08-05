import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const BotAvatar = () => {
	return (
		<Avatar className="h-8 w-8">
			<AvatarImage src={"/loading.gif"} className="p-1" alt="loading" />
		</Avatar>
	);
};

export default BotAvatar;
