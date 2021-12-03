import CustomPage, { StaticProps } from './[...customs]';
import { GetStaticPropsResult } from 'next';
import { queryByRoute, queryLayout, queryProductById } from '@core/prismic/client';

export const getStaticProps = async (): Promise<GetStaticPropsResult<StaticProps>> => {
	const content = await queryByRoute('/');
	const layout_content = await queryLayout(content.layout.uid);

	const product_id = [];

	content.body.map((slice) => {
		if (slice.slice_type === 'product_overview') {
			slice.items.map((product) => {
				product_id.push(product.product.uid);
			});
		}
		else return slice;
	});

	if (product_id.length != 0) {
		for (let i = 0; i < product_id.length; i++) {
			const index = (content.body).findIndex((item) => item.slice_type === 'product_overview');
			const fetchArticle = await queryProductById(product_id[i]);

			content.body[index].items[i].content = fetchArticle;
		}
	}
    
	return {
		props: { content, layout_content }
	};
};

export default CustomPage;
