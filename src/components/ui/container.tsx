import { cva, cx, VariantProps } from "class-variance-authority";

const container = cva("", {
  variants: {
    variant: {
      soft: "bg-soft",
      alt: "bg-alt",
      transparent: "bg-transparent",
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
    },
  },
});

interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof container> {}

const Container: React.FC<ContainerProps> = ({ className, children }) => {
  return <div className={cx(container(), className)}>{children}</div>;
};

export default Container;
