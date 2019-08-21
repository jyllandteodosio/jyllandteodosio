<?php
/**
 * The front page template file
 *
 * If the user has selected a static page for their homepage, this is what will
 * appear.
 * Learn more: https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Jylland Theme
 * @since 1.0
 * @version 1.0
 */

get_header(); ?>

<main id="main" class="site-main" role="main">

    <section class="error-section">
        <div class="wrap">
            <div class="section-title">error 404</div>
            <a class="home-link" href="<?php echo get_home_url(); ?>">Home</a>
        </div>
    </section>

</main>

<?php get_footer();
