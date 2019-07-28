<?php

/*
 * Let WordPress manage the document title.
 * By adding theme support, we declare that this theme does not use a
 * hard-coded <title> tag in the document head, and expect WordPress to
 * provide it for us.
 */
add_theme_support( 'title-tag' );

//* Register Primary Menu
function register_primary_menu() {
  register_nav_menu('primary-menu',__( 'Primary Menu' ));
}
add_action( 'init', 'register_primary_menu' );

//* Add HTML5 markup structure
add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list' ) );

//* Add support for custom background
add_theme_support( 'custom-background' );

//* Enqueue Google Fonts
add_action( 'wp_enqueue_scripts', 'enqueue_scripts_styles' );
function enqueue_scripts_styles() {

    wp_enqueue_style( 'google-fonts', '//fonts.googleapis.com/css?family=Dosis:300,400,500,700', array(), CHILD_THEME_VERSION );
    wp_enqueue_style( 'main-css', get_stylesheet_directory_uri() . '/css/main.css', array(), null );
    wp_enqueue_style( 'font-awesome', '//use.fontawesome.com/releases/v5.2.0/css/all.css', array(), CHILD_THEME_VERSION );

    wp_enqueue_script( 'main-js', get_stylesheet_directory_uri() . '/js/custom/main.js', array( 'jquery' ), false, false );

}

//add acf options page
if( function_exists('acf_add_options_page') ) {

    acf_add_options_page(array(
        'page_title' 	=> 'Theme General Settings',
        'menu_title'	=> 'Theme Settings',
        'menu_slug' 	=> 'theme-general-settings',
        'capability'	=> 'edit_posts',
        'redirect'		=> false
    ));

    acf_add_options_sub_page(array(
        'page_title' 	=> 'Theme Header Settings',
        'menu_title'	=> 'Header',
        'parent_slug'	=> 'theme-general-settings',
    ));

    acf_add_options_sub_page(array(
        'page_title' 	=> 'Theme Footer Settings',
        'menu_title'	=> 'Footer',
        'parent_slug'	=> 'theme-general-settings',
    ));

}

//* Custom Styles

