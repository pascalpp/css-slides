<script lang="ts">
  import Slide from './Slide.svelte';
</script>

<section>
  <div class="column">
    <div class="box">
      <h1>CSS</h1>
      <p>
        <span class="fragment">The Good,</span> <span class="fragment">The Bad,</span>
        <span class="fragment">
          The <span class="relative">
            <span class="ugly">Ugly</span><span class="fragment beautiful lime">Beautiful</span>
          </span>
        </span>
      </p>
    </div>
    <div class="name">
      <h3 class="fragment">Pascal · UI Developer · Brooklyn</h3>
    </div>
  </div>
</section>

<style lang="less">
  .column {
    gap: 5rem;
  }

  .box {
    --transition-time: 0.5s;
    transform: scale(1.5);
  }

  .ugly {
    position: absolute;
    &::after {
      content: '';
      position: absolute;
    }
  }

  .box:has(.beautiful.visible) {
    .ugly {
      transition: all var(--transition-time) ease-in-out var(--transition-time);
      transform: translateY(-90%) rotate(-10deg);
      color: var(--color-red);
      margin: 0;
      padding-inline: 8px;
      &::after {
        transition: all var(--transition-time) ease-in-out var(--transition-time);
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 4px;
        background: hsl(0, 100%, 70%);
      }
    }
  }

  .beautiful {
    font-family: var(--font-serif);
    font-style: italic;
    max-width: 0;
    opacity: 0;
    &:is(.visible) {
      transition:
        max-width var(--transition-time) ease-in-out 0s,
        opacity var(--transition-time) ease-in-out calc(var(--transition-time) * 2);
      max-width: 200px;
      opacity: 1;
    }
  }
</style>
