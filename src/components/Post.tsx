import { VariantProps, cva } from "class-variance-authority";

export type ButtonProps = VariantProps<typeof buttonStyles>;

export const buttonStyles = cva();

interface ButtonExtendedProps extends ButtonProps {
  children: string;
  LeftIcon?: React.ReactNode;
  width?: string;
  height?: string;
}

export default function Post({
  children,
  LeftIcon,
  width,
  height,
  ...props
}: ButtonExtendedProps) {
  const buttonStyle = {
    width : "153px" , height : "45px"
  };

  return (
    <button className={buttonStyles({})} style={buttonStyle} {...props}>
      {LeftIcon && <div className="text-lg pr-3">{LeftIcon}</div>}
      {children}
    </button>
  );
}
