// Import types
import React from 'react';

import  {BlockMode, BlockAttribute}  from '../../app/types/BlockAttributeType';
/**
 * WordPress components that create the necessary UI elements for the block
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-components/
 */
import { TextControl, IconButton, PanelBody, } from '@wordpress/components';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */

import { useBlockProps, BlockControls, InspectorControls } from '@wordpress/block-editor';

import ServerSideRender from '@wordpress/server-side-render';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {Object}   props               Properties passed to the function.
 * @param {Object}   props.attributes    Available block attributes.
 * @param {Function} props.setAttributes Function that updates individual attributes.
 *
 * @return {WPElement} Element to render.
 */
const Edit = ( { name, attributes, setAttributes } : {name: string, attributes:BlockAttribute,  setAttributes:Function}) => {
	const blockProps = useBlockProps();

	const {mode} = attributes;

	const toggleMode = () => {
		setAttributes({
			mode: mode === BlockMode.PREVIEW? BlockMode.EDIT : BlockMode.PREVIEW
		});
	}

	const toggleText = mode === BlockMode.PREVIEW? 'Switch to Edit' : 'Switch to Preview';
	const toggleIcon = mode === BlockMode.PREVIEW? 'edit' : 'welcome-view-site';

	return (
		<div { ...blockProps }>
			<BlockControls>
				<IconButton
					className = "components-icon-button components-toolbar__control"
					label = {toggleText} icon= {toggleIcon} onClick = {toggleMode}
				/>
			</BlockControls>

			{mode === BlockMode.PREVIEW ? (
				<>
				  <p> This is preview mode ...  might come blank .. switch the mode to edit to see sample how it looks ..</p>
				  <ServerSideRender
				  	block="njw/product-cat-cover-image" // Replace with your block name
					attributes={ attributes }
				  />
				</>
			) : (
				<div>
					<div className="wp-block-cover is-light" style={{ minHeight: '450px', aspectRatio: 'unset' }}>
						<span aria-hidden="true" className="wp-block-cover__background has-lite-background-color has-background-dim"></span>

						<img src="https://dummyimage.com/16:9x1080/" className="wp-block-cover__image-background wp-post-image" alt="" style={{ objectFit: 'cover' }} loading="lazy" />
						<div className="wp-block-cover__inner-container is-layout-flow wp-block-cover-is-layout-flow">

							<div className="wp-block-group is-layout-constrained wp-container-core-group-is-layout-8 wp-block-group-is-layout-constrained">
								<h1 className="wp-block-query-title has-x-large-font-size">Category: <span> Title</span></h1>
								<div className="wp-block-term-description__placeholder"><span>Term Description</span></div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Edit;
