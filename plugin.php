<?php
/**
 * Plugin Name:  WPHTML Converter
 * Description:  Convert WPHTML to JSON or PHP to apply block templates.
 * Version:      0.1.0
 * Plugin URI:   https://github.com/happyprime/wphtml-converter/
 * Author:       Happy Prime
 * Author URI:   https://happyprime.co
 * Text Domain:  wphtml-converter
 * Requires PHP: 7.4
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * @package wphtml-converter
 */

namespace WPHTMLConverter;

define( 'WPHTML_CONVERTER_PLUGIN_DIR', __DIR__ );
define( 'WPHTML_CONVERTER_PLUGIN_FILE', __FILE__ );

require_once __DIR__ . '/src/index.php';
