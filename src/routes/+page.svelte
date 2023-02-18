<script lang="ts">
	// TODO: Replace import path to the library
	import Scroller from '$lib/Scroller.svelte';
</script>

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
</style>
