<script lang="ts">
  import Slide from './Slide.svelte';
</script>

<Slide>
  <h1>What was life like without CSS?</h1>

  <div class="row gap">
    <div class="left column">
      <p class="fragment">I got my start in web development in 1995.</p>

      <p class="fragment">Before CSS, before tables…</p>

      <p class="fragment">We had to rely on<br />the built-in appearance of html tags.</p>

      <p class="fragment">Building websites uphill, both ways.</p>
    </div>

    <div class="right column">
      <div class="old-man fragment"></div>
    </div>
  </div>
</Slide>

<style lang="less">
  .left.column {
    max-width: 35ch;
  }

  .old-man {
    width: 300px;
    height: 250px;
    background-image: url(./old.jpg);
    background-position: center;
    background-size: cover;
    border: 1px solid white;
    border-radius: 0.5rem;
  }
</style>
