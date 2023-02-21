<script>
	// TODO: Replace import path to the library
	import Scroller from '$lib/Scroller.svelte';
</script>

<div class="container-inner">
	<h1>Swipe Scroller</h1>
	<a href="https://github.com/hyunbinseo/swipe-scroller#readme">
		<img
			height="20"
			src="https://img.shields.io/github/stars/hyunbinseo/swipe-scroller?style=social"
			alt="GitHub repository star count"
		/>
	</a>
</div>

<Scroller>
	{#each { length: 5 } as _, index}
		<!-- TODO: Add domain -->
		{@const src = `/${index}.jpg`}
		<a class="card" href=".">
			<img {src} draggable="false" alt="" />
		</a>
	{/each}
</Scroller>

<style>
	.card {
		width: 72%;
		max-width: 296px;
		overflow: hidden;
		border-radius: 0.75rem;
		/* fixes :focus outline being clipped */
		outline-offset: -2px;
	}

	.card > img {
		/* fixes <a> being larger than <img> */
		display: block;
		aspect-ratio: 1;
		width: 100%;
	}

	@media (min-width: 640px) {
		.card {
			border-radius: 1rem;
		}
	}

	/* Miscellaneous */

	div {
		margin-bottom: 3rem;
	}

	:root {
		padding: 4rem 0;
	}

	@media (min-width: 640px) {
		:root {
			padding: 5rem 0;
		}
	}
</style>
