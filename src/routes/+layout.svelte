<script lang="ts">
	import './app.css';
</script>

<div style="position: fixed;" class="container-outer" />

<div style="position: relative;">
	<slot />
</div>

<style>
	.container-outer {
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
</style>
