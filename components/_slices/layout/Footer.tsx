import React from 'react';
import { SliceType } from '@core/prismic/client';
import useDebug from '@core/hooks/useDebug';
import { RichText } from 'prismic-reactjs';
import { MdEmail } from 'react-icons/md';
import { FaWhatsappSquare, FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';
import Link from '@components/_shared/Link';

interface Props {
	slice: SliceType
}

const Footer = ({slice}: Props): JSX.Element => {
	useDebug(slice);
	
	return (
		<section className="flex-bs w-full px-4 py-8 md:px-10 md:py-10 xl:px-12 xl:py-12 bg-secondary">
			<div className="flex-cs w-1/2">
				<img className="h-[90px] md:h-[120px] xl:h-[150px] 2xl:h-[200px]" src={slice.primary.logo.url} alt={slice.primary.logo.alt} />
				<div className="flex-sc col">
					<h4 className="font-bold text-primary text-sm sm:text-lg xl:text-2xl">About Us</h4>
					<p className="font-bold !text-primary-lighter text-xs sm:text-base xl:text-lg">{RichText.asText(slice.primary.description)}</p>
				</div>
			</div>
			<div className="flex-cs -sm:col gap-4">
				<div className="flex justify-end col gap-4">
					<p className="font-bold text-primary text-sm sm:text-lg xl:text-2xl whitespace-nowrap text-right">Social Media</p>
					<div className="flex justify-end md:col">
						<Link href={slice.primary.instagram.url} className="flex-ec gap-2">
							<p className="-md:hidden !text-primary-lighter text-xs sm:text-base xl:text-lg">Instagram</p>
							<FaInstagramSquare className="text-primary" size={40}/> 
						</Link>
						<Link href={slice.primary.twitter.url} className="flex-ec gap-2">
							<p className="-md:hidden !text-primary-lighter text-xs sm:text-base xl:text-lg">Twitter</p>
							<FaTwitterSquare className="text-primary" size={40}/>
						</Link>
						<Link href={slice.primary.facebook.url} className="flex-ec gap-2">
							<p className="-md:hidden !text-primary-lighter text-xs sm:text-base xl:text-lg">Facebook</p>
							<FaFacebookSquare className="text-primary" size={40}/>
						</Link>
					</div>
				</div>
				<div className="flex justify-end col gap-4">
					<p className="font-bold text-primary text-sm sm:text-lg xl:text-2xl text-right">Contact</p>
					<div className="flex justify-end md:col">
						<div className="flex-ec gap-2">
							<p className="-md:hidden !text-primary-lighter text-xs sm:text-base xl:text-lg">{slice.primary.phone}</p>
							<FaWhatsappSquare className="text-primary" size={40}/> 
						</div>
						<div className="flex-ec gap-2">
							<p className="-md:hidden !text-primary-lighter text-xs sm:text-base xl:text-lg">{slice.primary.email}</p>
							<MdEmail className="text-primary" size={40}/> 
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
