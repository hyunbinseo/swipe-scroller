<script>
	import Scroller from 'swipe-scroller/Scroller.svelte';

	const releases = [
		{
			name: 'Synthetic Heart',
			color: 'rgb(172, 181, 186)',
			spotify: '1uD8IR3fuDcIPWgvA1KS7c'
		},
		{
			name: 'Your Eyes',
			color: 'rgb(113, 120, 136)',
			spotify: '1mTBvp0QIKjOD9KnxcFEDD'
		},
		{
			name: 'Candid',
			color: 'rgb(158, 128, 89)',
			spotify: '27JqYhGZhbw4R64Ce7v1tg'
		},
		{
			name: 'Yours, Truly',
			color: 'rgb(124, 104, 116)',
			spotify: '4eB2YfdivTrZjzSeQ4NB23'
		},
		{
			name: 'Affectionate',
			color: 'rgb(40, 35, 49)',
			spotify: '1YTj33nCCjZxaPc2RZIjE0'
		}
	];

	let hangButtons = true;
	let invertButtons = false;
</script>

<div class="container-inner">
	<h1>Swipe Scroller</h1>
	<p>
		Modern Slider. <a href="https://github.com/hyunbinseo/swipe-scroller#readme">GitHub</a>
	</p>
	<div class="line" />
	<h2>xiihu</h2>
	<p>Discography, from latest</p>
</div>

<Scroller {hangButtons} {invertButtons}>
	{#each { length: releases.length } as _, index}
		{@const reverseIndex = releases.length - 1 - index}
		{@const release = releases[reverseIndex]}
		{@const domain = 'http://scroller.hyunbin.page/'}
		{@const src = `${domain}/${reverseIndex}.jpg`}
		<a
			class="card"
			target="_blank"
			rel="noreferrer"
			href="https://open.spotify.com/album/{release.spotify}"
			style:background-color={release.color}
		>
			<img {src} draggable="false" alt="" />
			<div>
				{release.name}
			</div>
		</a>
	{/each}
</Scroller>

<pre class="container-inner">
- Invert Buttons: <button on:click={() => (invertButtons = !invertButtons)}>{invertButtons}</button>
- Hang Buttons: <button on:click={() => (hangButtons = !hangButtons)}>{hangButtons}</button>
</pre>

<style>
	a.card {
		text-decoration: none;
		/* fixes :focus outline being clipped */
		outline-offset: -2px;
	}

	.card {
		width: 72%;
		max-width: 296px;
		overflow: hidden;
		border-radius: 0.75rem;
	}

	.card > img {
		/* fixes <a> being larger than <img> */
		display: block;
		aspect-ratio: 1;
		width: 100%;
	}

	.card > div {
		padding: 1.5rem 1rem;
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
	}

	a,
	a:visited {
		color: inherit;
	}

	h1,
	h2 {
		letter-spacing: -0.025em;
	}

	h1 + p,
	h2 + p {
		margin-block-start: -0.67rem;
	}

	.line {
		margin: 3rem 0;
		width: 3rem;
		border-bottom: solid;
	}

	pre {
		display: none;
	}

	@media (pointer: fine) {
		pre {
			display: block;
			margin-top: 1rem;
			line-height: 2;
		}
	}
</style>
