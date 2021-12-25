import React from 'react';
import { SliceType } from '@core/prismic/client';
import { RichText } from 'prismic-reactjs';
import Link from '@components/_shared/Link';

interface Props {
	slice: SliceType
}

const AboutUs = ({slice}: Props): JSX.Element => {
	
	return (
		<section className="flex-cc col bg-background w-full py-10 md:py-16 xl:py-24 2xl:py-28 px-12 sm:px-13 md:px-24 lg:px-28 xl:px-32">
			<h1 className="font-bold text-primary text-3xl md:text-5xl xl:text-6xl">{slice.primary.title}</h1>
			<div className="flex-vc w-full my-8 md:my-12">
				{slice.items.map((item, index) => (
					<div className="flex-cc col gap-4" key={index}>
						<img className="max-w-[64px] md:max-w-[100px]" src={item.image.url} alt={item.image.alt} />
						<p className="-md:hidden font-bold text-primary lg:text-lg xl:text-2xl 2xl:text-3xl">{item.text}</p>
					</div>
				))}
			</div>
			<div className="flex-cc -md:col gap-8 md:h-96">
				<div 
					style={{backgroundImage: `url(${slice.primary.image.url})`}}
					className="w-full md:w-10/12 h-full -md:pb-[100%] bg-cover bg-center">
				</div>
				<div className="w-full flex-cc md:flex-bs gap-4 md:gap-0 h-full col">
					<p className="text-primary-lighter text-sm md:text-lg lg:text-2xl">{RichText.asText(slice.primary.description)}</p>
					<Link href={'/about'} className="py-2 sm:py-3 px-4 sm:px-5 md:px-8 rounded-2xl bg-secondary font-bold text-primary text-xs sm:text-lg md:text-2xl">
						{slice.primary.button_text}
					</Link>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
