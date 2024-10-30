import Image from "next/image";
import Link from "next/link";
import Button from "./button";

const nav = [
  {
    pathname: "Home",
    path: "#",
  },
  {
    pathname: "Features",
    path: "#",
  },
  {
    pathname: "Pricing",
    path: "#",
  },
  {
    pathname: "FAQ",
    path: "#",
  },
];

export default function DesktopHeader() {
  return (
    <header className="flex items-center gap-4 fixed left-0 right-0 px-20 py-5 ">
      <div>
        <Image
          src={"/white-logo.png"}
          alt="The Valley Logo"
          width={137}
          height={50}
        />
      </div>

      <nav className="w-full flex items-center justify-between">
        <ul className="flex items-center gap-4">
          {nav.map((nav) => {
            return (
              <li
                key={nav.pathname}
                className="text-white font-semibold text-sm sm:text-base"
              >
                <Link href={nav.path}>{nav?.pathname}</Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-4">
          <Button
            text="Become a Seller "
            className="text-lightGreen bg-white"
          />
          <Button text="Login" className="bg-lightGreen text-white" />
        </div>
      </nav>
    </header>
  );
}
