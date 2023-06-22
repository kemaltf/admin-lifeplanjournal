import Image from "next/image";
import Link from "next/link";
import { BiSolidStore, BiCog } from "react-icons/bi";
import { HiOutlineHome } from "react-icons/hi";
import { CgList } from "react-icons/cg";
import { BsBoxSeamFill } from "react-icons/bs";
import { useRouter } from "next/router";
export default function Nav() {
  const inactiveLink = "flex gap-2 p-1 rounded-l-lg";
  const activeLink = inactiveLink + " bg-white text-blue-900";
  const router = useRouter();
  const { pathname } = router;
  return (
    <aside className="text-white p-4 pr-0">
      <Link href={"/"} className="flex gap-2 mb-4 mr-2">
        <BiSolidStore size={25}></BiSolidStore>
        <span className="">Life Plan Journal Admin</span>
      </Link>
      <nav className="flex flex-col gap-2">
        <Link href={"/"} className={pathname === "/" ? activeLink : inactiveLink}>
          <HiOutlineHome size={25}></HiOutlineHome>
          <span className="">Dashboard</span>
        </Link>
        <Link href={"/products"} className={pathname.includes("/products") ? activeLink : inactiveLink}>
          <BsBoxSeamFill size={25}></BsBoxSeamFill>
          <span className="">Products</span>
        </Link>
        <Link href={"/orders"} className={pathname.includes("/orders") ? activeLink : inactiveLink}>
          <CgList size={25}></CgList>
          <span className="">Orders</span>
        </Link>
        <Link href={"/settings"} className={pathname.includes("/settings") ? activeLink : inactiveLink}>
          <BiCog size={25}></BiCog>
          <span className="">Settings</span>
        </Link>
      </nav>
    </aside>
  );
}
