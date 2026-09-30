import Logo from "./Logo";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700", "800"],
});


function Navbar() {
  return (
    <header className="flex items-center justify-around px-5 py-7 ">
      <div className="flex items-center gap-3">
        <Logo />
        <h1 className={`${poppins.className} text-2xl font-extrabold tracking-tight text-white`}>ByteSpace</h1>
      </div>

      <nav className="flex gap-6 font-thin text-white ">
        <a href="/">Home</a>
        <a href="/CourseReview">Courses</a>
        <a href="/CreatorProfile">Creators</a>
      </nav>

      <div className="flex gap-5 font-thin text-white">
        <a href="/SignIn">Sign In</a>
        <a href="/SignUp">Join Us</a>
        <a href="/cart">
          <Image
            width={20}
            height={20}
            alt="cart"
            src={'/logo/cart.png'}
          />

        </a>
      </div>
    </header>
  );
}

export default Navbar;