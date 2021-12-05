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
			className="flex-cc md:flex-se w-full md:py-24 md:px-32 lg:py-28 lg:px-36 xl:py-32 xl:px-40 h-[380px] sm:h-[420px] md:h-[520px] xl:h-[620px] bg-cover bg-center">
			<div className="flex-cc md:flex-cs md:w-1/2 col">
				<p className="font-bold !text-secondary md:text-xl xl:text-4xl 2xl:text-5xl">
					{slice.primary.title}
				</p>
			</div>
		</section>
	);
};

export default Hero;
