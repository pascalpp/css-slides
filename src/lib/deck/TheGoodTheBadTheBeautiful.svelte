<script lang="ts">
  import Slide from './Slide.svelte';
</script>

<section data-transition="fade">
  <div class="box">
    <h1>CSS</h1>
    <p>
      The Good, The Bad, The&nbsp;<span class="relative"><span class="ugly">Ugly</span></span>
    </p>
  </div>
</section>

<section data-transition="fade">
  <div class="box">
    <h1>CSS</h1>
    <p>
      The Good, The Bad, The <span class="relative">
        <span class="ugly crossed-out">Ugly</span><span class="beautiful">Beautiful</span>
      </span>
    </p>
  </div>
</section>

<style lang="less">
  .box {
    transform: scale(1.5);
  }

  .relative {
    position: relative;
  }

  .ugly {
    position: absolute;
    &.crossed-out {
      bottom: 85%;
      left: -5px;
      transform: rotate(-10deg);
      color: hsl(0, 100%, 70%);
      margin: 0;
      padding-inline: 8px;
      &::after {
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
  }
</style>
