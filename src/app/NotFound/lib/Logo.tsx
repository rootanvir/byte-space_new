import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700", "800"],
});

function Logo() {
  return (
    <a
      aria-label="ByteSpace home"
      className="inline-flex items-center gap-2 text-xl font-bold text-white"
    >
      <Image
        alt="Logo"
        width={20}
        height={20}
        src="/logo/logo.png"
        className="w-auto h-auto"
      />
      
    </a>
  );
}
export default Logo;
