interface CtaProps {
  text: string;
  url: string;
}
export const Cta = ({ text, url }: CtaProps) => {
  return (
    <>
      <a
        href={url}
        className="inline-block px-6 py-3 mt-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg uppercase"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        {text}
      </a>
    </>
  );
};
