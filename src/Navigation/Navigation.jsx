import { NavLink } from "react-router-dom";
import { getNavLinkClass } from "../helpers/classNames";
import { LINKS } from "../constants/links";
import { motion } from "framer-motion";

export default function Navigation() {
  return (
    <nav className="font-bold text-[21px]">
      <ul className="flex gap-5 justify-center">
        {LINKS.map((link, index) => (
          <motion.li
            key={link.text}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 1, duration: 0.5 }}
          >
            <NavLink
              to={link.to}
              className={({ isActive }) => getNavLinkClass(isActive)}
            >
              {link.text}
            </NavLink>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}
