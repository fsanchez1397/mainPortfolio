const PageNum = ({
  page,
  color = "white",
}: {
  page: number;
  color?: "white" | "black";
}) => {
  const textColor = color === "black" ? "text-black" : "text-white";

  return (
    <p
      className={`text-${textColor} text-right pt-[40px] pb-[20px]`}
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      {page}
    </p>
  );
};
export default PageNum;
