
<?php
function njw_create_banner_field() {
	add_njw_category_banner_upload_field(true);
}

function njw_edit_banner_field($term){
	add_njw_category_banner_upload_field(false, $term);
}
// Add custom banner upload field to product category edit screen
function add_njw_category_banner_upload_field($create_mode, $term = null) {
	if( !empty($term) ) {
		$banner_id = get_term_meta($term->term_id, 'njw_category_banner', true);
		$banner_url = wp_get_attachment_url($banner_id);
	} else {
		$banner_id  = null;
		$banner_url = null;
	}
	$element_parent = $create_mode ? 'div' : 'tr';
	$child_element  = $create_mode ? 'div' : 'td';
	$child_first_element  = $create_mode ? 'div' : 'th';
    ?>
    <<?php echo esc_html( $element_parent ); ?> class="form-field banner-field-wrap">
        <<?php echo esc_html ( $child_first_element );?> ><label for="njw_category_banner"><?php _e('Category Banner', 'njw-blocks'); ?></label> </<?php echo esc_html ( $child_first_element )?>>
        <<?php echo esc_html ( $child_element )?> style="line-height: 60px;">
			<input type="hidden" id="njw_category_banner" name="njw_category_banner" value="<?php echo esc_attr($banner_id) ?: ''; ?>"/>
            <img src="<?php echo esc_url($banner_url) ?: ''; ?>"  id="njw_category_banner_image" style="max-width:100%;"/>
            <br/>
            <button type="button" class="button button-secondary" id="njw_category_banner_button"><?php _e('Upload/Add Banner', 'njw-blocks'); ?></button>
            <button type="button" class="button button-secondary" id="njw_category_banner_remove"><?php _e('Remove Banner', 'njw-blocks'); ?></button>
		</<?php echo esc_html ( $child_element )?>>
	</<?php echo esc_html ( $child_element )?>>
    <script>
        jQuery(document).ready(function($) {
			// Only show the "remove image" button when needed
			if ( ! jQuery( '#njw_category_banner' ).val() ) {
				jQuery( '#njw_category_banner_remove' ).hide();
			}
            // // Upload banner button functionality
			$('#njw_category_banner_button').off('click.uploadBanner').on('click.uploadBanner', function(e) {
				e.preventDefault();
				var banner = wp.media({
					title: 'Upload Banner',
					multiple: false
				}).open().on('select', function(e) {
					var uploaded_banner = banner.state().get('selection').first();
					var banner_url = uploaded_banner.toJSON().url;
					var banner_id = uploaded_banner.toJSON().id;
					$('#njw_category_banner').val(banner_id);
					$('#njw_category_banner_image').attr('src', banner_url);
					banner.close(); // Close the wp.media instance
					jQuery( '#njw_category_banner_remove' ).show();
				});
			});

            // Remove banner button functionality
            $('#njw_category_banner_remove').click(function(e) {
                e.preventDefault();
                $('#njw_category_banner').val('');
                $('#njw_category_banner_image').attr('src', '');
				jQuery( '#njw_category_banner_remove' ).hide();
            });
        });
    </script>
    <?php
}
add_action('product_cat_edit_form_fields', 'njw_edit_banner_field', 10 );
add_action('product_cat_add_form_fields', 'njw_create_banner_field', 10,  2);

// Save custom meta data when category is edited or added
function njw_save_njw_category_banner_meta_data($term_id) {
	if (isset($_POST['njw_category_banner']) && !empty($_POST['njw_category_banner'])) {
		update_term_meta($term_id, 'njw_category_banner', absint($_POST['njw_category_banner']));
	}
}
add_action('edited_product_cat', 'njw_save_njw_category_banner_meta_data', 10, 2);
add_action('create_product_cat', 'njw_save_njw_category_banner_meta_data', 10, 2);
