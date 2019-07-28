<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Jylland Theme
 * @since 1.0
 * @version 1.2
 */

?>

		</div>

		<footer class="site-footer" role="contentinfo">
			<div class="wrap">
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
			</div>
		</footer>
	</div>
</div>
<?php wp_footer(); ?>

</body>
</html>
