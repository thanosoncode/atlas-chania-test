const Chevron = ({ fill, size }: { fill: string; size: string }) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 512.000000 512.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill={fill}
        stroke="none"
      >
        <path
          d="M3604 4920 c-28 -14 -415 -397 -1201 -1188 l-1160 -1167 1166 -1172
  c837 -842 1176 -1177 1203 -1188 99 -40 211 7 253 107 18 44 19 78 4 133 -9
  35 -150 179 -1045 1075 -569 569 -1034 1040 -1034 1045 0 5 463 473 1030 1040
  726 727 1034 1041 1045 1067 66 162 -105 325 -261 248z"
        />
      </g>
    </svg>
  );
};
export default Chevron;
