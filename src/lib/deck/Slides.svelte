<script lang="ts">
	import { onMount } from 'svelte';

	import Reveal from 'reveal.js';
	import Markdown from 'reveal.js/plugin/markdown/markdown';
	import Highlight from 'reveal.js/plugin/highlight/highlight';
	import Notes from 'reveal.js/plugin/notes/notes';
	import 'reveal.js/dist/reveal.css';
	import 'reveal.js/dist/theme/black.css';
	import 'reveal.js/plugin/highlight/monokai.css';

	onMount(() => {
		const deck = new Reveal({
			autoAnimateEasing: 'ease',
			autoAnimateDuration: 1,
			hash: true,
			controls: true,
			progress: true
		});

		deck.initialize({
			controls: true,
			progress: true,
			center: true,
			hash: true,
			slideNumber: true,
			transition: 'slide',
			plugins: [Markdown, Highlight, Notes]
		});
	});
</script>

<div class="reveal">
	<div class="slides">
		<section>slide 1</section>
		<section>slide 2</section>
	</div>
</div>
