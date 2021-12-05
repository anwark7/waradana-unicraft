import React from 'react';
import { SliceType } from '@core/prismic/client';
import useDebug from '@core/hooks/useDebug';

interface Props {
	slice: SliceType
}

const HomeHero = ({slice}: Props): JSX.Element => {
	useDebug(slice);
	
	return (
		<section
			style={{backgroundImage: `url(${slice.primary.image.url})`}}
			className="flex-cc md:flex-se w-full md:py-24 md:px-32 lg:py-28 lg:px-36 xl:py-32 xl:px-40 h-[380px] sm:h-[420px] md:h-[520px] xl:h-[620px] bg-cover bg-center">
			<div className="flex-cc md:flex-cs md:w-2/3 lg:w-1/2 col">
				<p className="font-bold text-primary -md:text-center -md:px-16 text-xl md:text-2xl xl:text-5xl 2xl:text-6xl">
					{slice.primary.heading}
				</p>
				<p className="font-bold !text-secondary -md:text-center -md:px-10 md:text-lg xl:text-3xl 2xl:text-4xl">
					{slice.primary.description}
				</p>
			</div>
		</section>
	);
};

export default HomeHero;
