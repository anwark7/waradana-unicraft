import React from 'react';
import { SliceType } from '@core/prismic/client';
import { MdEmail } from 'react-icons/md';
import { FaWhatsappSquare, FaMapMarkedAlt } from 'react-icons/fa';
import Link from '@components/_shared/Link';


interface Props {
	slice: SliceType
}

const ContactUs = ({slice}: Props): JSX.Element => {
	
	return (
		<section className="flex-cc col bg-background w-full py-10 md:py-16 xl:py-24 2xl:py-28 px-12 sm:px-13 md:px-24 lg:px-28 xl:px-32">
			<h1 className="w-full text-center font-bold text-primary text-3xl md:text-5xl xl:text-6xl">{slice.primary.title}</h1>
			<div className="flex-vs -sm:col w-full my-12 md:my-20">
				<Link href={`mailto:${slice.primary.email}`} className="flex-cc sm:col gap-4">
					<MdEmail className="text-primary text-[40px] md:text-[60px]"/>
					<p className="text-primary-lighter md:text-2xl w-56 text-left md:text-center">{slice.primary.email}</p>
				</Link>
				<Link href={`https://api.whatsapp.com/send?phone=62${(slice.primary.phone).substring(1)}`} className="flex-cc sm:col gap-4">
					<FaWhatsappSquare className="text-primary text-[40px] md:text-[60px]"/>
					<p className="text-primary-lighter md:text-2xl w-56 text-left md:text-center">{slice.primary.phone}</p>
				</Link>
				<div className="flex-cc sm:col gap-4">
					<FaMapMarkedAlt className="text-primary text-[40px] md:text-[60px]"/>
					<p className="text-primary-lighter md:text-2xl w-56 text-left md:text-center break-words">{slice.primary.address}</p>
				</div>
			</div>
			<Link href={'/contact'} className="flex-cc w-full py-2 sm:py-5 px-6 mt-10 rounded-2xl bg-primary font-bold text-secondary text-lg sm:text-2xl lg:text-3xl">
				{slice.primary.button_text}
			</Link>
		</section>
	);
};

export default ContactUs;
