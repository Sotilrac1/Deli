export default function ContactPage() {
  return (
    <>
      <header className="w-full bg-forest py-24 text-center">
        <p className="mb-4 font-lato text-sm uppercase tracking-widest text-gold">
          Restons en contact
        </p>
        <div className="mx-auto mb-6 h-px w-16 bg-gold" />
        <h1 className="font-playfair text-5xl text-white md:text-6xl">
          Nous Contacter
        </h1>
        <div className="mx-auto mt-6 h-px w-16 bg-gold" />
      </header>

      <section className="bg-cream py-24">
        <div className="mx-auto w-full max-w-5xl px-6">
          <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-2">
            <div>
              <h2 className="mb-2 font-playfair text-2xl text-charcoal">
                Envoyez-nous un message
              </h2>
              <div className="mb-8 mt-3 h-px w-12 bg-gold" />

              <form className="space-y-5">
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block font-lato text-xs uppercase tracking-widest text-charcoal/70"
                  >
                    Nom complet
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Votre nom complet"
                    className="w-full border border-gold/40 bg-white px-4 py-3 font-lato text-sm text-charcoal placeholder:text-charcoal/40 transition-colors focus:border-gold focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-lato text-xs uppercase tracking-widest text-charcoal/70"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="vous@email.com"
                    className="w-full border border-gold/40 bg-white px-4 py-3 font-lato text-sm text-charcoal placeholder:text-charcoal/40 transition-colors focus:border-gold focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block font-lato text-xs uppercase tracking-widest text-charcoal/70"
                  >
                    Sujet
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    defaultValue=""
                    className="w-full border border-gold/40 bg-white px-4 py-3 font-lato text-sm text-charcoal transition-colors focus:border-gold focus:outline-none"
                  >
                    <option value="" disabled>
                      Sélectionnez un sujet
                    </option>
                    <option>Commande &amp; Traiteur</option>
                    <option>Plateaux sur mesure</option>
                    <option>Renseignement produit</option>
                    <option>Autre</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block font-lato text-xs uppercase tracking-widest text-charcoal/70"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Écrivez votre message..."
                    className="w-full border border-gold/40 bg-white px-4 py-3 font-lato text-sm text-charcoal placeholder:text-charcoal/40 transition-colors focus:border-gold focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full bg-gold px-8 py-3 font-lato text-sm uppercase tracking-widest text-charcoal transition-all hover:bg-charcoal hover:text-cream"
                >
                  Envoyer le Message
                </button>
              </form>
            </div>

            <div>
              <h2 className="mb-2 font-playfair text-2xl text-charcoal">
                Informations pratiques
              </h2>
              <div className="mb-8 mt-3 h-px w-12 bg-gold" />

              <div className="space-y-8">
                <div>
                  <p className="mb-2 font-lato text-xs uppercase tracking-widest text-gold">
                    Adresse
                  </p>
                  <p className="font-lato text-sm leading-loose text-charcoal/80">
                    21 Rue de la Colombette
                    <br />
                    31000 Toulouse, France
                  </p>
                </div>

                <div>
                  <p className="mb-2 font-lato text-xs uppercase tracking-widest text-gold">
                    Horaires
                  </p>
                  <p className="font-lato text-sm leading-loose text-charcoal/80">
                    Lundi : Fermé
                    <br />
                    Mardi – Vendredi : 9h – 19h
                    <br />
                    Samedi : 8h – 19h30
                    <br />
                    Dimanche : 9h – 14h
                  </p>
                </div>

                <div>
                  <p className="mb-2 font-lato text-xs uppercase tracking-widest text-gold">
                    Contact Direct
                  </p>
                  <p className="font-lato text-sm leading-loose text-charcoal/80">
                    contact@mowsdeli.fr
                    <br />
                    06 99 76 12 46
                  </p>
                </div>
              </div>

              <div className="mt-12">
                <iframe
                  title="Carte de Toulouse centre-ville"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887!2d1.4526624!3d43.6043643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebd41f58676ab%3A0xc08423d71764a4a7!2sMow's%20Delicatessen!5e0!3m2!1sfr!2sfr"
                  className="h-64 w-full border border-gold/30"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-forest py-20 text-center">
        <h2 className="font-playfair text-3xl text-white">
          Plateaux &amp; Commandes sur mesure
        </h2>
        <p className="mt-3 font-lato text-sm text-gold/80">
          Pour vos événements, apéritifs ou cadeaux gourmands — contactez-nous
          et on s&apos;occupe du reste.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-12">
          <div>
            <p className="font-lato text-xs uppercase tracking-widest text-gold">
              Email
            </p>
            <p className="mt-1 font-lato text-sm text-white">
              contact@mowsdeli.fr
            </p>
          </div>

          <div>
            <p className="font-lato text-xs uppercase tracking-widest text-gold">
              Téléphone
            </p>
            <p className="mt-1 font-lato text-sm text-white">06 99 76 12 46</p>
          </div>
        </div>
      </section>
    </>
  );
}
