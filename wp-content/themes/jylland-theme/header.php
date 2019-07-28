<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Jylland Theme
 * @since 1.0
 * @version 1.0
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js no-svg">
    <head>
        <meta charset="<?php bloginfo( 'charset' ); ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="profile" href="http://gmpg.org/xfn/11">

        <?php wp_head(); ?>
    </head>

    <body <?php body_class(); ?>>
        <div id="page" class="site">

            <header id="masthead" class="site-header" role="banner">

                <?php if ( has_nav_menu( 'primary-menu' ) ) : ?>
                <div class="navigation-top">
                    <div class="wrap">
                        <?php wp_nav_menu( array(
                            'theme_location' => 'primary-menu',
                            'menu_id'        => 'primary-menu',
                        ) ); ?>
                    </div>
                </div>
                <?php endif; ?>

            </header>

            <div class="site-content-contain">
                <div id="content" class="site-content">
