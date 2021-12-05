import React, { useEffect, useState } from 'react';
import { SliceType } from '@core/prismic/client';
import useDebug from '@core/hooks/useDebug';
import Link from '@components/_shared/Link';
import { GiHamburgerMenu } from 'react-icons/gi';

interface Props {
	slice: SliceType
}

const Navbar = ({slice}: Props): JSX.Element => {
	useDebug(slice);
	const [onScroll, setOnScroll] = useState(false);
	const [openDropdown, setOpenDropdown] = useState(false);

	console.log(openDropdown);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY) {
				setOnScroll(true);
			} else {
				setOnScroll(false);
			}
		});
	}, []);
	
	return (
		<div className="fixed top-0 z-50 transition-all duration-200 w-full">
			<section
				className={`flex-bc 
			${onScroll ? 'bg-primary border-b-4 border-[#B4846C] text-secondary' : 'bg-transparent text-white'} 
			px-8 py-4 md:px-12 md:py-8 xl:px-16`}>
				<div className="w-16 md:w-24 h-16 md:h-24">
					<img src={slice.primary.logo.url} alt={slice.primary.logo.alt} />
				</div>
				<div className="-md:hidden flex-cc gap-12">
					<Link href={'/'} className="hover:text-[#B4846C] hover:cursor-pointer font-bold text-lg xl:text-2xl">Home</Link>
					<Link href={'/about'} className="hover:text-[#B4846C] hover:cursor-pointer font-bold text-lg xl:text-2xl">About</Link>
					<Link href={'/product'} className="hover:text-[#B4846C] hover:cursor-pointer font-bold text-lg xl:text-2xl">Product</Link>
					<Link href={'/contact'} className="hover:text-[#B4846C] hover:cursor-pointer font-bold text-lg xl:text-2xl">Contact</Link>
				</div>
				<div onClick={() => {setOpenDropdown(!openDropdown);}} className="md:hidden">
					<GiHamburgerMenu className={`${onScroll ? 'text-secondary hover:cursor-pointer' : 'text-primary hover:cursor-pointer'}`} size={40}/>
				</div>
			</section>
			<div className={`${openDropdown ? '' : '!hidden'} flex-ce col gap-4 p-4 w-full bg-secondary text-primary`}>
				<Link href={'/'} className="hover:text-[#B4846C] font-bold">Home</Link>
				<Link href={'/about'} className="hover:text-[#B4846C] font-bold">About</Link>
				<Link href={'/product'} className="hover:text-[#B4846C] font-bold">Product</Link>
				<Link href={'/contact'} className="hover:text-[#B4846C] font-bold">Contact</Link>
			</div>
		</div>
	);
};

export default Navbar;