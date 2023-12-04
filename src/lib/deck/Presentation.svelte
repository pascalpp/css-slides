<script lang="ts">
	import Slide from './Slide.svelte';
</script>

<Slide animate>
	<h1>Animate</h1>
</Slide>

<Slide animate>
	<h1 style="color: red; margin-top: 3rem">Animate</h1>
</Slide>

<Slide animate>
	<Slide animate>
		<h1>Animate</h1>
	</Slide>

	<Slide animate>
		<h1 style="color: red; margin-top: 3rem">Animate</h1>
	</Slide>
</Slide>
