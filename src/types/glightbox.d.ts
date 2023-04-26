declare module 'glightbox' {
  interface GLightboxOptions {
    selector?: string;
  }

  interface GLightbox {
    new (options?: GLightboxOptions): GLightbox;
    open(): void;
  }

  const GLightbox: GLightbox;
  export default GLightbox;
}