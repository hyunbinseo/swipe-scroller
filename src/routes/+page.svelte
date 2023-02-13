<script lang="ts">
	import Scroller from '$lib/Scroller.svelte';
	import Card from './Card.svelte';
</script>

<Scroller>
	{#each { length: 5 } as _, index}
		<Card src="/{index}.jpg" />
	{/each}
</Scroller>
