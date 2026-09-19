export default function Contact() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="font-display text-3xl font-semibold text-ink">Contacto</h1>
        <p className="mt-2 text-ink-soft">¿Tenés dudas o sugerencias? Escribinos, te respondemos a la brevedad.</p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input placeholder="Nombre" className="rounded-md border border-cream-dark px-3 py-2.5 text-sm outline-none" />
            <input placeholder="Email" type="email" className="rounded-md border border-cream-dark px-3 py-2.5 text-sm outline-none" />
          </div>
          <input placeholder="Asunto" className="w-full rounded-md border border-cream-dark px-3 py-2.5 text-sm outline-none" />
          <textarea
            placeholder="Tu mensaje"
            rows={5}
            className="w-full rounded-md border border-cream-dark px-3 py-2.5 text-sm outline-none"
          />
          <button
            type="submit"
            className="rounded-md bg-ink px-7 py-3 text-sm font-medium text-cream transition hover:bg-rose-dark"
          >
            Enviar mensaje
          </button>
        </form>

        <div className="space-y-6">
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-ink">Dirección</h3>
            <p className="mt-2 text-sm text-ink-soft">Av. Siempre Viva 1234, Buenos Aires, Argentina</p>
          </div>
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-ink">Contacto</h3>
            <p className="mt-2 text-sm text-ink-soft">hola@dpbelleza.com</p>
            <p className="text-sm text-ink-soft">+54 11 1234-5678</p>
          </div>
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-ink">Horario de atención</h3>
            <p className="mt-2 text-sm text-ink-soft">Lunes a viernes de 9 a 18hs</p>
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src="https://picsum.photos/seed/contact-map/700/350" alt="Mapa" className="w-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}
