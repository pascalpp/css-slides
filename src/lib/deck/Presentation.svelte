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
  import IsWhereHas from './IsWhereHas.svelte';
  import IsSelector from './IsSelector.svelte';
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

<section>
  <IsWhereHas />
  <IsSelector />
</section>

<Slide>
  <Slide animate>
    <h1>Animate</h1>
    <div class="column" style="gap: 1rem">
      <div class="box" data-id="box-1"></div>
      <div class="box" data-id="box-2"></div>
      <div class="box" data-id="box-2"></div>
    </div>
  </Slide>

  <Slide animate>
    <h1>Animate</h1>
    <div class="row" style="gap: 1rem">
      <div class="box" data-id="box-1"></div>
      <div class="box" data-id="box-2"></div>
      <div class="box" data-id="box-2"></div>
    </div>
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
