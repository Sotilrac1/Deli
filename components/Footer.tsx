import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gold bg-charcoal text-cream">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 md:grid-cols-3">
        <div>
          <h3 className="font-playfair text-2xl">Mow&apos;s Deli</h3>
          <p className="mt-2 font-lato text-sm">New York soul, French heart.</p>
        </div>

        <div>
          <h4 className="font-playfair text-lg">Navigation</h4>
          <div className="mt-3 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-lato text-sm transition-colors duration-300 hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="font-lato text-sm">
          <h4 className="font-playfair text-lg">Visit Us</h4>
          <p className="mt-3">12 Rue de la République, Toulouse</p>
          <p className="mt-2">Mar–Sam : 9h–19h</p>
        </div>
      </div>

      <div className="border-t border-gold px-5 py-4 text-center font-lato text-xs">
        &copy; 2026 Mow&apos;s Deli · Toulouse
      </div>
    </footer>
  );
}
