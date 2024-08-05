<?php

add_action( 'wp_enqueue_scripts', 'add_styles' );
add_action( 'wp_enqueue_scripts', 'add_scripts' );

function add_styles() {
    wp_enqueue_style('normalize', get_template_directory_uri().'/css/normalize.css');
    wp_enqueue_style('font', get_template_directory_uri().'/css/font.css');
    wp_enqueue_style('fa5pro', get_template_directory_uri().'/fonts/FA5PRO-master/css/all.css');
    wp_enqueue_style('styles', get_template_directory_uri().'/css/styles.css', array(), rand(1111, 9999));
    wp_enqueue_style('responsive', get_template_directory_uri().'/css/responsive.css', array(), rand(1111, 9999));
    wp_enqueue_style( 'theme', get_stylesheet_uri() );

}

function add_scripts() {

    wp_enqueue_script( 'fixtojs', get_template_directory_uri() . '/js/fixto.min.js', array('jquery'), false, true);
    wp_enqueue_script( 'script', get_template_directory_uri() . '/js/script.js', array('jquery'), rand(1111, 9999), true);


}