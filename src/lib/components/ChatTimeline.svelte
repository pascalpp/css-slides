<script lang="ts">
</script>

<div class="chat-timeline">
  <div class="content">
    <slot />
  </div>
</div>

<style lang="less">
  .chat-timeline {
    overflow-x: hidden;
    overflow-y: auto;
    flex: 1;
    display: flex;
    flex-direction: column-reverse;

    .content {
      &:after {
        display: block;
        height: 00px;
        width: 100%;
        flex-shrink: 0;
        content: '';
      }
      display: flex;
      flex: 1;
      flex-direction: column-reverse;
      gap: 0.75em;
      padding: 1em;
    }
  }
</style>
