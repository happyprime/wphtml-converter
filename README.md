# WPHTML Converter

WPHTML is a [page](https://happyprime.github.io/wphtml-converter/) that converts WPHTML (WordPress block markup) to JS/JSON or (soon) PHP.

[https://happyprime.github.io/wphtml-converter/](https://happyprime.github.io/wphtml-converter/)

It parses WPHTML into JS/JSON with a direct [copy](https://github.com/WordPress/gutenberg/blob/b3ea2b6a80ee92f26148899455669c53ae2f49de/packages/block-serialization-default-parser/src/index.js) of Gutenberg's (GPL 2.0 or later licensed) [Block Serialization Default Parser](https://github.com/WordPress/gutenberg/tree/trunk/packages/block-serialization-default-parser).

## What is it?

When first building a template of blocks to be used as part of a block varation or other template, it is useful to do this work in the block editor. This results in markup like:

```html
<!-- wp:heading {"level":1,"style":{"spacing":{"margin":{"top":"var:preset|spacing|30"}}}} -->
<h1 class="wp-block-heading" style="margin-top:var(--wp--preset--spacing--30)">An example headline</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>An example paragraph.</p>
<!-- /wp:paragraph -->
```

When adding the template to JavaScript in an `innerBlocks` property, it needs to be formatted like:

```js
[
	'core/heading',
	{
		"level": 1,
		"style": {
			"spacing": {
				"margin": {
					"top": "var:preset|spacing|30"
				}
			}
		}
	},
	[]
],
[
	'core/paragraph',
	{},
	[]
],
```

As your templates get more complicated, so does this translation—when done manually.

So, copy some block markup, open [WPHTML Converter](https://happyprime.github.io/wphtml-converter/), paste, and click. 🕺
