<script lang="ts">
  export let id = 'browser-window';
  export let title = 'Browser';
  export let width = '100%';
</script>

<div class="browser" style="--browser-width: {width}" data-id={id}>
  <nav data-id="{id}-browser-nav">
    <div class="buttons">
      <button class="button close" on:click data-button="close" />
      <button class="button minimize" on:click data-button="minimize" />
      <button class="button zoom" on:click data-button="zoom" />
    </div>
    <div class="address-bar">
      {title}
    </div>
    <div class="buttons">
      <span class="button close" />
      <span class="button minimize" />
      <span class="button zoom" />
    </div>
  </nav>
  <div class="content">
    <slot />
  </div>
</div>

<style lang="less">
  .browser {
    background-color: hsl(0, 0%, 80%);
    width: var(--browser-width, 100%);
    transition: width 0.5s ease-in-out;
    border: 1px solid black;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 40px 20px color-mix(in srgb, var(--color-lime) 30%, transparent);

    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-family: var(--font-system);
      color: #333;
      font-size: 16px;
      padding: 4px 12px;
    }

    .buttons {
      display: flex;
      gap: 8px;
      &:last-child {
        visibility: hidden;
        opacity: 0;
        pointer-events: none;
      }

      .button {
        cursor: pointer;
        appearance: none;
        padding: 0;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        border: 1px solid rgba(0 0 0 / 0.2);
        box-shadow: 0 0 0 0.5px rgba(0 0 0 / 0.2);

        &.close {
          background-color: #ff5f57;
        }
        &.minimize {
          background-color: #ffbd2e;
        }
        &.zoom {
          background-color: #28c940;
        }
      }
    }

    .address-bar {
      border: 1px solid rgba(0 0 0 / 0.3);
      border-radius: 4px;
      background-color: #eee;
      padding: 4px 8px;
      max-width: 50%;
      width: 600px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .content {
      background-color: #333;
      overflow-y: auto;
    }
  }
</style>
