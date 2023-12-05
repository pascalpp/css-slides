<script lang="ts">
  import { onMount, setContext } from 'svelte';

  import Reveal, { type Api } from 'reveal.js';
  import Markdown from 'reveal.js/plugin/markdown/markdown';
  import Highlight from 'reveal.js/plugin/highlight/highlight';
  import Notes from 'reveal.js/plugin/notes/notes';

  const context: Record<string, null | Api> = {
    reveal: null,
  };
  setContext('reveal', context);

  onMount(() => {
    const reveal = new Reveal({
      plugins: [Markdown, Highlight, Notes],
      hash: true,
      progress: true,
      controls: true,
    });

    reveal.initialize();
    context.reveal = reveal;
  });
</script>

<div class="reveal">
  <div class="slides">
    <slot />
  </div>
</div>
