// WordPress dependencies.
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

// Internal dependencies.
import metadata from './block.json';

const Edit = () => {
	return (
		<>
			<textarea name="block" rows="5" cols="40"></textarea>
			<button type="submit">Submit</button>
			<pre>
				<code id="result"></code>
			</pre>
		</>
	);
};

const Save = () => {
	return (
		<>
			<textarea name="block" rows="5" cols="40"></textarea>
			<button type="submit">Submit</button>
			<pre>
				<code id="result"></code>
			</pre>
		</>
	);
};

registerBlockType( metadata, {
	edit: Edit,
	save: Save,
} );
