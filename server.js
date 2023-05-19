import express from 'express';
import { parse } from '@wordpress/block-serialization-spec-parser';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

const parseBlock = (block) => {
	let data = `[\n\t'${block.blockName}',\n${JSON.stringify(block.attrs, null, "\t")},\n\t[`;

	block.innerBlocks.forEach((innerBlock) => {
		data += `\n\t\t` + parseBlock(innerBlock) + `\n\t`;
	});

	data += `]\n],`;

	return data;
}

app.use(express.urlencoded( { extended: true } ));
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
});

app.post('/process', function (req, res) {
	const blocks = parse(req.body.block);
	let data = '';

	blocks.forEach( block => { data += parseBlock(block) });

	res.send(data);
});

app.listen(3000);
