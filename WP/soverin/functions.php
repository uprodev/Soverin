<?php

include 'inc/enqueue.php';     // add styles and scripts
include 'inc/acf.php';         // custom acf functions
include 'inc/extras.php';      // custom functions
include 'inc/guttenberg.php';  // custom guttenberg blocks


add_action('after_setup_theme', 'theme_register_nav_menu');


function theme_register_nav_menu(){
	register_nav_menus( array(
        'main-menu' => 'header',
        'mob-menu'  => 'mobile',
       )
    );
	add_theme_support( 'post-thumbnails'); 
}


/* Custom Guttenberg Category Blocks  */

add_filter( 'block_categories_all', 'custom_block_category' );

function custom_block_category( $cats ) {

    $new = array(
        'literallyanything' => array(
            'slug'  => 'custom_blocks',
            'title' => 'Custom Blocks'
        )
    );

    $position = 0;

    $cats = array_slice( $cats, 0, $position, true ) + $new + array_slice( $cats, $position, null, true );

    $cats = array_values( $cats );

    return $cats;

}

function remove_query_strings_from_breadcrumbs($breadcrumb_trail) {

    foreach ($breadcrumb_trail->breadcrumbs as $breadcrumb) {

        $url = $breadcrumb->get_url();

        $parsed_url = wp_parse_url($url);

        if (isset($parsed_url['scheme']) && isset($parsed_url['host'])) {
            $clean_url = $parsed_url['scheme'] . '://' . $parsed_url['host'] . $parsed_url['path'];
        } else {
            $clean_url = $parsed_url['path'];
        }

        $breadcrumb->set_url($clean_url);
    }
    return $breadcrumb_trail;
}
add_filter('bcn_after_fill', 'remove_query_strings_from_breadcrumbs');

