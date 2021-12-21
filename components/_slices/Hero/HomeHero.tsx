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
			className="flex-ce md:flex-se w-full py-12 md:py-24 lg:py-28 xl:py-32 sm:px-13 md:px-24 lg:px-28 xl:px-32 h-[380px] sm:h-[420px] md:h-screen bg-cover bg-center">
			<div className="flex-cc md:flex-cs gap-2 md:w-2/3 col">
				<p className="font-bold text-primary -md:text-center -md:px-16 text-xl md:text-2xl xl:text-5xl 2xl:text-6xl">
					{slice.primary.heading}
				</p>
				<p className="lg:w-3/4 font-bold !text-secondary -md:text-center -md:px-10 md:text-lg xl:text-3xl 2xl:text-4xl">
					{slice.primary.description}
				</p>
			</div>
		</section>
	);
};

export default HomeHero;
