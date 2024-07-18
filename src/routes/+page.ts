import cover0 from './0.jpg';
import cover1 from './1.jpg';
import cover2 from './2.jpg';
import cover3 from './3.jpg';
import cover4 from './4.jpg';
import cover5 from './5.jpg';

// This file is not part of the template.
// It is used to prerender the demo page.
export const prerender = true;

const releases = [
	{
		name: 'Lay It On Me',
		cover: cover5,
		color: '#BC8091',
		spotify: '7GbY6kNMYLAkJzxUcUq7n3'
	},
	{
		name: 'Affectionate',
		cover: cover4,
		color: '#282331',
		spotify: '1YTj33nCCjZxaPc2RZIjE0'
	},
	{
		name: 'Yours, Truly',
		cover: cover3,
		color: '#7C6874',
		spotify: '4eB2YfdivTrZjzSeQ4NB23'
	},
	{
		name: 'Candid',
		cover: cover2,
		color: '#9E8059',
		spotify: '27JqYhGZhbw4R64Ce7v1tg'
	},
	{
		name: 'Your Eyes',
		cover: cover1,
		color: '#717888',
		spotify: '1mTBvp0QIKjOD9KnxcFEDD'
	},
	{
		name: 'Synthetic Heart',
		cover: cover0,
		color: '#859FB0',
		spotify: '1uD8IR3fuDcIPWgvA1KS7c'
	}
];

export const load = () => ({ releases });
