<script lang="ts">
	import { onMount } from 'svelte';
	import Chevron from './Chevron.svelte';

	/** Width and height of the clickable control buttons. */
	export let buttonWidth = '2.5rem';
	/** Horizontal gap between the provided card components. */
	export let cardGap = '1.25rem';

	/** Hang control buttons on the outer container border. */
	export let hangButtons = true;
	/** Invert the scroll direction of the control buttons. */
	export let invertButtons = false;

	// Enable scroller

	let referenceElement: HTMLElement;
	let offsetLeft: number;

	const updateOffsetLeft = () => (offsetLeft = referenceElement?.offsetLeft);

	onMount(updateOffsetLeft);

	// Scroll with button

	let scroller: HTMLDivElement;

	const scroll = (left = true) => {
		const width = scroller.firstElementChild?.getBoundingClientRect().width;

		if (!width) return;

		const directionMultiplier = (left ? -1 : 1) * (invertButtons ? -1 : 1);

		scroller.scrollLeft += directionMultiplier * width;
	};
</script>

<svelte:window on:resize={updateOffsetLeft} />

<div class="scroller-wrapper">
	<div class="container-inner">
		<slot name="noscript">
			<noscript>JavaScript is not available. Horizontal scroll is disabled.</noscript>
		</slot>
		<div bind:this={referenceElement} />
	</div>

	<div class:container-inner={offsetLeft === undefined}>
		<div
			on:scroll
			bind:this={scroller}
			class="scroller"
			class:scroller-js={offsetLeft !== undefined}
			style="--slide-gap: {cardGap}; --scroller-offset: {offsetLeft || 0}px;"
		>
			<slot />
		</div>
	</div>

	{#if offsetLeft !== undefined}
		<div
			class="scroller-control"
			class:container-outer={hangButtons}
			class:container-inner={!hangButtons}
			style="--button-width: {buttonWidth};"
		>
			<button type="button" tabindex="-1" on:click={() => scroll()}>
				<slot name="button-prev">
					<div class="icon-wrapper" style="margin-left: var(--button-margin);">
						<Chevron />
					</div>
				</slot>
			</button>
			<button type="button" tabindex="-1" on:click={() => scroll(false)}>
				<slot name="button-next">
					<div class="icon-wrapper" style="margin-right: var(--button-margin);">
						<Chevron left={false} />
					</div>
				</slot>
			</button>
		</div>
	{/if}
</div>

<style>
	noscript {
		display: block;
		margin-bottom: 0.625rem;
	}

	.scroller-wrapper {
		position: relative;
	}

	.scroller {
		display: flex;
		gap: var(--slide-gap);
		padding: 0 var(--scroller-offset);
		scroll-padding-left: var(--scroller-offset);
		overflow-x: visible;
	}

	.scroller :global(> *) {
		flex-shrink: 0;
		scroll-snap-align: start;
	}

	.scroller-js {
		overflow-x: auto;
		scroll-behavior: smooth;
		scroll-snap-type: x mandatory;
		scrollbar-width: none;
	}

	.scroller-js::-webkit-scrollbar {
		display: none;
	}

	.scroller-control {
		background-color: transparent;
		pointer-events: none;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		justify-items: center;
		justify-content: space-between;
		opacity: 0;
	}

	.scroller-control > button {
		all: unset;
		pointer-events: auto;
	}

	.scroller-control.container-inner {
		--button-margin: calc(var(--button-width) / -2);
	}

	.scroller-control.container-outer {
		--button-margin: calc(var(--button-width) / 2 * var(--button-margin-multiplier, 1));
	}

	.icon-wrapper {
		border-radius: 100%;
		height: var(--button-width);
		width: var(--button-width);
		padding: calc(var(--button-width) / 4);
		background-color: rgba(0, 0, 0, 0.2);
		color: white;
	}

	@media (hover: hover) and (pointer: fine) {
		.scroller-wrapper:hover .scroller-control {
			opacity: 1;
		}

		.icon-wrapper:hover {
			background-color: rgba(0, 0, 0, 0.4);
		}
	}

	@media (prefers-reduced-motion: no-preference) {
		.scroller-control {
			transition: opacity 150ms;
		}

		.icon-wrapper {
			transition: background-color 150ms;
		}
	}
</style>
