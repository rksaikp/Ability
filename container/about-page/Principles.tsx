import Image from "next/image";
import { principles1, principles2 } from "@/public";

export default function Principles() {
	return (
		<section className="w-full padding-y rounded-t-[20px] bg-background">
			<div>
				<h1 className="sub-heading padding-x font-medium font-NeueMontreal text-secondry mb-[50px]">
				Discover Our Mission for 
					<br className="sm:hidden xm:hidden" /> Inclusion!
				</h1>
			</div>
			<div className="w-full border-t border-[#21212155]">
				<div className="w-full padding-x mt-[50px] flex justify-between gap-[30px] items-center sm:flex-col xm:flex-col">
					<div className="w-[50%] sm:w-full xm:w-full flex flex-col gap-[20px]">
						<Image
							src={principles1}
							alt="img"
							className="w-full rounded-[15px]"
						/>
						<div className="flex flex-col gap-[20px]">
							<p className="paragraph font-NeueMontreal text-secondry">
							A society in which individuals with and without disabilities walk together, collaborate seamlessly, and are regarded as equal partners. Here, support is rooted in empathy rather than sympathy, fostering an environment of mutual respect and understanding for all.
							</p>
						</div>
					</div>
					<div className="w-[50%] sm:w-full xm:w-full flex flex-col gap-[20px]">
						<Image
							src={principles2}
							alt="img"
							className="w-full rounded-[15px]"
						/>
						<div className="flex flex-col gap-[20px]">
							<p className="paragraph font-NeueMontreal text-secondry">
							To advocate for equal opportunities for individuals with disabilities, facilitating their integration into mainstream society.

To uncover and nurture the hidden talents of individuals with disabilities, maximizing their skills and abilities for the benefit of all.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
