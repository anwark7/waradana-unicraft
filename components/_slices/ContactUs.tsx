import React from 'react';
import { SliceType } from '@core/prismic/client';
import useDebug from '@core/hooks/useDebug';
import { MdEmail } from 'react-icons/md';
import { FaWhatsappSquare, FaMapMarkedAlt } from 'react-icons/fa';
import Link from '@components/_shared/Link';


interface Props {
	slice: SliceType
}

const ContactUs = ({slice}: Props): JSX.Element => {
	useDebug(slice);
	
	return (
		<section className="flex-cc col bg-background w-full py-10 md:py-16 xl:py-24 2xl:py-28 px-12 sm:px-13 md:px-24 lg:px-28 xl:px-32">
			<h1 className="w-full text-center font-bold text-primary text-2xl md:text-5xl xl:text-6xl">{slice.primary.title}</h1>
			<div className="flex-vs -sm:col w-full my-12 md:my-20">
				<div className="flex-cc sm:col gap-4">
					<MdEmail className="text-primary" size={70}/>
					<p className="text-primary-lighter text-lg md:text-2xl w-56 text-center">{slice.primary.email}</p>
				</div>
				<div className="flex-cc sm:col gap-4">
					<FaWhatsappSquare className="text-primary" size={70}/>
					<p className="text-primary-lighter text-lg md:text-2xl w-56 text-center">{slice.primary.phone}</p>
				</div>
				<div className="flex-cc sm:col gap-4">
					<FaMapMarkedAlt className="text-primary" size={70}/>
					<p className="text-primary-lighter text-lg md:text-2xl w-56 text-center">{slice.primary.address}</p>
				</div>
			</div>
			<Link href={'/contact'} className="flex-cc w-full h-20 mt-10 rounded-2xl bg-primary font-bold text-secondary text-lg sm:text-2xl lg:text-3xl">
				{slice.primary.button_text}
			</Link>
		</section>
	);
};

export default ContactUs;