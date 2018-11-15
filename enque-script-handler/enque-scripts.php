<?php
/*
Plugin Name: rx-api-search-handler
Plugin URI:  
Description: Enqueues scripts needed for a specific page: Austin Kellum
Version: 1.0
Author URI: http://kellumdevelopments.co
*/


/*

only load the js script for a desired page, helps with performance , all unnecessary will not be loaded on the page . 
*/
function rx_api_script() {
    global $post;

    if( is_page() || is_single() )
    {
        switch($post->post_name) // post_name is the post slug which is more consistent for matching to here
        {
            case 'PAGE-SLUG':
                wp_enqueue_script('YOUR-SCRIPT-NAME', get_template_directory_uri() . 'YOUR-SCRIPT-HERE', array('jquery'), '', false);
                break;
            // case 'about-page':
            //     wp_enqueue_script('about', get_template_directory_uri() . '/js/about-page.js', array('jquery'), '', true);
            //     break;
            // case 'some-post':
            //     wp_enqueue_script('somepost', get_template_directory_uri() . '/js/somepost.js', array('jquery'), '1.6', true);
            //     break;
        }
    } 
}

add_action('wp_enqueue_scripts', 'rx_api_script');