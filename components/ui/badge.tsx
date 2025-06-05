import { HoverColorSwapDiv } from "../animation/HoverColorSwapDiv";

interface BadgeProps {
  text: string;
  hoverColor: string;
}

export const Badge = ({ text, hoverColor }: BadgeProps) => {
  return (
    <HoverColorSwapDiv
      backgroundColor={hoverColor}
      className="bg-canyon flex min-h-6 items-center justify-center rounded-4xl border border-gray-400 px-3 py-1 text-center text-xs whitespace-nowrap text-black"
    >
      <div className="relative">
        <span className="inset-0">{text}</span>
      </div>
    </HoverColorSwapDiv>
  );
};
