interface IconProps {
  strokeWidth?: number;
  iconClassName?: string;
  [key: string]: any;
}

const LeftChevron = ({ strokeWidth, iconClassName, ...props }: IconProps) => {
  return (
    <div {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={strokeWidth || 0.8}
        stroke="currentColor"
        className={iconClassName || "w-16 h-16"}
      >
        <path
          // strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
    </div>
  );
};
const RightChevron = ({ strokeWidth, iconClassName, ...props }: IconProps) => {
  return (
    <div {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={strokeWidth || 0.8}
        stroke="currentColor"
        className={iconClassName || "w-16 h-16"}
      >
        <path
          // strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  );
};
const WarnRound = ({
  strokeWidth = 0.8,
  iconClassName = "w-6 h-6",
  ...props
}: IconProps) => {
  return (
    <div {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={strokeWidth}
        stroke="currentColor"
        className={iconClassName}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
        />
      </svg>
    </div>
  );
};
const icons = { LeftChevron, RightChevron, WarnRound };
export default icons;
