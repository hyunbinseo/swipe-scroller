# Swipe Scroller for Svelte

Horizontal card slider for the modern web. Requires minimum JavaScript. [Demo]

[demo]: http://scroller.hyunbin.page/

## Features

- **Snapping Cards, Smooth Scroll** - Powered by CSS, not JS.
- **Easy to Use** - Just pass the card components to the `<slot />`.
- **Customizable** - Override the provided buttons and `<noscript>`.
- **Various Controls** - Supports touch, scroll, click[^1], and the `tab` key[^2].
- **Light or Dark** - The semi-transparent clickable buttons suits both.

[^1]: The buttons are shown only when hovered with `@media (pointer: fine)` such as a mouse cursor.
[^2]: For accessibility, wrap the card component with [tabbable elements] such as `<a>` or `<button>`.

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

- JavaScript is required to enable horizontal scroll.
- Card components should have identical width.

## Installation

Reference [How it works](docs/how-it-works.md) for in-depth explanation.

1. Prepare a SvelteKit project[^3].
2. Install the package via [npm].
3. Reference the [src/routes](src/routes) directory[^4].

[^3]: The project should support both `+(layout|page).svelte` files. SvelteKit `1.x` is recommended.
[^4]: The directory contains the source code for the [demo] page. It can be used as a starter template.

[npm]: https://www.npmjs.com/package/swipe-scroller

For new projects, replace the content of the `src/routes` folder. [Download](https://download-directory.github.io/?url=https%3A%2F%2Fgithub.com%2Fhyunbinseo%2Fswipe-scroller%2Ftree%2Fmain%2Fsrc%2Froutes)

## Events

- `on:scroll` - The DOM event is [forwarded](https://svelte.dev/tutorial/dom-event-forwarding).

## Options

```typescript
// Optional Component Props

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

## Slots

```svelte
<!-- Optional Named Slots -->

<slot name="noscript" />
<slot name="button-prev" />
<slot name="button-next" />
```
