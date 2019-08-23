<?php
/**
 *
 * Template Name: Home
 *
 */
get_header(); ?>

<main id="main" class="site-main" role="main">

    <section class="transition-section vh100">
        <div class="logo-intro-wrap">
            <div class="logo-intro">jt</div>
            <div class="logo-intro-bg"></div>
        </div>
        <div class="scroll-text">SCROLL</div>
        <div class="scroll-line"></div>
    </section>

    <section class="banner-section" id="home">
        <div class="wrap vh100">
            <div class="banner-container">
                <div class="banner-logo">
                    <?php echo get_field('banner_logo'); ?>
                </div>

                <p class="banner-subtitle">
                    <?php echo get_field('banner_subtitle'); ?>
                </p>
            </div>
        </div>
    </section>

    <section class="about-section" id="about">
        <div class="wrap vh100">
            <div class="about-wrap">
                <h2 class="section-title">
                    <div class="about-title-wrap">about</div>
                </h2>
                <div class="about-container">
                    <p><?php echo get_field('about_content'); ?></p>
                </div>
            </div>
        </div>
    </section>

    <section class="works-section" id="works">
        <div class="wrap vh100">
            <div class="works-container">
                <h2 class="section-title">
                    <div class="works-title-wrap" id="works-title">works</div>
                </h2>
                <div class="works-wrap">

                    <?php 

                    $works_query = new WP_Query( array( 
                        'post_type' => 'work',
                        'order' => 'ASC',
                        'orderby' => 'date',
                        'nopaging' => true
                    ) );

                    if( $works_query->have_posts() ):
                    while( $works_query->have_posts() ): $works_query->the_post();
                    ?>

                    <div class="works-item" id="<?php echo get_the_ID();?>">
                        <div class="works-title">
                            <h3 id="<?php echo get_the_ID();?>"><?php echo get_the_title(); ?></h3>
                            <div class="works-border"></div>
                        </div>
                    </div>

                    <?php

                    endwhile;
                    wp_reset_postdata();

                    endif;

                    ?>
                </div>
            </div>
        </div>
    </section>

    <section class="work-transition vh100"></section>

    <?php 
    if( $works_query->have_posts() ):
    while( $works_query->have_posts() ): $works_query->the_post();
    ?>

    <section class="work-detail vh100" id="work-<?php echo get_the_ID();?>">

        <div class="work-detail-nav">

            <div class="work-detail-logo">jt</div>
            <div class="work-detail-back">
                <a class="works-back">works</a>
            </div>

        </div>

        <div class="wrap">

            <div class="work-detail-container">
                <h2 class="work-detail-title"><?php echo get_the_title(); ?></h2>

                <div class="work-detail-content">

                    <div class="detail-content">
                        <?php if( get_field( 'work_type' ) ): ?>
                        <label class="work-label type-label">Type</label>
                        <div class="work-detail-list type-list">
                            <?php echo get_field( 'work_type' ); ?>
                        </div>
                        <?php endif; ?>
                    </div>

                    <div class="detail-content">
                        <?php if( get_field( 'work_role' ) ): ?>
                        <label class="work-label role-label">Role</label>
                        <div class="work-detail-list role-list">
                            <?php echo get_field( 'work_role' ); ?>
                        </div>
                        <?php endif; ?>
                    </div>

                </div>

                <?php if( get_field( 'work_link', get_the_ID() ) ): ?>
                <a class="work-detail-link" href="<?php echo get_field('work_link', get_the_ID()); ?>" target="_blank">Visit Site <i class="fas fa-arrow-right"></i></a>
                <?php endif; ?>
            </div>

            <div class="work-detail-image">

                <?php 
                if( have_rows( 'work_images' ) ): 
                while( have_rows( 'work_images' ) ): the_row();
                ?>

                <img class="work-image" src="<?php echo get_sub_field('work_image', get_the_ID()); ?>" alt="<?php echo get_the_title(); ?>"/>

                <?php
                endwhile;
                endif;
                ?>

            </div>

        </div>

    </section>

    <?php

    endwhile;
    wp_reset_postdata();

    endif;
    ?>

    <section class="contact-section" id="contact">
        <div class="wrap vh100">
            <div class="contact-wrap">
                <h2 class="section-title">
                    <div class="contact-title-wrap">contact</div>
                </h2>
                <div class="contact-container">
                    <?php echo get_field('contact_content'); ?>
                </div>
            </div>
            <div class="contact-social-wrap">
                <ul class="contact-social">
                    <li>
                        <a href="<?php echo get_field('contact_linkedin');?>" target="_blank" class="social social-linkedin">
                            <i class="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="<?php echo get_field('contact_instagram');?>" target="_blank" class="social social-instagram">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="<?php echo get_field('contact_dribble');?>" target="_blank" class="social social-dribbble">
                            <i class="fab fa-dribbble"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>

</main>

<?php get_footer();