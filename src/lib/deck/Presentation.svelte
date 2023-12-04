<script lang="ts">
  import Code from './Code.svelte';
  import Slide from './Slide.svelte';
  import snippet from './Code.svelte?raw';

  import TheGoodTheBadTheBeautiful from './TheGoodTheBadTheBeautiful.svelte';
  import HowToLiveLaughLove from './HowToLiveLaughLove.svelte';
</script>

<TheGoodTheBadTheBeautiful />
<HowToLiveLaughLove />

<section>
  <h1>Container Queries</h1>
  <ul class="fragment">
    <li>Like media queries</li>
    <li class="fragment">But viewport-agnostic</li>
    <li class="fragment">And element-specific</li>
    <li class="fragment">
      Stop asking <span class="fragment strike highlight-red semi-fade-out">“How big is the screen?”</span>
    </li>
    <li class="fragment">
      Start asking <span class="fragment grow lime">“How big am I?”</span>
    </li>
  </ul>
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
