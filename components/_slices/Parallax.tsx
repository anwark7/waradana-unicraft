import React from 'react';
import { SliceType } from '@core/prismic/client';

interface Props {
	slice: SliceType
}

const Parallax = ({slice}: Props): JSX.Element => {
	
	return (
		<section 
			style={{backgroundImage: `url(${slice.primary.image.url})`}}
			className="flex-cc w-full h-52 sm:h-72 md:h-80 lg:h-[460px] bg-cover bg-center bg-fixed px-10 sm:px-28 md:px-36 lg:px-44 xl:px-72">
			<p className="font-bold text-white text-center text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl">{slice.primary.text}</p>
		</section>
	);
};

export default Parallax;
