import type {ITheme} from '$types/theme';
import BestDeveloper from '$data/devs/bestdeveloper';

const theme: ITheme = {
	name: 'Best Theme',
	previewUrl: 'https://bestdeveloper.github.io/BestTheme/BestTheme.theme.css',
	thumbnail: 'https://i.imgur.com/Gr8JJAv.jpg',
	developer: BestDeveloper,
	meta: {
		name: 'BestTheme',
		author: 'user#1234',
		version: '1.0.0',
		description: 'Literally the best theme ever made for Discord.',
		source: 'https://github.com/bestdeveloper/BestTheme',
	},
	imports: [
		'https://bestdeveloper.github.io/BestTheme/BestTheme.css',
	],
	fonts: ['https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap'],
	variables: [
		{
			title: 'Image',
			icon: 'Photograph',
			inputs: [
				{
					type: 'image',
					details: {
						variable: 'background-image',
						start: 'https://i.imgur.com/Gr8JJAv.jpg',
						title: 'Background image'
					}
				}
			]
		}
	]
}

export default theme;
