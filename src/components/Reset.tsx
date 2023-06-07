import { VariantProps, cva } from "class-variance-authority";

export type ButtonProps = VariantProps<typeof buttonStyles>;

export const buttonStyles = cva("px-2 py-2 flex items-center justify-center <rounded-full><border-radius:20></border-radius:10></rounded-full>", {
  variants: {
    intent: {
      primary: 	"bg-gradient-to-t transition-all duration-75 font-light hover:from-[#8CC6DA] hover:to-[#1389B2] hover:text-white",
    },
    fullwidth: {
      true: "w-full"
    },
  },
  defaultVariants: {
    intent: "primary"
  },
});

interface ButtonExtendedProps extends ButtonProps {
  children: string;
  LeftIcon?: React.ReactNode;
  width?: string;
  height?: string;
}

export default function Reset({
  intent,
  fullwidth,
  children,
  LeftIcon,
  width,
  height,
  ...props
}: ButtonExtendedProps) {
  const buttonStyle = {
    width : "150px" , height : "31px"
  };

  return (
    <button className={buttonStyles({ intent, fullwidth })} style={buttonStyle} {...props}>
      {LeftIcon && <div className="text-lg pr-3">{LeftIcon}</div>}
      {children}
    </button>
  );
}