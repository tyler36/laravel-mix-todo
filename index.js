/* eslint-disable class-methods-use-this */

let mix = require( 'laravel-mix' );

let TodoWebpackPlugin = require( 'todo-webpack-plugin' );

/**
 * Generate TO-DO file
 *
 * return {void}
 *
 */
class TodoMixin {
    /**
     * The optional name to be used when called by Mix.
     *
     * @return {String|Array}   Name
     */
    name() {
        return ['todo'];
    }

    /**
     * All dependencies that should be installed by Mix.
     *
     * @return {Array}  Dependencies
     */
    dependencies() {
        return [
            'todo',
            'eslint-loader',
        ];
    }

    /**
     * Merge configuration with defaults
     *
     * @param {Object} settings         An object containing user configuration option overrides
     * @returns {void} false
     */
    register( settings ) {
        let defaults = {
            console:         true,
            filename:        'todo.md',
            reporter:        'markdown',
            withInlineFiles: true,
        };

        this.config = Object.assign( defaults, settings );
    }


    /**
     * Plugins to be merged with the master webpack config.
     *
     * @return {Array|Object}   Plugin
     */
    webpackPlugins() {
        return new TodoWebpackPlugin( this.config );
    }
}

mix.extend( 'todo', new TodoMixin() );
