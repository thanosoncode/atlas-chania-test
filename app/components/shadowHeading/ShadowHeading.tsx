const ShadowHeading = ({
  title,
  top,
  left,
  size = 200,
}: {
  title: string;
  top: string;
  left?: string;
  size?: number;
}) => {
  return (
    <div
      className={`uppercase text-white font-extrabold absolute whitespace-nowrap ${top} ${left} -z-10`}
      style={{
        fontSize: size,
        textShadow:
          "-1px -1px 0 #d4d4d4, 1px -1px 0 #d4d4d4, -1px 1px 0 #d4d4d4, 1px 1px 0 #d4d4d4",
      }}
    >
      {title}
    </div>
  );
};
export default ShadowHeading;
