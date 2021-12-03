import React from 'react';
import { SliceType } from '@core/prismic/client';
import useDebug from '@core/hooks/useDebug';
import { RichText } from 'prismic-reactjs';
import Link from '@components/_shared/Link';

interface Props {
	slice: SliceType
}

const AboutUs = ({slice}: Props): JSX.Element => {
	useDebug(slice);
	
	return (
		<section className="flex-cc col bg-background w-full py-10 md:py-16 xl:py-24 2xl:py-28 px-12 sm:px-13 md:px-24 lg:px-28 xl:px-32">
			<h1 className="font-bold text-primary text-2xl md:text-5xl xl:text-6xl">{slice.primary.title}</h1>
			<div className="flex-vc w-full my-8 md:my-12">
				{slice.items.map((item, index) => (
					<div className="flex-cc col gap-4" key={index}>
						<img className="max-w-[64px] md:max-w-[100px] bg-gray-200" src={item.image.url} alt={item.image.alt} />
						<p className="-md:hidden font-bold text-primary lg:text-lg xl:text-2xl 2xl:text-3xl">{item.text}</p>
					</div>
				))}
			</div>
			<div className="flex-cc -md:col gap-8 md:h-96">
				<img className="w-full md:w-5/12 h-full" src={slice.primary.image.url} alt={slice.primary.image.alt} />
				<div className="flex-cc md:flex-bs h-full col">
					<p className="text-primary-lighter text-sm md:text-lg lg:text-2xl">{RichText.asText(slice.primary.description)}</p>
					<Link href={'/about'} className="py-2 sm:py-3 md:py-4 px-4 sm:px-5 md:px-6 rounded-2xl bg-secondary font-bold text-primary text-xs sm:text-lg md:text-2xl">
						{slice.primary.button_text}
					</Link>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;