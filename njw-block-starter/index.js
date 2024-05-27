/**
 * External dependencies
 */
const { join } = require( 'path' );

module.exports = {
	defaultValues: {
		slug: 'gutenpride',
		category: 'text',
		title: 'Gutenpride',
		description:
			'A Gutenberg block to show your pride! This block enables you to type text and style it with the color font Gilbert from Type with Pride.',
		dashicon: 'flag',
		attributes: {
			mode: {
				enum: [ "preview", "edit" ]
			},
			title: {
				type: "string"
			},
			images: {
				type: "object"
			}
		},
		supports: {
			html: false,
		},
	},
	variants: {
		static: {},
		dynamic: {
			attributes: {
				mode: {
					enum: [ "preview", "edit" ]
				},
				title: {
					type: "string"
				},
				images: {
					type: "object"
				}
			},
			example: {
				attributes: {
					mode : "preview",
					title : "Aremedia - Default Block"
				}
			},
			render: 'file:./render.php',
		},
	},
	pluginTemplatesPath: join( __dirname, 'plugin-templates' ),
	blockTemplatesPath: join( __dirname, 'block-templates' ),
	assetsPath: join( __dirname, 'assets' ),
};
