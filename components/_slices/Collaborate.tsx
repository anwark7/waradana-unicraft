import React from 'react';
import { SliceType } from '@core/prismic/client';
import useDebug from '@core/hooks/useDebug';
import Link from '@components/_shared/Link';

interface Props {
	slice: SliceType
}

const Collaborate = ({slice}: Props): JSX.Element => {
	useDebug(slice);
	
	return (
		<section className="flex-cc col gap-4 bg-background w-full py-10 md:py-16 xl:py-24 2xl:py-28 px-12 sm:px-13 md:px-24 lg:px-28 xl:px-32">
			<h1 className="w-full text-center font-bold text-primary text-lg md:text-2xl lg:text-3xl 2xl:text-4xl">{slice.primary.text}</h1>
			<Link href={'/contact'} className="flex-cc py-2 sm:py-5 px-6 mt-10 rounded-2xl bg-primary font-bold text-secondary text-sm md:text-2xl 2xl:text-3xl">
				{slice.primary.button}
			</Link>
		</section>
	);
};

export default Collaborate;
