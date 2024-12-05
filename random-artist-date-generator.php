<?php
/*
Plugin Name: Random Artist Date Generator
Description: A plugin that generates random artist date ideas.
Version: 1.0
Author: Your Name
*/

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

// Enqueue styles and scripts
function radg_enqueue_assets() {
    // Enqueue CSS
    wp_enqueue_style(
        'radg-styles',
        plugin_dir_url(__FILE__) . 'style.css', // Path to style.css
        array(), // Dependencies
        null // No versioning
    );

    // Enqueue JavaScript
    wp_enqueue_script(
        'radg-script',
        plugin_dir_url(__FILE__) . 'script.js', // Path to script.js
        array(), // Dependencies
        null, // No versioning
        true // Load in footer
    );

    // Localize script to pass JSON URL to JavaScript
    wp_localize_script(
        'radg-script',
        'radgData', // JavaScript object name
        array(
            'jsonUrl' => plugin_dir_url(__FILE__) . 'artist-dates.json' // Path to artist-dates.json
        )
    );
}
add_action('wp_enqueue_scripts', 'radg_enqueue_assets');

// Render the generator via shortcode
function radg_render_generator() {
    ob_start(); ?>
    <section class="idea-generator">
        <div class="card">
            <h1>Random Artist Date Generator</h1>
            <button id="generateButton">Generate Idea</button>
            <p id="displayIdea">Click the button to get an idea!</p>
        </div>
    </section>
    <?php
    return ob_get_clean();
}
add_shortcode('random_artist_date_generator', 'radg_render_generator');
