import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://stargazers.club',
	integrations: [
		starlight({
			title: 'App-Attack',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Penetration Testing Learning Resources',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Installing VirtualBox and Pentest Distro', link: '/guides/pentest/installing-vm' },
						{label: 'Getting Started', link: '/guides/pentest/getting-started'},
						{label: 'Burp Suite', link: '/guides/pentest/burp-suite'},
						{label: 'Practice & Additional Resources', link: '/guides/pentest/practice-additional-resources'}
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
