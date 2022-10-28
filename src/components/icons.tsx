interface IconProps {
  strokeWidth?: string;
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
        strokeWidth={strokeWidth || 4}
        stroke="currentColor"
        className={iconClassName || "w-8 h-8"}
      >
        <path
          strokeLinecap="round"
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
        strokeWidth={strokeWidth || 4}
        stroke="currentColor"
        className={iconClassName || "w-8 h-8"}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  );
};
const icons = { LeftChevron, RightChevron };
export default icons;
