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
			className="flex-cc md:flex-se w-full md:py-24 md:px-32 lg:py-28 lg:px-36 xl:py-32 xl:px-40 h-[280px] sm:h-[320px] md:h-[420px] xl:h-[520px] bg-cover bg-center">
			<div className="flex-cc md:flex-cs md:w-1/2 col">
				<p className="font-bold text-primary text-md md:text-xl xl:text-4xl 2xl:text-5xl">
					{slice.primary.heading}
				</p>
				<p className="font-bold !text-secondary md:lg xl:text-3xl 2xl:text-4xl">
					{slice.primary.description}
				</p>
			</div>
		</section>
	);
};

export default HomeHero;
