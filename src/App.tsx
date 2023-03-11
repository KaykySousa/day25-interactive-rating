import { useState } from "react"
import StarIcon from "./assets/icon-star.svg"
import ThankYouImage from "./assets/illustration-thank-you.svg"
import DeveloperInfo from "./components/DeveloperInfo"
import RatingButton from "./components/RatingButton"

export default function App() {
	const [isRated, setIsRated] = useState(false)
	const [rating, setRating] = useState<number | null>(null)

	return (
		<div className="min-h-screen w-full bg-neutral-900 flex flex-col justify-center items-center p-6">
			<div className="from-[#222833] to-[#171E28] bg-gradient-to-b max-w-sm w-full rounded-xl px-6 py-8">
				{!isRated ? (
					<div className="flex flex-col justify-start items-start">
						<div className="bg-[#262F38] h-10 w-10 rounded-full flex justify-center items-center">
							<img src={StarIcon} alt="Star icon" />
						</div>
						<h1 className="text-white font-semibold text-2xl mt-5">
							How did we do?
						</h1>
						<p className="text-white opacity-60 mt-4">
							Please let us know how we did with your support
							request. All feedback is appreciated to help us
							improve our offering!
						</p>
						<div className="w-full flex center flex-wrap mt-8 gap-3 justify-center min-[380px]:justify-between">
							<RatingButton
								rating={1}
								onChange={() => {
									setRating(1)
								}}
							/>
							<RatingButton
								rating={2}
								onChange={() => {
									setRating(2)
								}}
							/>
							<RatingButton
								rating={3}
								onChange={() => {
									setRating(3)
								}}
							/>
							<RatingButton
								rating={4}
								onChange={() => {
									setRating(4)
								}}
							/>
							<RatingButton
								rating={5}
								onChange={() => {
									setRating(5)
								}}
							/>
						</div>
						<button
							onClick={() => {
								if (rating) setIsRated(true)
							}}
							className="w-full h-12 rounded-full tracking-wider bg-orange-600 text-white font-semibold mt-5 transition-colors hover:bg-white hover:text-orange-600"
						>
							SUBMIT
						</button>
					</div>
				) : (
					<div className="flex flex-col items-center">
						<img src={ThankYouImage} alt="Thank you" />
						<p className="text-orange-600 text-sm px-3 py-1.5 bg-[#262F38] rounded-full mt-6 text-center">
							You selected {rating} out of 5
						</p>
						<h1 className="text-white font-semibold text-2xl mt-5 text-center">
							Thank you!
						</h1>
						<p className="text-white opacity-60 mt-4 text-center">
							We appreciate you taking the time to give a rating.
							If you ever need more support, don't hesitate to get
							in touch!
						</p>
					</div>
				)}
			</div>
			<DeveloperInfo />
		</div>
	)
}
