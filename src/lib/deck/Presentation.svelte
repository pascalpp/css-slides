<script lang="ts">
  import Code from './Code.svelte';
  import Slide from './Slide.svelte';
  import snippet from './Code.svelte?raw';

  import TheGoodTheBadTheBeautiful from './TheGoodTheBadTheBeautiful.svelte';
  import HowToLiveLaughLove from './HowToLiveLaughLove.svelte';
  import ContainerQueriesBasics from './ContainerQueriesBasics.svelte';
  import ContainerQueriesUsage from './ContainerQueriesUsage.svelte';
  import FlexboxHeight from './FlexboxHeight.svelte';
  import FlexboxBasics from './FlexboxBasics.svelte';
  import FlexboxGrowShrink from './FlexboxGrowShrink.svelte';
</script>

<TheGoodTheBadTheBeautiful />
<HowToLiveLaughLove />

<section>
  <FlexboxBasics />
  <FlexboxGrowShrink />
  <FlexboxHeight />
</section>

<section>
  <ContainerQueriesBasics />
  <ContainerQueriesUsage />
</section>

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
