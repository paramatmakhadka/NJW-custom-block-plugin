# NJW Blocks

Contributors: The NJW Team
Tags: block, WordPress
Tested up to: 6.1
Stable tag: 1.0.0
License: GPL-2.0-or-later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

## Description

NJW Blocks is a WordPress plugin that allows you to create custom blocks using React. It provides an easy way to extend the functionality of your WordPress site by adding custom blocks with various features.

This plugin comes with a default product category cover banner block. This block allows you to showcase your product categories with a visually appealing cover banner.

## Installation

To install the NJW Blocks plugin, follow these steps:

1. Upload the plugin files to the `/wp-content/plugins/njw-blocks` directory.
2. Activate the plugin through the 'Plugins' screen in WordPress.

## Frequently Asked Questions

### How do I create a custom block?

To create a custom block using NJW Blocks, follow these steps:

1. Install and activate the NJW Blocks plugin.
2. Go to the WordPress admin dashboard and navigate to the "Blocks" section.
3. Click on the "Add New" button to create a new block.
4. Select `NJW - Product Category Banner` block and add on product category template for block theme.
5. Save the the new template and visit product category archive to see if the block is working as expected.

### How can I customize the default product category cover banner block?

To customize the default product category cover banner block, follow these steps:

1. Install and activate the NJW Blocks plugin.
2. Go to the WordPress admin dashboard and navigate to the "Blocks" section.
3. Find the "Product Category Cover Banner" block and click on it to edit.
4. Modify the block settings, such as the category selection and banner image.
5. Save the block and update your WordPress site to see the changes.


## Usage

To run the script, you can use the following commands:

- `num install` : This command install all dependency like `wp-scripts` which is used to build the script. 
- `npm run build`: This command will build the project using the `wp-scripts build` script.
- `npm run format`: This command will format the project using the `wp-scripts format` script.
- `npm run lint:css`: This command will lint the CSS files using the `wp-scripts lint-style` script.
- `npm run lint:js`: This command will lint the JavaScript files using the `wp-scripts lint-js` script.
- `npm run packages-update`: This command will update the packages using the `wp-scripts packages-update` script.
- `npm run create:block`: This command will create a new block using the `wp-scripts create:block` script.
- `npm run plugin-zip`: This command will create a zip file of the plugin using the `wp-scripts plugin-zip` script.
- `npm run start`: This command will start the project using the `wp-scripts start` script.

Make sure you have the required dependencies installed before running these commands.

## Changelog

### 1.0.0

- Initial release of NJW Blocks plugin.

## License

NJW Blocks is licensed under the GPL-2.0-or-later license. For more details, please visit [https://www.gnu.org/licenses/gpl-2.0.html](https://www.gnu.org/licenses/gpl-2.0.html).
