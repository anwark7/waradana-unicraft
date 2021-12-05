import React from 'react';
import { SliceType } from '@core/prismic/client';
import useDebug from '@core/hooks/useDebug';
import { RichText } from 'prismic-reactjs';
import Link from '@components/_shared/Link';

interface Props {
	slice: SliceType
}

const History = ({slice}: Props): JSX.Element => {
	useDebug(slice);
	
	return (
		<section className="flex-cc col bg-background w-full py-10 md:py-16 xl:py-24 2xl:py-28 px-12 sm:px-13 md:px-24 lg:px-28 xl:px-32">
			<h1 className="font-bold text-primary text-3xl md:text-5xl xl:text-6xl">{slice.primary.title}</h1>
			<div className="flex-cc w-full -md:col gap-8 my-16 md:h-96">
				<div 
					style={{backgroundImage: `url(${slice.primary.image.url})`}}
					className="w-full md:w-1/2 h-full -md:pb-[100%] bg-cover bg-center">
				</div>
				<div className="w-full flex-cc md:flex-bs h-full col">
					<p className="text-primary-lighter text-sm md:text-lg lg:text-2xl">{RichText.asText(slice.primary.description)}</p>
				</div>
			</div>
		</section>
	);
};

export default History;
