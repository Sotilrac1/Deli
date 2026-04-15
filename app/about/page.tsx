import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <header className="w-full bg-forest py-24 text-center">
        <p className="mb-4 font-lato text-sm uppercase tracking-widest text-gold">
          Notre Histoire
        </p>
        <div className="mx-auto mb-6 h-px w-16 bg-gold" />
        <h1 className="font-playfair text-5xl text-white md:text-6xl">
          À Propos
        </h1>
        <div className="mx-auto mt-6 h-px w-16 bg-gold" />
      </header>

      <section className="bg-cream py-24">
        <div className="mx-auto w-full max-w-3xl px-6 text-center">
          <h2 className="mb-6 font-playfair text-3xl text-charcoal">
            New York soul, French heart.
          </h2>
          <div className="mx-auto mb-10 h-px w-16 bg-gold" />
          <p className="mb-6 font-lato text-base leading-relaxed text-charcoal/80">
            Mow&apos;s Deli est né d&apos;une passion simple : réunir le meilleur
            des deux mondes. L&apos;énergie brute des delis de New York — le
            pastrami fumé, les sandwiches généreux, l&apos;ambiance qui ne dort
            jamais — et la rigueur française dans le choix des produits, des
            fromages affinés, des charcuteries d&apos;exception.
          </p>
          <p className="mb-6 font-lato text-base leading-relaxed text-charcoal/80">
            Installés à Toulouse, nous sélectionnons chaque produit avec soin.
            Nos jambons ibériques viennent d&apos;Estrémadure, notre comté du
            Jura, notre mortadelle de Bologne. Le pastrami ? On le fume
            nous-mêmes, selon notre propre recette maison.
          </p>
          <p className="mb-6 font-lato text-base leading-relaxed text-charcoal/80">
            Chez Mow&apos;s, on croit que bien manger ne devrait pas être
            compliqué. Une baguette, du bon beurre, un jambon d&apos;exception
            — c&apos;est déjà un festin. Venez comme vous êtes. On
            s&apos;occupe du reste.
          </p>
        </div>
      </section>

      <section className="border-y border-gold/20 bg-white py-20">
        <div className="mx-auto w-full max-w-5xl px-6">
          <h2 className="text-center font-playfair text-3xl text-charcoal">
            Ce qui nous définit
          </h2>
          <div className="mx-auto mb-16 mt-4 h-px w-16 bg-gold" />

          <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3">
            <article>
              <p className="mb-4 text-4xl">🥩</p>
              <h3 className="mb-3 font-playfair text-xl text-charcoal">
                Produits d&apos;Exception
              </h3>
              <p className="font-lato text-sm leading-relaxed text-charcoal/70">
                Nous sourceons directement auprès de producteurs artisanaux en
                France, Espagne et Italie. Jamais de compromis sur la qualité.
              </p>
            </article>

            <article>
              <p className="mb-4 text-4xl">🤝</p>
              <h3 className="mb-3 font-playfair text-xl text-charcoal">
                Fait Maison
              </h3>
              <p className="font-lato text-sm leading-relaxed text-charcoal/70">
                Notre pastrami est fumé sur place. Nos compotées de tomates
                mijotées maison. Ce que l&apos;on peut faire nous-mêmes, on le
                fait.
              </p>
            </article>

            <article>
              <p className="mb-4 text-4xl">🌍</p>
              <h3 className="mb-3 font-playfair text-xl text-charcoal">
                Deux Cultures, Une Table
              </h3>
              <p className="font-lato text-sm leading-relaxed text-charcoal/70">
                L&apos;âme d&apos;un deli new-yorkais, l&apos;exigence française.
                Deux traditions qui se respectent et se complètent parfaitement.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-forest py-20 text-center">
        <p className="font-playfair text-3xl italic text-white md:text-4xl">
          Le bon produit n&apos;a pas besoin d&apos;être compliqué.
        </p>
        <p className="mt-6 font-lato text-sm uppercase tracking-widest text-gold">
          — Mow&apos;s Deli, Toulouse
        </p>
      </section>

      <section className="bg-cream py-24 text-center">
        <h2 className="font-playfair text-3xl text-charcoal">
          Venez nous rendre visite
        </h2>
        <div className="mx-auto mb-10 mt-4 h-px w-16 bg-gold" />

        <div className="mx-auto grid w-full max-w-2xl grid-cols-1 gap-12 px-6 text-left md:grid-cols-2">
          <div>
            <p className="mb-4 font-lato text-xs uppercase tracking-widest text-gold">
              Horaires
            </p>
            <ul className="font-lato text-sm leading-loose text-charcoal/80">
              <li>Lundi : Fermé</li>
              <li>Mardi – Vendredi : 9h – 19h</li>
              <li>Samedi : 8h – 19h30</li>
              <li>Dimanche : 9h – 14h</li>
            </ul>
          </div>

          <div>
            <p className="mb-4 font-lato text-xs uppercase tracking-widest text-gold">
              Nous trouver
            </p>
            <div className="font-lato text-sm leading-loose text-charcoal/80">
              <p>12 Rue de la République</p>
              <p>31000 Toulouse</p>
              <p>contact@mowsdeli.fr</p>
              <p>05 61 XX XX XX</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <Link
            href="/contact"
            className="inline-flex bg-gold px-8 py-3 font-lato text-sm uppercase tracking-widest text-charcoal transition-all hover:bg-charcoal hover:text-cream"
          >
            Nous Contacter
          </Link>
        </div>
      </section>
    </>
  );
}
