import type React from "react"

interface TitleWithUnderlineProps {
  children: React.ReactNode
}

export function TitleWithUnderline({ children }: TitleWithUnderlineProps) {
  return (
    <div className="relative inline-block mb-12 md:mb-32">
      <h1 className="text-3xl md:text-5xl font-semibold">{children}</h1>
      <svg
        width="324"
        height="12"
        viewBox="0 0 324 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -bottom-4 left-0 w-full"
      >
        <path
          d="M0 9.84864C1.54078 9.20064 3.04196 8.19264 4.62631 7.95744C14.1681 6.53664 23.7019 4.85664 33.2833 4.05984C72.9198 0.771839 112.628 1.15104 152.324 0.954239C182.525 0.805439 212.727 0.095039 242.929 0.00383897C262.84 -0.053761 282.751 0.551039 302.667 0.863039C307.677 0.939839 312.692 0.920639 317.698 1.14144C319.726 1.23264 321.738 1.86144 323.83 2.25984C322.847 5.97024 321.913 6.88704 318.855 6.92544C313.844 6.98784 308.826 7.00704 303.819 6.78624C271.376 5.35104 238.944 6.03744 206.493 6.67584C174.449 7.30464 142.39 6.73824 110.338 6.99744C88.9733 7.17024 67.6043 7.58784 46.2552 8.43744C31.6435 9.01824 17.0555 10.5494 2.45575 11.6198C1.74279 11.6726 1.01399 11.3702 0.289144 11.2358C0.194083 10.7702 0.0950611 10.3046 0 9.84384L0 9.84864Z"
          fill="#E38521"
        />
      </svg>
    </div>
  )
}

