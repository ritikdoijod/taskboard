import { cva, cx, VariantProps } from "class-variance-authority";

const input = cva(
  "flex h-9 w-full rounded-md bg-transparent px-3 py-1 text-sm ring-1 ring-[#e5e7eb] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
);

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof input> {}

const Input: React.FC<InputProps> = ({ ...props }) => (
  <input className={cx(input())} {...props} />
);

export default Input;
