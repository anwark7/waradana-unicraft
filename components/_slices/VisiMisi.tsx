import React from 'react';
import { SliceType } from '@core/prismic/client';
import useDebug from '@core/hooks/useDebug';
import { RichText } from 'prismic-reactjs';

interface Props {
	slice: SliceType
}

const VisiMisi = ({slice}: Props): JSX.Element => {
	useDebug(slice);
	
	return (
		<section 
			style={{backgroundImage: `url(${slice.primary.background_image.url})`}}
			className="flex-vs -md:col gap-8 md:gap-0 bg-background w-full py-10 md:py-16 xl:py-24 2xl:py-28 px-12 sm:px-13 md:px-24 lg:px-28 xl:px-32 bg-cover bg-center">
			<div className="flex-cc col gap-4 w-full md:w-1/3">
				<img className="h-[160px] 2xl:h-[200px]" src={slice.primary.visi_image.url} alt={slice.primary.visi_image.alt} />
				<h2 className="font-bold text-white text-2xl sm:text-4xl 2xl:text-5xl text-center">{slice.primary.visi_title}</h2>
				<div className="font-bold text-center text-white text-lg md:text-xl lg:text-2xl">
					{RichText.render(slice.primary.visi)}
				</div>
			</div>
			<div className="flex-cc col gap-4 w-full md:w-1/3">
				<img className="h-[160px] 2xl:h-[200px]" src={slice.primary.misi_image.url} alt={slice.primary.misi_image.alt} />
				<h2 className="font-bold text-white text-2xl sm:text-4xl 2xl:text-5xl text-center">{slice.primary.misi_title}</h2>
				<div className="css-force font-bold text-center text-white text-lg md:text-xl lg:text-2xl">
					{RichText.render(slice.primary.misi)}
					<style dangerouslySetInnerHTML={{
						__html: `
                            .css-force li { 
								margin-top: 2px;
                                list-style: inside;
                            }
                        `}} />
				</div>
			</div>
		</section>
	);
};

export default VisiMisi;
