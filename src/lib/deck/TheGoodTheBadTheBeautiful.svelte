<script lang="ts">
  import Slide from './Slide.svelte';
</script>

<section>
  <div class="box">
    <h1>CSS</h1>
    <p>
      The Good, The Bad, The <span class="relative">
        <span class="ugly">Ugly</span><span class="fragment beautiful">Beautiful</span>
      </span>
    </p>
  </div>
</section>

<style lang="less">
  .box {
    --transition-time: 0.5s;
    transform: scale(1.5);
  }

  .relative {
    position: relative;
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
      color: hsl(0, 100%, 70%);
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
    color: var(--secondary-color);
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
