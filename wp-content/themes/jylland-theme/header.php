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

<!--    <body <?php body_class( 'work-detail-body' ); ?>>-->
    <body <?php body_class(); ?>>
        <div id="page" class="site">

            <header id="masthead" class="site-header" role="banner">

                <div class="wrap">
                    <h1 class="site-logo">
                        <?php echo get_field( 'banner_logo' ); ?>
                    </h1>

                    <div class="navigation-container">
                        <ul class="navigation">
                            <li class="iterator current">
                                <a class="iterator-banner">home</a>
                                <div class="current-border"></div>
                            </li>
                            <li class="iterator">
                                <a class="iterator-about">about</a>
                                <div class="current-border"></div>
                            </li>
                            <li class="iterator">
                                <a class="iterator-works">works</a>
                                <div class="current-border"></div>
                            </li>
                            <li class="iterator">
                                <a class="iterator-contact">contact</a>
                                <div class="current-border"></div>
                            </li>
                        </ul>
                    </div>

                </div>

            </header>

            <div id="content" class="site-content">
