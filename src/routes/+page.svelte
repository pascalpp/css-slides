<script lang="ts">
  import '../app.less';
  import { onMount } from 'svelte';
  import Slides from '$lib/deck/Slides.svelte';

  let timer = 0;

  function checkForAllHidden() {
    const presentedSlide = document.querySelector('section.present');
    if (!presentedSlide) document.location.reload();
  }

  onMount(() => {
    timer = setInterval(checkForAllHidden, 1000);
    () => {
      clearInterval(timer);
    };
  });
</script>

<svelte:head>
  <title>Slides</title>
</svelte:head>

<Slides />
