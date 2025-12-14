import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faCartShopping,
  faRightToBracket,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between px-[10%] pt-5 max-[600px]:justify-center max-[600px]:px-0">
      <Link href="/" className="flex items-center gap-1 max-[600px]:hidden">
        <span>
          <FontAwesomeIcon
            icon={faBagShopping}
            className="text-3xl mr-1 w-10 h-10 text-blue-700"
          />
        </span>

        <div>
          <span className="font-bold">MJG</span>
          <p className="tracking-wide text-sm">Shopping</p>
        </div>
      </Link>

      <nav className="flex items-center gap-4 max-[600px]:flex-wrap max-[600px]:justify-center">
        <Link
          href="/cart"
          className="relative flex items-center gap-1 bg-(--bodyFont) text-(--blue) text-sm px-4 py-2 rounded-full"
        >
          <FontAwesomeIcon
            icon={faCartShopping}
            className="text-(--blue) w-3"
          />
          $0.00
          <span className="absolute -top-1 right-0 w-5 h-5 text-[0.7rem] font-bold bg-pink-500 text-white flex items-center justify-center rounded-full">
            2
          </span>
        </Link>

        <Link
          href="/signin"
          className="flex items-center gap-1 border border-(--bodyFont) px-4 py-2 text-xs font-medium rounded-full transition hover:bg-(--bodyFont) hover:text-(--blue)"
        >
          <FontAwesomeIcon icon={faRightToBracket} className="w-3" />
          Sign in
        </Link>

        <Link
          href="/register"
          className="flex items-center gap-1 border border-(--bodyFont) px-4 py-2 text-xs font-medium rounded-full transition hover:bg-(--bodyFont) hover:text-(--blue)"
        >
          <FontAwesomeIcon icon={faUserPlus} className="w-3" />
          Register
        </Link>
      </nav>
    </header>
  );
}

export default Header;
