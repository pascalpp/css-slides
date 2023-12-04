declare module '*.svg?component' {
  import type { SvelteComponent } from 'svelte';

  export default class Comp extends SvelteComponent {}
}
