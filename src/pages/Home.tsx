import { Link } from "react-router-dom"
import { categories, products } from "../data/products"
import ProductCard from "../components/ProductCard"

const categoryImages: Record<string, string> = {
  Skincare: "https://picsum.photos/seed/cat-skincare/500/600",
  Maquillaje: "https://picsum.photos/seed/cat-makeup/500/600",
  Cabello: "https://picsum.photos/seed/cat-hair/500/600",
  Perfumes: "https://picsum.photos/seed/cat-perfume/500/600",
  "Cuidado Corporal": "https://picsum.photos/seed/cat-body/500/600",
}

const perks = [
  {
    title: "Envío a todo el país",
    desc: "Recibí tu pedido en 24/48hs en CABA y GBA.",
    icon: (
      <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7v-6zM6.5 19a1.8 1.8 0 100-3.6 1.8 1.8 0 000 3.6zM17.5 19a1.8 1.8 0 100-3.6 1.8 1.8 0 000 3.6z" />
    ),
  },
  {
    title: "Pago seguro",
    desc: "Tarjetas, transferencia y billeteras virtuales.",
    icon: <path d="M3 8h18M3 8v9a1 1 0 001 1h16a1 1 0 001-1V8M3 8l2-3h14l2 3M7 15h4" />,
  },
  {
    title: "Cambios sin cargo",
    desc: "30 días para cambiar tu producto.",
    icon: <path d="M4 12a8 8 0 0113.5-5.5M20 12a8 8 0 01-13.5 5.5M4 4v5h5M20 20v-5h-5" />,
  },
  {
    title: "Asesoramiento experto",
    desc: "Te ayudamos a elegir vía chat y email.",
    icon: <path d="M4 5h16v10H8l-4 4V5z" />,
  },
]

const testimonials = [
  {
    quote:
      "El sérum de vitamina C cambió por completo mi piel en un mes. La textura es liviana y no engrasa.",
    author: "Camila R.",
    rating: 5,
  },
  {
    quote:
      "Pedí el perfume floral y llegó antes de lo esperado, perfecto embalado. Ya es mi fragancia de todos los días.",
    author: "Valentina G.",
    rating: 5,
  },
  {
    quote:
      "La paleta de sombras tiene una pigmentación increíble para el precio. Volví a comprar apenas la terminé.",
    author: "Sofía M.",
    rating: 4,
  },
]

export default function Home() {
  const bestsellers = products.filter((p) => p.badge === "Bestseller")
  const news = products.filter((p) => p.badge === "Nuevo")

  return (
    <div>
      <section className="relative overflow-hidden bg-cream-dark">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-28 lg:px-8">
          <div className="order-2 lg:order-1">
            <p className="text-xs uppercase tracking-[0.2em] text-rose-dark">Nueva colección primavera</p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
              Belleza que se nota,
              <br /> cuidado que se siente
            </h1>
            <p className="mt-5 max-w-md text-ink-soft">
              Descubrí una selección de cosmética y cuidado personal pensada para realzar tu belleza
              natural, con ingredientes de calidad y fórmulas efectivas.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/tienda"
                className="rounded-md bg-ink px-7 py-3 text-sm font-medium text-cream transition hover:bg-rose-dark"
              >
                Comprar ahora
              </Link>
              <Link
                to="/tienda"
                className="rounded-md border border-ink px-7 py-3 text-sm font-medium text-ink transition hover:bg-ink hover:text-cream"
              >
                Ver catálogo
              </Link>
            </div>

            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-ink/10 pt-8">
              <div>
                <dt className="font-display text-2xl font-semibold text-ink">+12k</dt>
                <dd className="mt-0.5 text-xs text-ink-soft">Clientas felices</dd>
              </div>
              <div>
                <dt className="font-display text-2xl font-semibold text-ink">300+</dt>
                <dd className="mt-0.5 text-xs text-ink-soft">Productos</dd>
              </div>
              <div>
                <dt className="font-display text-2xl font-semibold text-ink">4.8/5</dt>
                <dd className="mt-0.5 text-xs text-ink-soft">Calificación media</dd>
              </div>
            </dl>
          </div>

          <div className="order-1 lg:order-2">
            <img
              src="https://picsum.photos/seed/hero-beauty/900/1000"
              alt="Producto destacado Dp.belleza"
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-cream-dark bg-cream">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
          {perks.map((p) => (
            <div key={p.title} className="flex flex-col items-center text-center sm:items-start sm:text-left">
              <svg viewBox="0 0 24 24" className="h-7 w-7 text-rose-dark" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
                {p.icon}
              </svg>
              <h3 className="mt-3 font-display text-sm font-semibold text-ink">{p.title}</h3>
              <p className="mt-1 text-xs text-ink-soft">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-rose-dark">Categorías</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl">Comprá por categoría</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((c) => (
            <Link
              key={c}
              to={`/tienda?categoria=${encodeURIComponent(c)}`}
              className="group relative overflow-hidden rounded-xl"
            >
              <img
                src={categoryImages[c]}
                alt={c}
                className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
              <span className="absolute bottom-3 left-3 font-display text-sm font-medium text-cream sm:text-base">
                {c}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-cream-dark/50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-rose-dark">Favoritos</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl">Más vendidos</h2>
            </div>
            <Link to="/tienda" className="text-sm font-medium text-rose-dark hover:underline">
              Ver todos →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
            {bestsellers.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-rose-dark">Novedades</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl">Recién llegados</h2>
          </div>
          <Link to="/tienda" className="text-sm font-medium text-rose-dark hover:underline">
            Ver todos →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
          {news.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="bg-ink py-16 text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-rose">Testimonios</p>
            <h2 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">Lo que dicen nuestras clientas</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.author} className="rounded-xl border border-cream/10 bg-cream/5 p-6">
                <div className="flex text-rose">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      viewBox="0 0 20 20"
                      className="h-3.5 w-3.5"
                      fill={i < t.rating ? "currentColor" : "none"}
                      stroke="currentColor"
                      strokeWidth={i < t.rating ? 0 : 1.2}
                    >
                      <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6L10 14.9 4.6 17.8l1.3-6-4.6-4.1 6.1-.6L10 1.5z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-cream/80">“{t.quote}”</p>
                <p className="mt-4 font-display text-sm font-medium text-cream">{t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
