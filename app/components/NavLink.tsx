import Link from "next/link"

type Props = {
  href: string;
  title: string;
}

const NavLink = ({ href, title }: Props) => {
  return (
    <Link 
      href={href} 
      className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white hover:border-t-2 hover:border-t-white transition-all duration-300'>
      {title}
    </Link>
  )
}

export default NavLink

