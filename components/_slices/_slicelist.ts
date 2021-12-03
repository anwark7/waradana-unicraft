// Your slice_type (snake_case) must be the same with the Component's name (PascalCase)
// example: 'hero_landing' will render <HeroLanding />

import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Hero from './Hero/Hero';
import HomeHero from './Hero/HomeHero';
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';
import Parallax from './Parallax';
import ProductOverview from './ProductOverview';

// Don't forget to register your components below

export default {
	Navbar,
	Footer,
	HomeHero,
	Hero,
	AboutUs,
	ContactUs,
	Parallax,
	ProductOverview,
};
