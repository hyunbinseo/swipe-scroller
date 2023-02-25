<script lang="ts">
	export let left = true;

	const d = left ? 'M15.75 19.5L8.25 12l7.5-7.5' : 'M8.25 4.5l7.5 7.5-7.5 7.5';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="currentColor"
>
	<path stroke-linecap="round" stroke-linejoin="round" {d} />
</svg>
