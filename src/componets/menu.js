import Link from 'next/link';

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href='/'>
            Home
          </Link>
        </li>
        <li>
          <Link href='/login'>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
