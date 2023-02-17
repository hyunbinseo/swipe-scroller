# Swipe Scroller for Svelte

<!-- Add shields.io badges -->

Horizontal card slider for the modern web. Requires minimum JavaScript.

<!-- Add demonstration link and video -->

## Features

- **Snapping Cards, Smooth Scroll** - based on CSS, not JS.
- **Easy to Use** - just pass the card components to the `<slot />`.
- **Customizable** - override provided buttons and `<noscript>`.
- **Various Controls** - touch, scroll, click, and the `tab`[^1] key.
- **Mouse Support** - hover[^2] to show clickable control buttons.
- **Accessible** - `prefers-reduced-motion` and button `aria-label`.

[^1]: Wrap the card component with [tabbable elements] such as `<a>` or `<button>`.
[^2]: Only when hovered with a cursor. `@media (hover: hover) and (pointer: fine)`

[tabbable elements]: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex

## Requirements

Supported and tested on the latest evergreen browsers.

|                       | Chrome | Safari | Firefox | Safari (iOS) | Samsung Internet |
| --------------------- | ------ | ------ | ------- | ------------ | ---------------- |
| CSS [Scroll Snap]     | 69     | 11     | 68      | 11           | 10.1             |
| CSS [Scroll-behavior] | 61     | 15.4   | 36      | 15.4         | 8.2              |

[Scroll Snap]: https://caniuse.com/css-snappoints
[Scroll-behavior]: https://caniuse.com/css-scroll-behavior

## Limitations

- [x] JavaScript is required to enable horizontal scroll.
- [x] Card components should have identical width.

## Installation

Reference [How it works] and [Installation] for in-depth explanation.

[How it works]: docs/how-it-works.md
[Installation]: docs/installation.md

## Quick Start

For new projects, just replace the content of the `src/routes` folder.

1. Prepare a SvelteKit[^3] project.
2. Install the package via [npm].
3. Reference the [src/routes](src/routes) directory.

The entire folder can be zipped and downloaded using [download-directory](https://download-directory.github.io/?url=https%3A%2F%2Fgithub.com%2Fhyunbinseo%2Fswipe-scroller%2Ftree%2Fmain%2Fsrc%2Froutes).

[^3]: Requires `@sveltejs/kit` 1.0 and later as it includes `+(layout|page).svelte` files.

<!-- TODO: Check if the following link works. -->

[npm]: https://www.npmjs.com/package/swipe-scroller

## Options

```typescript
/** Width and height of the clickable control buttons. */
export let buttonWidth = '2.5rem';
/** Horizontal gap between the provided card components. */
export let cardGap = '1.25rem';

/** Hang control buttons on the outer container border. */
export let hangButtons = true;
/** Invert the scroll direction of the control buttons. */
export let invertButtons = false;
```

<!-- Add image with explanation -->
