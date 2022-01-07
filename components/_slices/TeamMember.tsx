import React from 'react';
import { SliceType } from '@core/prismic/client';
import useDebug from '@core/hooks/useDebug';
import { RichText } from 'prismic-reactjs';

interface Props {
	slice: SliceType
}

const SliceName = ({slice}: Props): JSX.Element => {
	useDebug(slice);
	return (
		<section className="flex-cc col bg-background w-full py-10 md:py-16 xl:py-24 2xl:py-28 px-12 sm:px-13 md:px-24 lg:px-28 xl:px-32">
			<h1 className="font-bold text-primary text-3xl md:text-5xl xl:text-6xl">{RichText.asText(slice.primary.section_title)}</h1>
			<div className="container flex-cc flex-wrap gap-6 mt-10 md:mt-16">
				{slice.items.map((item, index) => (
					<div className="flex-cc w-full md:w-1/4 col" key={index}>
						<img className="mb-6" src={item.member.url} alt="" />
						<p className="mb-2 text-primary font-bold text-xl sm:text-2xl md:text-3xl xl:text-4xl">{item.name}</p>
						<p className="text-primary-lighter font-bold text-lg sm:text-xl md:text-2xl">{item.position}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default SliceName;
