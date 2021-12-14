import Link from "next/link";

const NavBar = () => {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Index</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/services">
          <a>Index</a>
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;
