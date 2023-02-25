# How it Works

## Overall Structure

This documentation assumes that the provided [CSS file](/src/lib/styles/container-colored.css) is imported.

```css
body {
  /* text and background colors are set */
}

.container-outer {
  /* background color is set */
  /* padding is not colored - background clips to content-box */
}

.container-inner,
.container-outer {
  /* do not nest inner inside outer - use independently */
  /* expands horizontally in the viewport - display is block */
  /* horizontally centered - horizontal margin is set to auto */

  /* content-box width comparison */
  /* inner is narrower than outer due to padding difference */
  /* inner and outer width are same in narrow viewport */
}
```

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/47051820/221335110-3bd4b640-1cdd-4d90-8e92-c8e421532de8.jpeg">
  <img src="https://user-images.githubusercontent.com/47051820/221335119-094f363e-84e4-4740-8459-bd07d8e8bf67.jpeg">
</picture>

```svelte
<!-- /routes/+layout.svelte -->

<!-- fills the entire viewport - works as a background -->
<div class="container-outer" />

<!-- content is placed above the fixed .container-outer -->
<div style="position: relative; overflow-x: hidden;">
  <slot />
</div>

<style>
  .container-outer {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
```

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/47051820/221335111-1981f62b-5155-45ff-8845-de27940acbd0.jpeg">
  <img src="https://user-images.githubusercontent.com/47051820/221335120-33bc7e35-c7c8-4bb6-ac8d-ed7fdf0a3703.jpeg">
</picture>

```svelte
<!-- /routes/+page.svelte -->

<div class="container-inner">
  <h1>Swipe Scroller</h1>
  <p>xiihu's discography, from latest</p>
</div>

<Scroller>
  <!-- Card components are passed to this slot -->
</Scroller>
```

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/47051820/221335113-fcbc0d78-e806-4ec4-9d66-4bb136056b62.jpeg">
  <img src="https://user-images.githubusercontent.com/47051820/221335122-031662e3-70f0-47d5-bc9c-b85cc97ab0c5.jpeg">
</picture>

## The Scroller Component

Before hydration (or when JavaScript is disabled), `.container-inner` is set on the component. This aligns the left-most card accordingly. Overflow to the right is accomplished by `overflow-x: visible`. Since the cards are visible but not scrollable, the following `<noscript>` element is included out-of-the-box.

> JavaScript is not available. Horizontal scroll is disabled.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/47051820/221335115-a7ff4429-1130-4c3b-b630-6db49d1b9098.jpeg">
  <img src="https://user-images.githubusercontent.com/47051820/221335124-e71c00d5-0f44-4e00-9017-f9afc2ea58dc.jpeg">
</picture>

On mount, `.container-inner` is removed from the component. This puts the left-most card to the left end of the viewport. To align cards accordingly, JavaScript is used to calculate and set the horizontal padding on the `.scroller` element. The same value is set to `scroll-padding-left` to snap the cards in place.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/47051820/221335118-03176bd2-f2b5-4068-8816-1f7fdd045126.jpeg">
  <img src="https://user-images.githubusercontent.com/47051820/221335125-801c1c34-a9a8-4ace-91f2-b3aa3f583371.jpeg">
</picture>

Once the paddings are set, all scrolling and snapping is handled by CSS. JavaScript is not used after the initial calculation (and on window resize).
