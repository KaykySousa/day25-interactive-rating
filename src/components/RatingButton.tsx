import { InputHTMLAttributes } from "react"

interface RatingButtonProps extends InputHTMLAttributes<HTMLInputElement> {
	rating: number
}

export default function RatingButton({ rating, ...props }: RatingButtonProps) {
	return (
		<div>
			<input
				type="radio"
				id={`rating${rating}`}
				name="ratings"
				className="peer hidden"
				{...props}
			/>
			<label
				htmlFor={`rating${rating}`}
				className="cursor-pointer flex justify-center items-center bg-[#262F38] h-11 w-11 rounded-full text-white opacity-60 font-semibold transition-colors hover:bg-gray-600 hover:opacity-100 peer-checked:bg-orange-600 peer-checked:opacity-100"
			>
				{rating}
			</label>
		</div>
	)
}
