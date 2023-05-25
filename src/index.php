<?php
/**
 * Manage the block.
 *
 * @package wphtml-converter
 */

namespace WPHTMLConverter\Block;

add_action( 'init', __NAMESPACE__ . '\register' );
add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\alter_view_script' );

/**
 * Register the block.
 */
function register() {
	register_block_type_from_metadata( WPHTML_CONVERTER_PLUGIN_DIR . '/build' );
}

/**
 * Ensure the block's view script is output in document footer.
 */
function alter_view_script() {
	$asset_data = require WPHTML_CONVERTER_PLUGIN_DIR . '/build/view.asset.php';

	wp_register_script(
		'happyprime-wphtml-converter-script',
		plugins_url( 'build/view.js', WPHTML_CONVERTER_PLUGIN_FILE ),
		[],
		$asset_data['version'],
		true
	);
}
