import React from 'react';
import { SliceType } from '@core/prismic/client';
import Flickity from 'react-flickity-component';


interface Props {
	slice: SliceType
}

const flickityOptions = {
	initialIndex: 1,
	wrapAround: true,
	autoPlay: 5000,
	selectedAttraction: 0.006,
	friction: 0.125,
	pauseAutoPlayOnHover: false,
	prevNextButtons: true,
	pageDots: true
};

const Caraousel = ({slice}: Props): JSX.Element => {
	
	return (
		<section className="flex-cc w-full md:w-5/12 overflow-hidden">
			<Flickity className="w-full focus:outline-none" elementType="div" options={flickityOptions}>
				{slice.items.map((item, i) => (
					<div key={i}
						style={{backgroundImage: `url(${item.product_image.url})`}}
						className="w-full pb-[100%] bg-cover bg-center">
					</div>
				))}
			</Flickity>
		</section>
	);
};

export default Caraousel;
