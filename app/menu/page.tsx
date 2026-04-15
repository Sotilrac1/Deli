import Link from "next/link";

const sandwiches = [
  {
    name: "Lower East Pastrami",
    price: "9€",
    description:
      "Pain rustique, pastrami de boeuf, moutarde, mayo, cornichon, oignon nouveau",
  },
  {
    name: "Brooklyn Pastrami",
    price: "9€",
    description: "Bun, pastrami de dinde, tzatziki, salade, tomate, comté",
  },
  {
    name: "Manhattan Melt",
    price: "9€",
    description:
      "Bun, saumon fumé, avocat, philadelphia citroné, salade, pickles fenouil et oignon",
  },
  {
    name: "Central Park Special",
    price: "9€",
    description:
      "Pain rustique, portobello, tomate, concombre, salade, guacamole, feta",
  },
  {
    name: "Spanish Harlem",
    price: "8€",
    description:
      "Baguette, jambon Teruel, manchego, compotée de tomate au vin rouge",
  },
  {
    name: "East Harlem",
    price: "12€",
    description: "Baguette, jambon Bellota, compotée de tomate au vin rouge",
  },
  {
    name: "Bronx Chorizo",
    price: "8€",
    description:
      "Baguette, chorizo Bellota, Ossau-Iraty, compotée de tomate au vin rouge",
  },
  {
    name: "Queens Lomo",
    price: "8€",
    description: "Baguette, lomo Bellota, manchego, chimichurri",
  },
  {
    name: "Little Paris",
    price: "7€",
    description: "Baguette, beurre, cornichon, jambon blanc, emmental",
  },
  {
    name: "5th Avenue Club",
    price: "9.50€",
    description:
      "Baguette, beurre, jambon à la truffe, parmesan, salade, tomate séchée",
  },
  {
    name: "Little Italy",
    price: "9.50€",
    description: "Bun, mortadelle pistache, burrata, pesto, salade",
  },
  {
    name: "Make Your Own",
    price: "9.50€",
    description: "Composez votre sandwich selon vos envies",
  },
];

const charcuterieItems = [
  {
    name: "Mow's Pastrami",
    price: "49€/kg",
    note: "Maison · Fumé, poivré, savoureux — notre recette signature",
  },
  {
    name: "Pastrami de Dinde",
    price: "32€/kg",
    note: "Maison · Version légère, tout aussi fumée et parfumée",
  },
  {
    name: "Saumon Fumé",
    price: "52€/kg",
    note: "Maison · Délicat, fumé à froid, fondant",
  },
  {
    name: "Jambon Blanc",
    price: "24€/kg",
    note: "France · Doux, soyeux, légèrement salé",
  },
  {
    name: "Jambon Truffé",
    price: "46€/kg",
    note: "France · Jambon blanc sublimé à la truffe noire",
  },
  {
    name: "Jambon Teruel",
    price: "33€/kg",
    note: "Aragon, Espagne · Doux, légèrement sucré, aromatique",
  },
  {
    name: "Jambon Bellota",
    price: "99€/kg",
    note: "Estrémadure, Espagne · Riche, noisette, soyeux, complexe",
  },
  {
    name: "Chorizo Bellota",
    price: "33€/kg",
    note: "Estrémadure, Espagne · Fumé, épicé, intense",
  },
  {
    name: "Lomo Bellota",
    price: "49€/kg",
    note: "Estrémadure, Espagne · Terreux, noisette, intensément savoureux",
  },
  {
    name: "Mortadelle Pistache",
    price: "39€/kg",
    note: "Bologne, Italie · Délicat, crémeux, légèrement épicé",
  },
];

