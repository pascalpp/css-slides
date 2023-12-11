<script lang="ts">
  import '../app.less';
  import { onMount } from 'svelte';
  import Reveal from '$lib/deck/Reveal.svelte';
  import Presentation from '$lib/deck/Presentation.svelte';

  let timer = 0;

  function checkForAllHidden(node: Document | Element = document) {
    const presentSection = node.querySelector('section.present');
    if (!presentSection) {
      document.location.reload();
    } else {
      const hasSections = presentSection.querySelector('section');
      if (hasSections) return checkForAllHidden(presentSection);
    }
  }

  onMount(() => {
    timer = setInterval(checkForAllHidden, 1000);
    () => {
      clearInterval(timer);
    };
  });
</script>

<svelte:head>
  <title>CSS: The Good, the Bad, the U̶g̶l̶y̶ Beautiful</title>
</svelte:head>

<Reveal>
  <Presentation />
</Reveal>
