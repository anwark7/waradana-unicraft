import React from 'react';
import { SliceType } from '@core/prismic/client';
import useDebug from '@core/hooks/useDebug';
import RenderSlice from './_renderslice';
import { RichText } from 'prismic-reactjs';

interface Props {
	slice: SliceType
}

const ProductList = ({slice}: Props): JSX.Element => {
	useDebug(slice);
	
	return (
		<section className="flex-cc col gap-16 bg-secondary w-full py-10 md:py-16 xl:py-24 2xl:py-28 px-12 sm:px-13 md:px-24 lg:px-28 xl:px-32">
			{slice.items.map((item, index) => (
				<div className="flex-vs gap-6 -md:col w-full" key={index}>
					{item.content.data.body.map((slice, index) => (
						<RenderSlice slice={slice} key={index}/>
					))}
					<div className="flex-cc md:flex-bs gap-6 col w-full md:w-7/12">
						<p className="text-primary font-bold text-4xl sm:text-5xl">
							{item.content.data.title}
						</p>
						<p className="!text-primary-lighter font-bold text-sm sm:text-base md:text-lg lg:text-2xl">
							{RichText.asText(item.content.data.description)}
						</p>
					</div>
				</div>
			))}
		</section>
	);
};

export default ProductList;
