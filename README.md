# Swipe Scroller for Svelte

Horizontal card slider for the modern web. Requires minimum JavaScript. [Demo]

[demo]: http://scroller.hyunbin.page/

## Features

- **Performant** - scrolling and snapping are powered by CSS, not JS.
- **Accessible** - control with touch, scroll, click[^1], and keyboard[^2].
- **Customizable** - override the provided buttons and the `<noscript>`.

[^1]: The buttons are shown only when hovered with `@media (pointer: fine)` such as a mouse cursor.
[^2]: For accessibility, wrap the card component with [tabbable elements] such as `<a>` or `<button>`.

[tabbable elements]: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex

## Browser Support

Tested on the latest evergreen browsers.

|                       | Chrome | Safari | Firefox | Safari (iOS) | Samsung Internet |
| --------------------- | ------ | ------ | ------- | ------------ | ---------------- |
| CSS [Scroll Snap]     | 69     | 11     | 68      | 11           | 10.1             |
| CSS [Scroll-behavior] | 61     | 15.4   | 36      | 15.4         | 8.2              |

[Scroll Snap]: https://caniuse.com/css-snappoints
[Scroll-behavior]: https://caniuse.com/css-scroll-behavior

## Quick Start

```bash
npm create svelte@latest
npm i swipe-scroller -D
```

Following code is based on [SvelteKit] v1.

[SvelteKit]: https://kit.svelte.dev/

```svelte
<!-- src/routes/+layout.svelte -->

<script>
  import 'swipe-scroller/style';
</script>

<div class="container-outer" style="position: fixed; inset: 0;" />

<div style="position: relative; overflow-x: hidden;">
  <slot />
</div>
```

```svelte
<!-- src/routes/+page.svelte -->

<script>
  import Scroller from 'swipe-scroller/Scroller.svelte';
</script>

<div class="container-inner">
  <h1>Swipe Scroller</h1>
</div>

<Scroller>
  {#each { length: 5 } as _, index}
    <a href="#{index}" class="card">
      <img src="https://scroller.hyunbin.page/{index}.jpg" alt="" />
      <div>Card No. {index + 1}</div>
    </a>
  {/each}
</Scroller>

<style>
  .card {
    text-decoration: none;
    color: white;
    background-color: gray;
    width: 80%;
    min-width: 224px;
    max-width: 296px;
    overflow: hidden;
  }

  .card > img {
    display: block;
    aspect-ratio: 1;
    width: 100%;
  }

  .card > div {
    padding: 1rem;
    text-align: center;
  }
</style>
```

Reference [how it works](docs/how-it-works.md) for an in-depth explanation.

## Events

The following DOM events are [forwarded] to the component.

[forwarded]: https://svelte.dev/tutorial/dom-event-forwarding

- [scroll](https://developer.mozilla.org/en-US/docs/Web/API/Element/scroll_event)
- [scrollend](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollend_event) - limited browser support

```svelte
<!-- Provide custom callbacks if needed. -->
<Scroller on:scroll on:scrollend />
```

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

## Limitations

- JavaScript is required to enable horizontal scroll.
- Card components should have identical width.
