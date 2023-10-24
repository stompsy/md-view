import { useState } from 'react';
import { Remarkable } from 'remarkable';
import { data } from '../constants';

var md = new Remarkable('commonmark', {
	html: true, // Enable HTML tags in source
	xhtmlOut: false, // Use '/' to close single tags (<br />)
	breaks: true, // Convert '\n' in paragraphs into <br>
	langPrefix: 'language-', // CSS language prefix for fenced blocks
	linkify: true, // autoconvert URL-like texts to links
	linkTarget: '_blank', // set target to open link info

	// Enable some language-neutral replacements + quotes beautification
	typographer: true,

	// Double + single quotes replacement pairs, when typographer enabled,
	// and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
	quotes: '“”‘’',
});

const Editor = () => {
	const initialMkdown = data.initialdata; // import from constants
	const [mkdown, setMkdown] = useState(initialMkdown); //set initial state with markdown from file

	return (
		<article className='flex max-md:flex-col w-full gap-4 text-white-400'>
			<div className='flex-1 w-full h-full bg-slate-800 font-montserrat rounded-md'>
				<textarea
					id='editor'
					value={mkdown}
					onChange={(e) => setMkdown(e.target.value)}
					class='p-2.5 w-full h-full text-md text-white-400 bg-slate-800 rounded-md'
					aria-label='Please enter your markdown in this textarea.'
				></textarea>
			</div>
			<div
				id='preview'
				className='flex-1 w-full h-full p-2.5 bg-slate-800 font-montserrat rounded-md text-white-300 overflow-y-scroll'
				dangerouslySetInnerHTML={{ __html: md.render(mkdown) }}
			></div>
		</article>
	);
};

export default Editor;
