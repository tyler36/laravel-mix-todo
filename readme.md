# laravel-mix-todo

This extension is designed to allow you add todo to your laravel-mix chain.

## Installation
1. Require the package through ```yarn``` or ```npm```.
Laravel-mix will install the required dependencies as needed.
```
yarn add laravel-mix-todo
```

2. Import package into your laravel webpack config file (```webpack.mix.js```) and call it.
```
require( 'laravel-mix-todo' );
...
mix.todo();
```

Defaults may be overridden by passing an object to the mix call:
```
mix.todo({console: false } );
```

Default config is:
```
{
    console:         true,
    filename:        'todo.md',
    reporter:        'markdown',
    withInlineFiles: true,
}
```
