export default function Header({ text }: { text: string }) {
  return (
    <>
      <h2
        className="text-[32px] uppercase tracking-[8px] text-[#b33009] text-center pt-5 pb-5 m-0 font-spaceGrotesk"
        style={{ marginTop: "0px" }}
      >
        {text}
      </h2>
    </>
  );
}
