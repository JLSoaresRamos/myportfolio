import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { MdSend } from "react-icons/md";

type SubmitButtonProps = {
	isLoading: boolean;
};

export default function SubmitButton({ isLoading }: SubmitButtonProps) {
	return (
		<button
			type="submit"
			disabled={isLoading}
			className={`bg-primary-purple rounded-lg flex items-center justify-center gap-2 p-4 ${
				isLoading && "w-20"
			}`}
		>
			{isLoading ? (
				<PiDotsThreeOutlineFill className="animate-pulse" />
			) : (
				<>
					Enviar <MdSend size={16} />
				</>
			)}
		</button>
	);
}
