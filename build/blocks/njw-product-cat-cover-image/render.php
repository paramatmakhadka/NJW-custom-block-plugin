<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

// Get the current product taxonomy title
$taxonomy = get_queried_object();

// Get the custom meta category_banner
$category_banner_id = get_term_meta($taxonomy->term_id, 'njw_category_banner', true);

// Get the image URL from the image ID
$category_banner_url = wp_get_attachment_url($category_banner_id);

ob_start(); // Start output buffering
?>
	<!-- wp:cover {"url":"<?php echo esc_url($category_banner_url); ?>", "overlayColor": "lite", "minHeight":450,"isDark":false} -->
	<div class="wp-block-cover is-light">
		<span aria-hidden="true" class="wp-block-cover__background has-lite-background-color has-background-dim"></span>
		<img src="<?php echo esc_url($category_banner_url); ?>" class="wp-block-cover__image-background wp-post-image" alt="" data-object-fit="cover" decoding="async" loading="lazy">
		<div class="wp-block-cover__inner-container">
			<!-- wp:group {"style":{"spacing":{"blockGap":"40px"}},"layout":{"inherit":true}} -->
			<div class="wp-block-group">
				<!-- wp:query-title {"type":"archive","fontSize":"x-large"} /-->

				<!-- wp:term-description {"fontSize":"medium"} /-->
			</div>
			<!-- /wp:group -->
		</div>
	</div>
	<!-- /wp:cover -->

	<?php
	$content = ob_get_clean(); // Get the stored output and clean the buffer
	echo do_blocks($content); // Run do_blocks() on the stored value
?>
