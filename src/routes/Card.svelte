<script lang="ts">
	export let src: string;
</script>

<a href=".">
	<img alt="" draggable="false" {src} />
</a>

<style>
	a {
		width: 72%;
		max-width: 296px;
		/* fixes :focus outline being clipped */
		outline-offset: -2px;
	}

	img {
		/* fixes <a> being larger than <img> */
		display: block;
		aspect-ratio: 1;
		width: 100%;
	}

	a,
	img {
		border-radius: 0.75rem;
	}

	@media (min-width: 640px) {
		a,
		img {
			border-radius: 1rem;
		}
	}
</style>
