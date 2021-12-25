import React, { useEffect, useState } from 'react';
import { SliceType } from '@core/prismic/client';
import Link from '@components/_shared/Link';
import { GiHamburgerMenu } from 'react-icons/gi';

interface Props {
	slice: SliceType
}

const Navbar = ({slice}: Props): JSX.Element => {
	const [onScroll, setOnScroll] = useState(false);
	const [openDropdown, setOpenDropdown] = useState(false);

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
			py-4 md:py-5 px-12 sm:px-13 md:px-24 lg:px-28 xl:px-32`}>
				<Link href={'/'} className="h-16 md:h-20">
					<img className="h-full" src={slice.primary.logo.url} alt={slice.primary.logo.alt} />
				</Link>
				<div className="-md:hidden flex-cc gap-12">
					<Link href={'/'} className="hover:text-[#B4846C] hover:cursor-pointer font-bold text-lg 2xl:text-xl">Home</Link>
					<Link href={'/about'} className="hover:text-[#B4846C] hover:cursor-pointer font-bold text-lg 2xl:text-xl">About</Link>
					<Link href={'/product'} className="hover:text-[#B4846C] hover:cursor-pointer font-bold text-lg 2xl:text-xl">Product</Link>
					<Link href={'/contact'} className="hover:text-[#B4846C] hover:cursor-pointer font-bold text-lg 2xl:text-xl">Contact</Link>
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