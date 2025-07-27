import clsx from "clsx";

interface ButtonProps {
    width: string;
    text: string;
    textSize: string;
    textColor: string;
    bgColor: string;
}
export default function Button({
    width,
    text,
    textSize,
    textColor,
    bgColor,
}: ButtonProps) {
    return (
        <button
            className={clsx(
                "py-2 font-semibold rounded-full flex items-center justify-center transition-colors cursor-pointer",
                width,
                textSize,
                textColor,
                bgColor
            )}
        >
            {text}
        </button>
    );
}
