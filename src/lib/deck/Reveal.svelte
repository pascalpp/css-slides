<script lang="ts">
  import { onMount } from 'svelte';

  import Reveal from 'reveal.js';
  import Markdown from 'reveal.js/plugin/markdown/markdown';
  import Highlight from 'reveal.js/plugin/highlight/highlight';
  import Notes from 'reveal.js/plugin/notes/notes';

  onMount(() => {
    const deck = new Reveal({
      plugins: [Markdown, Highlight, Notes],
      hash: true,
      progress: true,
      controls: true,
    });

    deck.initialize();

    deck.on('fragmentshown', (event) => {
      console.log('fragmentshown', event);
    });
  });
</script>

<div class="reveal">
  <div class="slides">
    <slot />
  </div>
</div>
