
# Ruby-Fox Custom

This is a heavily customised dark mode variant of the original Ruby theme supplied by Ghost.

**Demo: https://foxblog.click**

# Ruby

A multi-column [Ghost](https://github.com/TryGhost/Ghost) theme with a unique card layout. Make your publication more organized with cards and widgets. https://ruby.ghost.io

# Added Features

1. Use the tag `#pinned` to make a post pinned in front of all other posts
2. Use the tag `#pinned8` to make a post pinned in the 8th position of the blog, creating a nice appearance of opposing feature posts

# Instructions

1. Navigate to the `/content/themes` folder in your ghost installation
2. Clone this repository
3. Log into Ghost, and go to the `Design` settings area to select the theme `ruby-fox`

# Development

Styles are compiled using Gulp/PostCSS to polyfill future CSS spec. You'll need [Node](https://nodejs.org/), [Yarn](https://yarnpkg.com/) and [Gulp](https://gulpjs.com) installed globally. After that, from the theme's root directory:

```bash
# Install
yarn

# Run build & watch for changes
yarn dev
```

Now you can edit `/assets/css/` files, which will be compiled to `/assets/built/` automatically.

The `zip` Gulp task packages the theme files into `dist/ruby.zip`, which you can then upload to your site.

```bash
yarn zip
```

# Copyright & License

Copyright (c) 2013-2024 Ghost Foundation - Released under the [MIT license](LICENSE).

Far Fox Ache
