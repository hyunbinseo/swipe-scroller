<script lang="ts">
	import Scroller from '$lib/Scroller.svelte';
	import '$lib/styles/container-colored.css';

	export let data;

	let hangButtons = true;
	let invertButtons = false;
</script>

<div class="container-outer" style="position: fixed; inset: 0;" />

<div style="position: relative; overflow-x: hidden;">
	<div class="container-inner" style="margin-bottom: 1rem;">
		<h1>Swipe Scroller</h1>
		<p>
			<span>Modern Slider.</span>
			<a href="https://github.com/hyunbinseo/swipe-scroller#readme" target="_blank">GitHub</a>
		</p>
		<div class="line" />
		<h2>xiihu</h2>
		<p>Discography, from latest</p>
	</div>
	<Scroller {hangButtons} {invertButtons} cardGap="0.5rem">
		{#each data.releases as release}
			<a
				class="card"
				target="_blank"
				rel="noreferrer"
				href="https://open.spotify.com/album/{release.spotify}"
				style:background-color={release.color}
			>
				<img src={release.cover} draggable="false" alt="" />
				<div>{release.name}</div>
			</a>
		{/each}
	</Scroller>
	<div class="container-inner options">
		<strong>Hover over the scroller to test these options.</strong>
		<ul>
			<li>
				<label>
					<input type="checkbox" bind:checked={hangButtons} />
					Hang the arrow buttons at the inner container border.
				</label>
			</li>
			<li>
				<label>
					<input type="checkbox" bind:checked={invertButtons} />
					Invert the functions of the left and right arrow buttons.
				</label>
			</li>
		</ul>
	</div>
</div>

<style>
	a.card {
		text-decoration: none;
		outline-offset: -2px;
	}

	.card {
		width: 80%;
		min-width: 224px;
		max-width: 296px;
		overflow: hidden;
		border-radius: 0.75rem;
	}

	.card > img {
		display: block;
		max-width: 100%;
	}

	.card > div {
		padding: 1rem;
		color: white;
		text-align: center;
	}

	@media (min-width: 640px) {
		.card {
			border-radius: 1rem;
		}
	}

	/* Miscellaneous */

	:root {
		padding: 3rem 0;
		line-height: 1.5;
	}

	a,
	a:active,
	a:visited {
		color: inherit;
	}

	h1,
	h2,
	p {
		margin: 0;
	}

	h1 {
		letter-spacing: -0.025em;
	}

	.line {
		margin: 3rem 0;
		width: 3rem;
		border-style: solid;
		border-width: 0.5px;
	}

	.options {
		display: none;
	}

	@media (pointer: fine) {
		.options {
			display: block;
			margin-top: 3rem;
			line-height: 1.5;
		}

		.options > ul {
			margin-top: 0.25rem;
			list-style: none;
			padding-inline-start: 0;
		}
	}
</style>
