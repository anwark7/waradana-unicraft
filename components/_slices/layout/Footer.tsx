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
		<section className="flex-cc -md:col md:flex-bs gap-8 md:gap-0 w-full px-4 py-8 md:px-10 md:py-10 xl:px-12 xl:py-12 bg-secondary">
			<div className="flex-cc md:flex-cs -md:col w-full md:w-1/2 gap-4">
				<img className="h-[90px] md:h-[120px] xl:h-[150px] 2xl:h-[200px]" src={slice.primary.logo.url} alt={slice.primary.logo.alt} />
				<div className="flex-cc md:flex-ss col gap-2 md:gap-4">
					<h4 className="font-bold text-primary text-sm sm:text-lg xl:text-2xl">About Us</h4>
					<p className="font-medium !text-primary-lighter text-xs sm:text-base xl:text-lg text-center md:text-left">{RichText.asText(slice.primary.description)}</p>
				</div>
			</div>
			<div className="flex-cs -md:flex-cc -md:col gap-8 md:gap-4">
				<div className="flex justify-center md:justify-end col gap-4">
					<p className="font-bold text-primary text-sm sm:text-lg xl:text-2xl whitespace-nowrap text-right">Social Media</p>
					<div className="flex justify-center md:justify-end md:col">
						{slice.primary.instagram.url && 
						<Link href={slice.primary.instagram.url} className="flex-ec gap-2">
							<p className="-md:hidden !text-primary-lighter text-xs sm:text-base xl:text-lg">Instagram</p>
							<FaInstagramSquare className="text-primary" size={40}/> 
						</Link>}
						{slice.primary.twitter.url && 
						<Link href={slice.primary.twitter.url} className="flex-ec gap-2">
							<p className="-md:hidden !text-primary-lighter text-xs sm:text-base xl:text-lg">Twitter</p>
							<FaTwitterSquare className="text-primary" size={40}/>
						</Link>}
						{slice.primary.facebook.url && 
						<Link href={slice.primary.facebook.url} className="flex-ec gap-2">
							<p className="-md:hidden !text-primary-lighter text-xs sm:text-base xl:text-lg">Facebook</p>
							<FaFacebookSquare className="text-primary" size={40}/>
						</Link>}
					</div>
				</div>
				<div className="flex justify-center md:justify-end col gap-4">
					<p className="font-bold text-primary text-sm sm:text-lg xl:text-2xl text-center md:text-right">Contact</p>
					<div className="flex justify-center md:justify-end md:col">
						<Link href={`https://api.whatsapp.com/send?phone=62${(slice.primary.phone).substring(1)}`} className="flex-ec gap-2">
							<p className="-md:hidden !text-primary-lighter text-xs sm:text-base xl:text-lg">{slice.primary.phone}</p>
							<FaWhatsappSquare className="text-primary" size={40}/> 
						</Link>
						<Link href={`mailto:${slice.primary.email}`} className="flex-ec gap-2">
							<p className="-md:hidden !text-primary-lighter text-xs sm:text-base xl:text-lg">{slice.primary.email}</p>
							<MdEmail className="text-primary" size={40}/> 
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
