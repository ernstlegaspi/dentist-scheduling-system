import { PiToothBold } from "react-icons/pi"

export default function ErrorPage() {
	return (
		<div className="absolute z-[1000] inset-0 bg-white text-dark2 flex-center">
			<div>
				<div className="f-v-center">
					<PiToothBold size={22} />
					<p className="text-s ml-2">404 Page Not Found</p>
				</div>
			</div>
		</div>
	)
}