const cheeseItems = [
  {
    name: "Emmental",
    price: "19€/kg",
    note: "Suisse · Doux, sucré, noisette, crémeux",
  },
  {
    name: "Comté",
    price: "32€/kg",
    note: "Jura, France · Fruité, noisette, herbacé, caramélisé",
  },
  {
    name: "Parmesan",
    price: "35€/kg",
    note: "Parme, Italie · Umami, salé, cristallin, riche",
  },
  {
    name: "Manchego",
    price: "24€/kg",
    note: "La Mancha, Espagne · Beurré, légèrement sucré, noisette",
  },
  {
    name: "Ossau-Iraty",
    price: "32€/kg",
    note: "Pays Basque, France · Doux, beurré, légèrement sucré, herbacé",
  },
  {
    name: "Feta",
    price: "28€/kg",
    note: "Grèce · Salé, vif, crémeux, légèrement acidulé",
  },
];

export default function MenuPage() {
  return (
    <>
      <header className="w-full bg-forest py-24 text-center">
        <p className="mb-4 font-lato text-sm uppercase tracking-widest text-gold">
          Toulouse, France
        </p>
        <div className="mx-auto mb-6 h-px w-16 bg-gold" />
        <h1 className="font-playfair text-5xl text-white md:text-6xl">
          Notre Carte
        </h1>
        <div className="mx-auto mb-4 mt-6 h-px w-16 bg-gold" />
        <p className="mt-2 font-lato text-base italic text-gold/80">
          Produits frais · Faits maison · Sélectionnés avec soin
        </p>
      </header>

      <section className="bg-cream px-6 py-20">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className="text-center font-playfair text-4xl text-charcoal">
            Sandwiches
          </h2>
          <p className="mb-12 mt-2 text-center font-lato text-sm text-charcoal/60">
            Tous nos sandwiches sont servis à partir de 7€
          </p>
          <div className="mx-auto mb-12 h-px w-16 bg-gold" />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {sandwiches.map((item) => (
              <article key={item.name} className="border-b border-gold/20 pb-6">
                <div className="flex items-center gap-4">
                  <h3 className="font-playfair text-lg font-semibold text-charcoal">
                    {item.name}
                  </h3>
                  <p className="ml-auto font-playfair text-lg text-gold">
                    {item.price}
                  </p>
                </div>
                <p className="mt-1 font-lato text-sm italic text-charcoal/60">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="my-0 h-px w-full bg-gold/20" />

      <section className="bg-white px-6 py-20">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className="text-center font-playfair text-4xl text-charcoal">
            Charcuterie
          </h2>
          <p className="mb-12 mt-2 text-center font-lato text-sm text-charcoal/60">
            Tranchée à la commande · Prix au kilogramme
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {charcuterieItems.map((item) => (
              <article key={item.name} className="border-b border-gold/20 pb-6">
                <div className="flex items-center gap-4">
                  <h3 className="font-playfair text-lg text-charcoal">
                    {item.name}
                  </h3>
                  <p className="ml-auto font-playfair text-lg text-gold">
                    {item.price}
                  </p>
                </div>
                <p className="mt-1 font-lato text-sm italic text-charcoal/60">
                  {item.note}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="my-0 h-px w-full bg-gold/20" />

      <section className="bg-cream px-6 py-20">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className="text-center font-playfair text-4xl text-charcoal">
            Fromages
          </h2>
          <p className="mb-12 mt-2 text-center font-lato text-sm text-charcoal/60">
            Affinés avec soin · Prix au kilogramme
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {cheeseItems.map((item) => (
              <article key={item.name} className="border-b border-gold/20 pb-6">
                <div className="flex items-center gap-4">
                  <h3 className="font-playfair text-lg text-charcoal">
                    {item.name}
                  </h3>
                  <p className="ml-auto font-playfair text-lg text-gold">
                    {item.price}
                  </p>
                </div>
                <p className="mt-1 font-lato text-sm italic text-charcoal/60">
                  {item.note}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest py-20 text-center">
        <h2 className="font-playfair text-3xl text-white">
          Plateaux &amp; Commandes sur mesure
        </h2>
        <p className="mt-3 font-lato text-sm text-gold/80">
          Pour vos événements, apéritifs ou cadeaux gourmands
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex border border-gold px-8 py-3 font-lato text-sm uppercase tracking-widest text-gold transition-all hover:bg-gold hover:text-charcoal"
        >
          Nous Contacter
        </Link>
      </section>
    </>
  );
}
