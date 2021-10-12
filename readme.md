# laravel-mix-todo

This extension is designed to allow you add todo to your laravel-mix chain.

## Installation

1. Require the package through `yarn` or `npm`.
    Laravel-mix will install the required dependencies as needed.

    ```bash
    yarn add laravel-mix-todo
    ```

2. Import package into your laravel webpack config file (```webpack.mix.js```).

    ```js
    require( 'laravel-mix-todo' );
    ...
    mix.todo();
    ```

Defaults may be overridden by passing an object to the mix call:

```js
mix.todo({console: false } );
```

Default config is:

```js
{
    console:         true,
    filename:        'todo.md',
    reporter:        'markdown',
    withInlineFiles: true,
}
```
