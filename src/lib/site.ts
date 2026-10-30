export type NavItem = { href: string; label: string }

export const site = {
	name: 'Charlie Syvertsen',
	domain: 'neuros.is',
	url: 'https://neuros.is',
	email: 'placeholder@neuros.is',
	github: 'https://github.com/charlie-horse',
	githubLabel: 'github.com/charlie-horse',
	vcard: '/contact.vcf',
	avatar: '/avatar.jpg',
	avatarAlt:
		'Charlie crouched on a concrete ledge in front of a graffiti-covered wall, hand pressed to face, deep in thought.',
	description: 'The personal site of Charlie Syvertsen.',
	tagline: 'Damn you, Freud.',

	nav: [
		{ href: '/about', label: 'About' },
		{ href: '/now', label: 'Now' },
		{ href: '/contact', label: 'Contact' }
	] satisfies NavItem[],

	home: {
		kicker: 'Fig. 01 — A personal site',
		lead: 'My personal site/cloud/timesink.',
		posterCaption: 'Fig. 02 — Me!',
		slabs: [
			{
				n: '01',
				href: '/about',
				title: 'About',
				blurb: 'The short version.'
			},
			{
				n: '02',
				href: '/now',
				title: 'Now',
				blurb: 'What’s on the mind lately.'
			},
			{
				n: '03',
				href: '/contact',
				title: 'Contact',
				blurb: 'Email, GitHub, and a card you can save.'
			}
		]
	},

	statusLines: [
		'Still deciding on a status.',
		'Reconsidering the previous status.',
		'Status pending further rumination.',
		'Back to the first one. It was fine, actually.'
	],

	about: {
		kicker: 'Fig. 03 — About',
		lead: 'Hi, I’m Charlie Syvertsen.',
		draftLabel: 'Draft 0.1 — pending further thought',
		paragraphs: [
			'This is where a proper bio will go, once I’ve finished deciding what to put in it.',
			'For now, the site is a work in progress.'
		],
		colophon:
			'Built with SvelteKit, hosted on GitHub Pages, set in Bricolage Grotesque and IBM Plex Mono. No trackers, no cookies, no analytics.'
	},

	dictionary: {
		headword: 'neu·ro·sis',
		pronunciation: '/n(j)ʊˈroʊ.sɪs/',
		pos: 'n.',
		senses: [
			'A mental disorder, less severe than psychosis, marked by anxiety or fear',
			'A massive-scale personal cloud that has been ready to build forever. No real progress though.'
		],
		notFoundSense: 'The persistent belief that this page exists.'
	},

	// PLACEHOLDER /now page: update `updated` (ISO date) and `items` whenever.
	now: {
		kicker: 'Fig. 04 — Now',
		lead: 'What I’m thinking about at the moment.',
		updated: '2026-10-30',
		items: [
			'Building this website.',
			'Picking a status for the homepage. (See: homepage.)',
			'[Something else, to be determined.]'
		],
		note: 'This is a /now page: a short, occasionally updated list. Contents are placeholders until further notice.'
	},

	contact: {
		kicker: 'Fig. 05 — Contact',
		title: 'Hi!',
		lead: 'Email is the fastest way to reach me, but no guarantees.',
		vcardNote:
			'Adds me to your address book. Contains: name, email, website, photo.'
	},

	notFound: {
		title: "This page doesn't exist.",
		body: "Should it? I'm not sure, I dont remember making it...",
		errorTitle: 'Something went wrong.',
		errorBody: 'Not your fault. Probably.'
	}
} as const
