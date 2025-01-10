import { usePathname } from "next/navigation";

const hidePaths = ["/enrollment", "/restricted"];

const useHideNav = () => {
  const pathname = usePathname();

  return !hidePaths.includes(pathname);
};

export default useHideNav;
