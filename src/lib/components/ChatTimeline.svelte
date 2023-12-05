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
        height: 50px;
        width: 10px;
        flex-shrink: 0;
        content: '0';
      }
      display: flex;
      flex: 1;
      flex-direction: column-reverse;
      gap: 0.25em;
      padding: 1em;
    }
  }
</style>
