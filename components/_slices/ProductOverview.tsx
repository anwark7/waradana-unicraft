import React from 'react';
import { SliceType } from '@core/prismic/client';
import Link from '@components/_shared/Link';

interface Props {
	slice: SliceType
}

const ProductOverview = ({slice}: Props): JSX.Element => {
	
	return (
		<section className="flex-cc col bg-secondary w-full py-10 md:py-16 xl:py-24 2xl:py-28 px-6">
			<h1 className="mb-12 md:mb-16 font-bold text-primary text-center text-2xl lg:text-4xl xl:text-6xl">{slice.primary.title}</h1>
			<div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{slice.items.map((item, index) => (
					<Link href={`/product#${item.content.uid}`} 
						style={{backgroundImage: `url(${item.content.data.image.url})`}}
						className="flex-cc w-full relative pb-[100%] bg-cover bg-center" key={index}>
						<p className="absolute top-[45%] font-bold text-secondary text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
							{item.content.data.title}
						</p>
					</Link>
				))}
			</div>
			<Link href={'/product'}
				style={{backgroundImage: `url(${slice.primary.image.url})`}}
				className="flex-cc w-full h-64 mt-6 bg-cover bg-center font-bold text-secondary text-lg sm:text-2xl lg:text-4xl">
				{slice.primary.button_text}
			</Link>
		</section>
	);
};

export default ProductOverview;
