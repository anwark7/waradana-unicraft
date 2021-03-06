import Prismic from '@prismicio/client';

const apiEndpoint = process.env.PRISMIC_API;
const accessToken = process.env.NEXT_PUBLIC_PRISMIC_TOKEN || '';

const client = Prismic.client(apiEndpoint, { accessToken });

export const queryByRoute = (route: string): Promise<ContentType> => {
	return client
		.query(Prismic.Predicates.at('my.pages.route', route))
		.then((res) => res.results[0].data)
		.catch(() => null);
};

export const queryLayout = (uid: string): Promise<LayoutContentType> => {
	return client
		.query(Prismic.Predicates.at('my.layout.uid', uid))
		.then((res) => res.results[0].data)
		.catch(() => null);
};

export const queryProductById = (uid: string): Promise<LayoutContentType> => {
	return client
		.query(Prismic.Predicates.at('my.products.uid', uid))
		.then((res) => res.results[0])
		.catch(() => null);
};

export default client;

export interface SliceType {
	items: any[];
	primary: any;
	slice_label?: any;
	slice_type: string;
}

export interface ContentType {
	html_title: string;
	route: string;
	body: SliceType[];
	layout: { uid: string };
}

export interface LayoutContentType {
	body: SliceType[];
}
