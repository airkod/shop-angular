export class LoaderService {
  private static loaderElementRef: HTMLDivElement;

  public static show(): void {
    if (!this.loaderElementRef) {
      this.loaderElementRef = document.createElement("div");
      this.loaderElementRef.classList.add("loader");
      document.body.append(this.loaderElementRef);
    }
    this.loaderElementRef.classList.add("show");
  }

  public static hide(fn?: Function): void {
    this.loaderElementRef.classList.remove("show");
    if (fn) {
      setTimeout(() => fn(), 200);
    }
  }
}
