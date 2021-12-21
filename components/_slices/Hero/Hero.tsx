import React from 'react';
import { SliceType } from '@core/prismic/client';
import useDebug from '@core/hooks/useDebug';

interface Props {
	slice: SliceType
}

const Hero = ({slice}: Props): JSX.Element => {
	useDebug(slice);
	
	return (
		<section
			style={{backgroundImage: `url(${slice.primary.image.url})`}}
			className="flex-ce md:flex-se w-full py-12 md:py-24 lg:py-28 xl:py-32 sm:px-13 md:px-24 lg:px-28 xl:px-32 h-[380px] sm:h-[420px] md:h-screen bg-cover bg-center">
			<div className="flex-cc md:flex-cs md:w-1/2 col">
				<p className="font-bold !text-secondary text-4xl xl:text-5xl 2xl:text-6xl">
					{slice.primary.title}
				</p>
			</div>
		</section>
	);
};

export default Hero;
