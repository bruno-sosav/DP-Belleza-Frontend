export default function About() {
  return (
    <div>
      <section className="relative">
        <img
          src="https://picsum.photos/seed/about-hero/1600/500"
          alt="Dp.belleza"
          className="h-64 w-full object-cover sm:h-80"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-ink/40">
          <h1 className="font-display text-3xl font-semibold text-cream sm:text-4xl">Nuestra historia</h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <p className="text-ink-soft leading-relaxed">
          Dp.belleza nació con la idea de acercar cosmética y cuidado personal de calidad a cada persona,
          combinando ingredientes efectivos con fórmulas pensadas para el uso diario. Creemos en una belleza
          real, sin filtros, que se cuida desde adentro hacia afuera.
        </p>
        <p className="mt-4 text-ink-soft leading-relaxed">
          Seleccionamos cada producto de nuestro catálogo pensando en su calidad, su origen y su impacto,
          para que puedas confiar en lo que aplicás sobre tu piel y tu cabello todos los días.
        </p>
      </section>

      <section className="bg-cream-dark/50 py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
          {[
            { title: "Calidad", desc: "Ingredientes seleccionados y fórmulas testeadas." },
            { title: "Transparencia", desc: "Información clara sobre cada producto." },
            { title: "Comunidad", desc: "Escuchamos a quienes usan nuestros productos." },
          ].map((v) => (
            <div key={v.title} className="text-center">
              <h3 className="font-display text-lg font-semibold text-ink">{v.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
