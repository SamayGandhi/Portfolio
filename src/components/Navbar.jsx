import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const navLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Education", to: "education" },
  { name: "Certificates", to: "certificates" },
  { name: "Contact", to: "contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-slate-950/70 border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
      style={{ height: "var(--nav-height)" }}
    >
      <div className="container flex items-center justify-between h-full">

        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-70}
          className="text-2xl font-bold tracking-wide cursor-pointer select-none"
          aria-label="Go to homepage"
        >
          <span className="gradient-text">Samay Gandhi</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {navLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              activeClass="text-white bg-white/10"
              className="cursor-pointer text-slate-300 hover:text-white hover:bg-white/5 transition duration-300 font-medium px-4 py-2 rounded-full text-sm"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary btn-sm hidden lg:inline-flex"
        >
          Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white text-3xl p-2 -mr-2 rounded-lg hover:bg-white/5 transition"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <nav
          className="bg-slate-950/95 backdrop-blur-xl border-t border-white/10"
          aria-label="Mobile"
        >
          {navLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setMenuOpen(false)}
              activeClass="text-blue-400 bg-white/5"
              className="block px-6 py-4 border-b border-white/5 text-slate-300 hover:text-blue-400 hover:bg-white/5 transition cursor-pointer"
            >
              {item.name}
            </Link>
          ))}

          <div className="p-6">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-block"
            >
              Download Resume
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;