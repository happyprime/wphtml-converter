import { parse } from './parser.js';

{
	const parseBlock = (block) => {
		let data = `[\n\t'${block.blockName}',\n${JSON.stringify(block.attrs, null, "\t")},\n\t[`;

		block.innerBlocks?.forEach((innerBlock) => {
			data += `\n\t\t` + parseBlock(innerBlock) + `\n\t`;
		});

		data += `]\n],`;

		return data;
	};

	document.querySelector( 'button' ).addEventListener( 'click', ( evt ) => {
		evt.preventDefault();

		const blocks = parse( document.querySelector('textarea').value );
		let data = '';

		blocks.forEach( block => { data += parseBlock(block) });

		document.querySelector('#result').innerText = data;
	});
}
