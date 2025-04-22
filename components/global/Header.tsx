export default function Header({ text }: { text: string }) {
  return (
    <>
      <h2 className="text-[32px] uppercase tracking-[8px] text-[#b33009] text-center pt-5 pb-2 font-spaceGrotesk">
        {text}
      </h2>
    </>
  );
}
