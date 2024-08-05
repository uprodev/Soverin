<?php

/* Page Banner Block */

function pageb_register_blocks() {
    if( ! function_exists('acf_register_block') )
        return;
    acf_register_block( array(
        'name'          => 'page_banner',
        'title'         => 'Page Banner',
        'render_template'   => 'templates/guttenberg/page_banner.php',
        'category'      => 'custom_blocks',
        'icon'          => 'welcome-view-site',
        'mode'          => 'edit',
        'keywords'      => array( 'profile', 'user', 'author' )
    ));
}
add_action('acf/init', 'pageb_register_blocks' );


/* Help Block */

function help_register_blocks() {
    if( ! function_exists('acf_register_block') )
        return;
    acf_register_block( array(
        'name'          => 'help_block',
        'title'         => 'Help Block',
        'render_template'   => 'templates/guttenberg/help_block.php',
        'category'      => 'custom_blocks',
        'icon'          => 'dashicons-editor-help',
        'mode'          => 'edit',
        'keywords'      => array( 'profile', 'user', 'author' )
    ));
}
add_action('acf/init', 'help_register_blocks' );