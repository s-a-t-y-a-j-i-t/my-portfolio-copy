declare module "gsap-trial/SplitText" {
  export class SplitText {
    constructor(target: gsap.DOMTarget, vars?: object);
    chars: Element[];
    words: Element[];
    lines: Element[];
    revert(): void;
  }
}

declare module "gsap-trial/ScrollSmoother" {
  export class ScrollSmoother {
    static create(vars: object): ScrollSmoother;
    static refresh(hard?: boolean): void;
    scrollTop(position: number): void;
    scrollTo(target: string | Element, smooth?: boolean, position?: string): void;
    paused(value: boolean): void;
  }
}
