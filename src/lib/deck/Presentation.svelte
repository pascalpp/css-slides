<script lang="ts">
  import Code from './Code.svelte';
  import Slide from './Slide.svelte';
  import snippet from './Code.svelte?raw';

  import TheGoodTheBadTheBeautiful from './TheGoodTheBadTheBeautiful.svelte';
  import HowToLiveLaughLove from './HowToLiveLaughLove.svelte';
  import ContainerQueries from './ContainerQueries.svelte';
</script>

<TheGoodTheBadTheBeautiful />
<HowToLiveLaughLove />

<ContainerQueries />

<Slide animate>
  <Slide animate>
    <h1>Animate</h1>
  </Slide>

  <Slide animate>
    <Code>{snippet}</Code>
  </Slide>
</Slide>

<Slide animate>
  <Slide animate>
    <h1>Animate</h1>
  </Slide>

  <Slide animate>
    <Code>{snippet}</Code>
  </Slide>
</Slide>
