import Image from "next/image";

function Logo() {
  return (
    <a
      aria-label="ByteSpace home"
      className="inline-flex items-center gap-2 text-xl font-bold"
    >
      <Image
        alt="Logo"
        width={20}
        height={20}
        src="/logo/logo.png"
      />
      ByteSpace
    </a>
  );
}
export default Logo;
