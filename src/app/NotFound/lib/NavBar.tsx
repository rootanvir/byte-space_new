import Logo from "./Logo";
import Image from "next/image";
function Navbar() {
  return (
    <header className="flex items-center justify-between px-5 py-7">
      <Logo />

      <nav className="flex gap-6 font-thin">
        <a href="#">Home</a>
        <a href="#">Courses</a>
        <a href="#">Creators</a>
      </nav>

      <div className="flex gap-5 font-thin">
        <a href="#">Sign In</a>
        <a href="#">Join Us</a>
        <a href="#">
            <Image width={15} height={15} src={'/logo/cart.png'} alt="Cart" />
        </a>
      </div>
    </header>
  );
}

export default Navbar;