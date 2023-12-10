<script lang="ts">
  import Slide from './Slide.svelte';
  import LiveLaughLove from './live-laugh-love.svg?component';
</script>

<Slide>
  <div class="column">
    <div class="row">
      <h3 class="or">or:</h3>
      <h3 class="fragment">How to</h3>
      <LiveLaughLove />
      <h3 class="fragment in-css">in CSS</h3>
      <!-- <span class="relative">
        <h4 class="fragment blessed">
          #blessed
          <h4 class="fragment vomit">🤮</h4>
        </h4>
      </span> -->
    </div>
    <div class="name">
      <h4 class="fragment">Pascal · UI Developer · Brooklyn</h4>
    </div>
  </div>
</Slide>

<style lang="less">
  .column {
    transform: scale(1.25);
    gap: 0.5rem;
  }

  .name {
    margin-left: 4rem;
  }

  .row {
    position: relative;
  }

  h3 {
    margin: 0;
    &.or {
      margin-right: 1rem;
      color: white;
      font-family: var(--font-serif);
      font-style: italic;
      font-size: 0.8em;
    }
    &.in-css {
      margin-left: -0.75rem;
      margin-right: 3rem;
    }
  }

  // .blessed {
  //   position: absolute;
  //   right: 0;
  //   top: 0;
  //   color: white;
  //   transform: translateX(1rem) translateY(2rem) rotate(10deg);
  //   padding: 0.25rem 0.5rem;
  //   background-color: var(--color-red);
  //   border-radius: 4px;
  //   &::before {
  //     content: '';
  //     position: absolute;
  //     display: block;
  //     left: 0;
  //     top: 0;
  //     height: 75%;
  //     aspect-ratio: 1;
  //     transform-origin: bottom center;
  //     transform: translateX(-3px) translateY(0.5px) rotate(-45deg);
  //     background-color: var(--color-red);
  //     border-radius: inherit;
  //     z-index: -1;
  //   }
  //   &:after {
  //     content: '';
  //     position: absolute;
  //     display: block;
  //     left: 0;
  //     top: 50%;
  //     transform: translateX(-12px) translateY(-50%);
  //     height: 12px;
  //     aspect-ratio: 1;
  //     background-color: black;
  //     border-radius: 50%;
  //   }
  // }

  // .vomit {
  //   position: absolute;
  //   right: 0;
  //   top: 0;
  //   color: white;
  //   transform: translateX(1rem) translateY(2rem) rotate(-5deg);
  // }
</style>
