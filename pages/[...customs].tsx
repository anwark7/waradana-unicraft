import React from 'react';
import { GetStaticPropsResult } from 'next';
import { useRouter } from 'next/router';
import { ContentType, LayoutContentType, queryByRoute, queryLayout, queryProductById } from '@core/prismic/client';
import client from '@core/prismic/client';
import Prismic from '@prismicio/client';
import DynamicLayout from '@components/_layouts/DynamicLayout';
import RenderSlice from '@components/_slices/_renderslice';

const CustomPage = ({ content, layout_content }: StaticProps): JSX.Element => {
	const router = useRouter();
	
	return (
		<DynamicLayout content={layout_content} title={content.html_title} key={router.asPath}>
			{content.body.map((slice, i) => (
				<RenderSlice slice={slice} key={i}/>
			))}
		</DynamicLayout>
	);
};

export interface StaticProps {
	content: ContentType
	layout_content: LayoutContentType
}

export const getStaticProps = async (context): Promise<GetStaticPropsResult<StaticProps>> => {
	const { customs } = context.params;
	const route = '/' + customs.join('/');
    
	const content = await queryByRoute(route);
	const layout_content = await queryLayout(content.layout.uid);

	const product_id = [];

	content.body.map((slice) => {
		if (slice.slice_type === 'product_list') {
			slice.items.map((product) => {
				product_id.push(product.product.uid);
			});
		}
		else return slice;
	});

	if (product_id.length != 0) {
		for (let i = 0; i < product_id.length; i++) {
			const index = (content.body).findIndex((item) => item.slice_type === 'product_list');
			const fetchArticle = await queryProductById(product_id[i]);

			content.body[index].items[i].content = fetchArticle;
		}
	}
    
	return {
		props: { content, layout_content },
	};
};

interface StaticPaths {
	paths: { params: { customs: string } }[] 
	fallback: false
}

export const getStaticPaths = async (): Promise<StaticPaths> => {
	const docs = await client
		.query(Prismic.Predicates.at('document.type', 'pages'))
		.then(res => res.results);
        
	const paths = docs.filter(doc => doc.data.route !== '/').map((doc) => {
		const customs = doc.data.route.split('/').filter(item => item);
		return { params: { customs } };
	});    
    
	return {
		paths: paths,
		fallback: false
	};
};

export default CustomPage;
