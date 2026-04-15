import Image from "next/image";
import Link from "next/link";

const featuredSandwiches = [
  {
    tag: "Le Classique",
    name: "Little Paris",
    description: "Baguette, beurre, cornichon, jambon blanc, emmental",
    price: "7€",
  },
  {
    tag: "Le Signature",
    name: "Lower East Pastrami",
    description:
      "Pain rustique, pastrami maison, moutarde, mayo, cornichon, oignon nouveau",
    price: "9€",
  },
  {
    tag: "Le Prestige",
    name: "East Harlem",
    description: "Baguette, Jambon Bellota, compotée de tomate au vin rouge",
    price: "12€",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen">
        <Image
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600"
          alt="Mow's Deli"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 z-10 bg-black/50" />

        <div className="relative z-20 flex min-h-screen items-center justify-center px-6 text-center">
          <div>
            <div className="mx-auto h-px w-16 bg-gold" />
            <p className="mt-4 font-lato text-sm uppercase tracking-widest text-gold">
              Toulouse, France
            </p>
            <div className="mx-auto mt-4 h-px w-16 bg-gold" />

            <h1 className="mt-4 font-playfair text-6xl font-normal text-white md:text-8xl">
              Mow&apos;s Deli
            </h1>
            <p className="mt-2 font-lato text-lg italic text-white/70">
              New York soul · French heart · Toulouse
            </p>

            <Link
              href="/menu"
              className="mt-8 inline-flex border border-gold px-8 py-3 font-lato text-sm uppercase tracking-widest text-gold transition-all hover:bg-gold hover:text-charcoal"
            >
              Voir le Menu
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-gold bg-cream py-20">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-6 text-center md:grid-cols-3">
          <article>
            <p className="mb-4 text-4xl">🥩</p>
            <h2 className="mb-2 font-playfair text-xl text-charcoal">
              Charcuterie Maison
            </h2>
            <p className="font-lato text-sm text-charcoal/70">
              Pastrami fumé, jambons ibériques et mortadelle sélectionnés avec
              soin
            </p>
          </article>

          <article>
            <p className="mb-4 text-4xl">🧀</p>
            <h2 className="mb-2 font-playfair text-xl text-charcoal">
              Fromages Affinés
            </h2>
            <p className="font-lato text-sm text-charcoal/70">
              Comté, Ossau-Iraty, Manchego — une sélection de caractère
            </p>
          </article>

          <article>
            <p className="mb-4 text-4xl">🥖</p>
            <h2 className="mb-2 font-playfair text-xl text-charcoal">
              Sandwiches du Jour
            </h2>
            <p className="font-lato text-sm text-charcoal/70">
              Douze recettes uniques, inspirées des rues de New York et de
              Paris
            </p>
          </article>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="px-6 text-center">
          <h2 className="font-playfair text-4xl text-charcoal">
            Nos Incontournables
          </h2>
          <div className="mx-auto mb-12 mt-4 h-px w-16 bg-gold" />
        </div>

        <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-8 px-6 md:grid-cols-3">
          {featuredSandwiches.map((sandwich) => (
            <article
              key={sandwich.name}
              className="rounded-sm border border-gold/30 bg-white p-8"
            >
              <p className="mb-2 font-lato text-xs uppercase tracking-widest text-gold">
                {sandwich.tag}
              </p>
              <h3 className="mb-3 font-playfair text-2xl text-charcoal">
                {sandwich.name}
              </h3>
              <p className="mb-4 font-lato text-sm text-charcoal/70">
                {sandwich.description}
              </p>
              <p className="font-playfair text-xl text-gold">{sandwich.price}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-forest py-20 text-center">
        <p className="font-playfair text-3xl italic text-white md:text-4xl">
          New York soul, French heart.
        </p>
        <p className="mt-4 font-lato text-sm uppercase tracking-widest text-gold">
          — Mow&apos;s Deli, Toulouse
        </p>
      </section>

      <section className="bg-cream py-20 text-center">
        <h2 className="font-playfair text-3xl text-charcoal">
          Venez nous rendre visite
        </h2>
        <p className="mt-3 font-lato text-sm text-charcoal/70">
          12 Rue de la République, Toulouse · Mar–Sam : 9h–19h
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4 px-6">
          <Link
            href="/menu"
            className="bg-gold px-8 py-3 font-lato text-sm uppercase tracking-widest text-charcoal transition-all hover:bg-charcoal hover:text-cream"
          >
            Voir le Menu
          </Link>
          <Link
            href="/contact"
            className="border border-charcoal px-8 py-3 font-lato text-sm uppercase tracking-widest text-charcoal transition-all hover:bg-charcoal hover:text-cream"
          >
            Nous Contacter
          </Link>
        </div>
      </section>
    </>
  );
}
