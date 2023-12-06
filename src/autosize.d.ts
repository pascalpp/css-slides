declare module 'autosize' {
  class AutoSize {
    constructor(element: HTMLTextAreaElement);
    destroy: () => void;
    update: () => void;
  }

  export { AutoSize };
}
