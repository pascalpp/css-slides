<script lang="ts">
  export let id: string | null = null;
  export let animate = false;
  export let restart = false;
  export let transition = 'slide';
</script>

<section
  data-transition={transition}
  data-auto-animate-id={id || null}
  data-auto-animate={animate || null}
  data-auto-animate-restart={restart || null}>
  <slot />
</section>
