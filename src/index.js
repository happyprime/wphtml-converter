// WordPress dependencies.
import { useBlockProps } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';
import { Disabled } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

// Internal dependencies.
import metadata from './block.json';

const Edit = () => {
	return (
		<Disabled { ...useBlockProps() }>
			<textarea name="block"></textarea>
			<button type="submit">Submit</button>
			<pre>
				<code id="result"></code>
			</pre>
		</Disabled>
	);
};

const Save = () => {
	return (
		<div { ...useBlockProps.save() } >
			<textarea name="block"></textarea>
			<button type="submit">Submit</button>
			<pre>
				<code id="result"></code>
			</pre>
		</div>
	);
};

registerBlockType( metadata, {
	edit: Edit,
	save: Save,
} );
