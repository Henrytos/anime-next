import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function NavLinks() {
  const path = usePathname();
  const [currentPath, setCurrentPath] = useState<string>("");

  const handleClickLink = (path: string) => {
    setCurrentPath(path);
  };

  useEffect(() => {
    setCurrentPath(path);
  }, []);

  const links = [
    {
      id: 1,
      name: "All",
      path: "/favorites",
    },
    {
      id: 2,
      name: "Animes",
      path: "/favorites?type=anime",
    },
    {
      id: 3,
      name: "Mangás",
      path: "/favorites?type=manga",
    },
  ];
  return (
    <nav className=" flex gap-3 text-sm font-light ">
      {links.map((link) => (
        <Link
          id={link.id.toString()}
          className={clsx("", {
            "text-primary font-normal": currentPath === link.path,
          })}
          href={link.path}
          onClick={() => handleClickLink(link.path)}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
