import { type VariantProps, cva } from "class-variance-authority";

export { default as Button } from "./Button.vue";

export const buttonVariants = cva("inline-flex items-center justify-center", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      card:
        "btn-vote cursor-pointer select-none rounded-[10px] font-bold ease-in-out",
    },
    size: {
      default: "h-10 px-4 py-2 ",
      card: "size-8 p-0",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "size-10",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;
