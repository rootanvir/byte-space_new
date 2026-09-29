import Logo from "./Logo";

const BTN =
  "inline-flex items-center justify-center rounded-full bg-[#d4fb27] px-6 py-3.5 text-[15px] font-medium text-[#111] cursor-pointer";

const columns = [
  ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  ["Development", "Marketing", "Photography", "Finance", "Sport"],
  ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
];

function Footer() {
  return (
    <footer className="px-5 pt-11 pb-7 text-xs sm:px-20">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <Logo />
          <p className="mt-4">
            Stay Up to date with our latest features and releases by joining our newsletter.
          </p>

          <form className="mt-8 flex max-w-sm gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
              className="h-11 flex-1 rounded-full border border-[#d5d5d5] px-4 text-xs"
            />
            <button className={BTN}>Subscribe</button>
          </form>

          <p className="mt-4 max-w-sm text-[11px] leading-relaxed">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
          {columns.map((col, i) => (
            <ul key={i} className="grid gap-4">
              {col.map((label) => (
                <li key={label}>
                  <a className="hover:underline">{label}</a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <div className="mt-16 flex flex-wrap justify-between gap-3 border-t border-[#e4e4e4] pt-5 text-[11px]">
        <span>© 2023 ByteSpace. All rights reserved.</span>
        <nav aria-label="Legal" className="flex gap-7">
          <a>Privacy Policy</a>
          <a>Terms of Service</a>
          <a>Cookies Settings</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;