// ─────────────────────────────────────────────────────────────
// neuros.is: everything editable lives here.
// Rule of thumb: if it isn't true yet, it should read as a placeholder.
// Allowed personal info: name, email, GitHub, avatar, vCard. Nothing else.
// ─────────────────────────────────────────────────────────────
export type NavItem = { href: string; label: string };

export const site = {
	name: 'Charlie Syvertsen',
	domain: 'neuros.is',
	url: 'https://neuros.is',
	email: 'contact@neuros.is',
	github: 'https://github.com/charlie-horse',
	githubLabel: 'github.com/charlie-horse',
	vcard: '/contact.vcf',
	avatar: '/avatar.jpg',
	avatarAlt:
		'Charlie Syvertsen crouched on a concrete ledge in front of a graffiti-covered wall, hand pressed to face, deep in thought.',
	description: 'The personal site of Charlie Syvertsen. Currently overthinking what goes here.',
	tagline: 'Built to be overthought.',

	nav: [
		{ href: '/about', label: 'About' },
		{ href: '/now', label: 'Now' },
		{ href: '/contact', label: 'Contact' }
	] satisfies NavItem[],

	home: {
		kicker: 'Fig. 01 — A personal site',
		lead: 'The personal site of Charlie Syvertsen. Currently overthinking what goes here.',
		posterCaption: 'Fig. 02 — Subject, mid-overthink.',
		slabs: [
			{
				n: '01',
				href: '/about',
				title: 'About',
				blurb: 'The short version. Drafted, redrafted, redrafted again.'
			},
			{
				n: '02',
				href: '/now',
				title: 'Now',
				blurb: 'What’s on the mind lately. Placeholder, obviously.'
			},
			{
				n: '03',
				href: '/contact',
				title: 'Contact',
				blurb: 'Email, GitHub, and a card you can save.'
			}
		]
	},

	// First line is prerendered; the rest appear via the JS-only "Overthink it" button.
	statusLines: [
		'Still deciding on a status.',
		'Reconsidering the previous status.',
		'Status pending further rumination.',
		'Have you tried not thinking about it? Me neither.',
		'Back to the first one. It was fine, actually.'
	],

	about: {
		kicker: 'Fig. 03 — About',
		lead: 'Hi, I’m Charlie Syvertsen.',
		draftLabel: 'Draft 0.1 — pending further thought',
		// PLACEHOLDER: replace with a real bio when ready.
		paragraphs: [
			'This is where a proper bio will go, once I’ve finished deciding what to put in it.',
			'For now: the domain is a pun, the photo is sincere, and the site is a work in progress.'
		],
		colophon:
			'Built with SvelteKit, hosted on GitHub Pages, set in Bricolage Grotesque and IBM Plex Mono. No trackers, no cookies, no analytics.'
	},

	dictionary: {
		headword: 'neu·ro·sis',
		pronunciation: '/n(j)ʊˈroʊ.sɪs/',
		pos: 'n.',
		senses: [
			'A tendency to think about something, then think about having thought about it.',
			'A personal website that has been almost ready for a while.',
			'neuros.is: the domain of Charlie Syvertsen. Say it out loud. Yes, it’s on purpose.'
		],
		notFoundSense: 'The persistent belief that this page exists.'
	},

	// PLACEHOLDER /now page: update `updated` (ISO date) and `items` whenever.
	now: {
		kicker: 'Fig. 04 — Now',
		lead: 'What I’m thinking about at the moment (and then thinking about again).',
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
		title: 'Say hello',
		lead: 'Email is the fastest way to reach me. Replies may be overthought.',
		vcardNote: 'Adds me to your address book. Contains: name, email, website, photo.'
	},

	notFound: {
		title: 'This page is all in your head.',
		body: 'Or it moved, or it never existed. Hard to say. We could think about it for hours.',
		errorTitle: 'Something went wrong.',
		errorBody: 'Not your fault. Probably.'
	}
} as const;
