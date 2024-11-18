import { backgroundAbout } from "@/public";
import { BackgroundImg } from "@/components";

export default function About() {
	return (
		<section className="w-full padding-y">
			<div className="w-full flex flex-col bg-background">
				<div className="w-full border-t border-[#21212155] pt-[20px]">
					<div className="w-full flex justify-between padding-x sm:flex-col xm:flex-col gap-[30px]">
						<div>
							<h3 className="paragraph font-medium text-secondry font-NeueMontreal">
								Who We Are
							</h3>
						</div>
						<div className="w-[48%] sm:w-full xm:w-full flex justify-between">
							<div className="w-[50%] sm:w-full xm:w-full flex flex-col gap-y-[40px]">
								<div className="flex flex-col gap-y-[20px]">
									<p className="paragraph font-NeueMontreal text-secondry">
									Since our founding in 1995, Ability Foundation has been committed to the empowerment, integration, and rights of people with disabilities. With a constant focus on mainstreaming and inclusion, we have pioneered numerous innovative programs aimed at ensuring full participation for individuals with disabilities. For us, disability is a human rights issue.
									</p>
								</div>
								<div className="flex flex-col gap-y-[20px]">
									<p className="paragraph font-NeueMontreal text-secondry">
									To achieve this, we engage in a broad range of activities, from publishing and media to education, employment, culture, recreation, legislation, and human rights. Together, these efforts form a continuous commitment to change. We believe that with the right opportunities, provided at the right time, there’s no limit to what can be achieved—all it takes is an open mind.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="padding-x pt-[100px] lg:pt-[80px] md:pt-[60px] sm:pt-[40px] xm:pt-[40px]">
				<BackgroundImg src={backgroundAbout} />
			</div>
		</section>
	);
}
