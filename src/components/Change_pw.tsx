import { VariantProps, cva } from "class-variance-authority";

export type ButtonProps = VariantProps<typeof buttonStyles>;

export const buttonStyles = cva("px-2 py-2 flex items-center justify-center rounded-full", {
    variants: {
        intent: {
            primary: "bg-gradient-to-t transition-all duration-75 font-medium hover:from-[#8CC6DA] hover:to-[#1389B2] hover:text-white",
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
    width?: string;
    height?: string;
}

export default function Button({
    intent,
    fullwidth,
    children,
    width,
    height,
    ...props
}: ButtonExtendedProps) {
    const buttonStyle = {
        width: "338px",
        height: "40px"
    };

    return (
        <button className={buttonStyles({ intent, fullwidth })} style={buttonStyle} {...props}></button>
    );
}
