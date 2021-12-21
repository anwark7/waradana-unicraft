import React, { useState } from 'react';
import { SliceType } from '@core/prismic/client';
import useDebug from '@core/hooks/useDebug';
import { MdEmail } from 'react-icons/md';
import { FaWhatsappSquare, FaMapMarkedAlt } from 'react-icons/fa';
import useForm from '@core/hooks/useForm';
import Link from '@components/_shared/Link';
import axios from 'axios';


interface Props {
	slice: SliceType
}

const Form = ({slice}: Props): JSX.Element => {
	useDebug(slice);
	const [loading, setLoading] = useState(false);

	const { form, setForm} = useForm({
		name: '',
		email: '',
		message: '',
	});

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);

		await axios
			.post(slice.primary.spreadsheet_api, {
				name: form.name,
				email: form.email,
				message: form.message,
			});
		setLoading(false);
	};
	
	return (
		<section className="flex-cc col gap-10 bg-gray-100 w-full py-10 md:py-16 xl:py-24 2xl:py-28 px-12 sm:px-13 md:px-24 lg:px-28 xl:px-32">
			<h1 className="font-bold text-primary text-5xl xl:text-6xl">{slice.primary.title}</h1>
			<div className="flex-cc -md:col w-full gap-8">
				<div className="flex-vs md:col w-full md:gap-8 md:w-1/3 my-12 md:my-20">
					<Link href={`mailto:${slice.primary.email}`}  className="flex-cc -lg:col gap-4">
						<MdEmail className="text-primary text-[50px] md:text-[60px]"/>
						<p className="-md:hidden text-primary-lighter text-lg md:text-2xl w-56 text-center">{slice.primary.email}</p>
					</Link>
					<Link href={`https://api.whatsapp.com/send?phone=62${(slice.primary.phone).substring(1)}`} className="flex-cc -lg:col gap-4">
						<FaWhatsappSquare className="text-primary text-[50px] md:text-[60px]"/>
						<p className="-md:hidden text-primary-lighter text-lg md:text-2xl w-56 text-center">{slice.primary.phone}</p>
					</Link>
					<div className="flex-cc -lg:col gap-4">
						<FaMapMarkedAlt className="text-primary text-[50px] md:text-[60px]"/>
						<p className="-md:hidden text-primary-lighter text-lg md:text-2xl w-56 text-center">{slice.primary.address}</p>
					</div>
				</div>
				<div className="w-full h-2 md:w-2 md:h-[900px] bg-primary"></div>
				<form onSubmit={handleSubmit} className="w-full flex-cc md:flex-cs col gap-8">
					<div className="w-full flex-cs col">
						<label className="mb-3 font-bold text-lg md:text-2xl lg:text-3xl text-primary" htmlFor="name">
						Name
						</label>
						<input
							className="w-full p-4 border-2 border-gray-100 rounded-xl"
							type="text"
							name="name"
							id="name"
							placeholder="Full Name"
							onChange={(e) => setForm('name', e.target.value)}
							required
						/>
					</div>
					<div className="w-full flex-cs col">
						<label className="mb-3 font-bold text-lg md:text-2xl lg:text-3xl text-primary" htmlFor="email">
						Email
						</label>
						<input
							className="w-full p-4 border-2 border-gray-100 rounded-xl"
							type="email"
							name="email"
							id="email"
							placeholder="Email"
							onChange={(e) => setForm('email', e.target.value)}
							required
						/>
					</div>
					<div className="w-full flex-cs col">
						<label className="mb-3 font-bold text-lg md:text-2xl lg:text-3xl text-primary" htmlFor="message">
						Message
						</label>
						<textarea
							className="w-full p-4 border-2 h-96 border-gray-100 rounded-xl"
							name="message"
							id="message"
							placeholder="Message"
							onChange={(e) => setForm('message', e.target.value)}
							required
						/>
					</div>
					<button
						type="submit"
						className="bg-primary mt-4 font-bold text-lg md:text-2xl lg:text-3xl text-secondary py-4 -md:py-3 px-11 -md:px-7 rounded-2xl"
						data-loading={loading}
					>
					Submit <i className="spinner"></i>
					</button>
				</form>
			</div>
		</section>
	);
};

export default Form;
