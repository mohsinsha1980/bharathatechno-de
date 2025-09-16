"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import useOutsideClick from "@/hooks/useOutsideClick";

const NAV_LIST = [
  {
    id: 0,
    label: "About",
    link: "/about",
  },
  {
    id: 1,
    label: "Work",
    link: "/work",
  },
  {
    id: 2,
    label: "Offerings",
    hasChild: true,
    children: [
      {
        id: 2.1,
        label: "Products",
        link: "/offerings/products",
        hasChild: false,
      },
      {
        id: 2.2,
        label: "Services",
        link: "/offerings/services",
      },
    ],
  },
];

type Position = {
  left: number;
  width: number;
  opacity: number;
};

type TabProps = {
  children: React.ReactNode;
  className: string;
  setPosition: (pos: Position) => void;
  onClick?: () => void;
};

type NavItem = {
  id: number;
  label: string;
  link: string;
};

export default function HeaderNav() {
  const navContainer = {
    visible: {
      //x: 0,
      opacity: 1,
      transition: {
        x: { velocity: 100 },
        duration: 0.3,
      },
    },
    hidden: {
      //x: -250,
      opacity: 0,
      transition: {
        x: { velocity: 100 },
        duration: 0.3,
      },
    },
  };

  const navList = {
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.07,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const navItem = {
    visible: {
      y: -120,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
        duration: 0.3,
      },
    },
    hidden: {
      y: -115,
      opacity: 0,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
        duration: 0.3,
      },
    },
  };

  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const pathname = usePathname();
  const [isToggled, setIsToggled] = useState<boolean>(false);

  useEffect(() => {
    setIsToggled(false);
  }, [pathname]);

  const ref = useOutsideClick<HTMLUListElement>(() => {
    setIsToggled(false);
  });

  const isActive = (link: string): boolean => {
    return pathname.startsWith(link);
  };

  const isChildActive = (children: NavItem[]): boolean => {
    return children.some((item) => {
      return pathname.startsWith(item.link);
    });
  };

  return (
    <nav className="relative">
      <motion.ul
        onMouseLeave={() => {
          setPosition((pv) => ({
            ...pv,
            opacity: 0,
          }));
        }}
      >
        <Cursor position={position} />
        {NAV_LIST.map((item) => {
          if (item.link) {
            return (
              <Tab
                key={item.id}
                setPosition={setPosition}
                className={isActive(item.link) ? "active" : ""}
              >
                <Link href={item.link}>{item.label}</Link>
              </Tab>
            );
          }
          if (item.children?.length) {
            return (
              <Tab
                key={item.id}
                setPosition={setPosition}
                className={
                  isChildActive(item.children) ? "relative active" : "relative"
                }
                onClick={() => setIsToggled(!isToggled)}
              >
                <span>{item.label}</span>
                <AnimatePresence>
                  {isToggled && (
                    <motion.div
                      className="absolute left-0 top-[-10px] w-auto min-w-full h-px rounded-[10px]"
                      initial="hidden"
                      animate={isToggled ? "visible" : "hidden"}
                      exit="hidden"
                      variants={navContainer}
                    >
                      <motion.ul
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={navList}
                        ref={ref}
                      >
                        <motion.li variants={navItem} key="offerings-1">
                          <Link href="/offerings/products">Products</Link>
                        </motion.li>
                        <motion.li variants={navItem} key="offerings-2">
                          <Link href="/offerings/services/full-stack-development">
                            Services
                          </Link>
                        </motion.li>
                      </motion.ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Tab>
            );
          }
        })}
      </motion.ul>
    </nav>
  );
}

const Tab: React.FC<TabProps> = ({
  children,
  className,
  setPosition,
  onClick,
}) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      className={className}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      onClick={onClick}
    >
      {children}
    </li>
  );
};

function Cursor({
  position,
}: {
  position: {
    left: number;
    width: number;
    opacity: number;
  };
}) {
  return (
    <motion.li className="cursor max-lg:hidden" animate={{ ...position }} />
  );
}
