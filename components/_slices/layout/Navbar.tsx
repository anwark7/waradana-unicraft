import React from 'react';
import { SliceType } from '@core/prismic/client';
import useDebug from '@core/hooks/useDebug';
import Link from '@components/_shared/Link';

interface Props {
	slice: SliceType
}

const Navbar = ({slice}: Props): JSX.Element => {
	useDebug(slice);
	
	return (
		<section
			style={{boxShadow: '0px 6px 4px #B4846C'}}
			className="flex-bc w-full bg-primary px-8 py-4 md:px-12 md:py-8 xl:px-16">
			<div className="w-16 md:w-24 h-16 md:h-24">
				<img src={slice.primary.logo.url} alt={slice.primary.logo.alt} />
			</div>
			<div className="flex-cc gap-12">
				<Link href={'/'} className="text-secondary font-bold text-lg xl:text-2xl">Home</Link>
				<Link href={'/about'} className="text-secondary font-bold text-lg xl:text-2xl">About</Link>
				<Link href={'/product'} className="text-secondary font-bold text-lg xl:text-2xl">Product</Link>
				<Link href={'/contact'} className="text-secondary font-bold text-lg xl:text-2xl">Contact</Link>
			</div>
		</section>
	);
};

export default Navbar;
