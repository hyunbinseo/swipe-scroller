<script>
	import './app.css';
</script>

<div class="container-outer" />

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
