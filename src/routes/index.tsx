import { createFileRoute } from "@tanstack/react-router";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { useState, type FormEvent } from "react";

import campaignBelt from "@/assets/urbano-campaign-belt.jpg";
import campaignJewelry from "@/assets/urbano-campaign-jewelry.jpg";
import heroImage from "@/assets/urbano-hero.jpg";
import meridaBand from "@/assets/urbano-merida-band.jpg";
import productBag from "@/assets/product-bolsa-merida.jpg";
import productBelt from "@/assets/product-cinto-trama.jpg";
import productNecklace from "@/assets/product-colar-aurora.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Urbano Acessórios | Moda que acompanha seu ritmo" },
      {
        name: "description",
        content:
          "Descubra acessórios autorais, joias, bolsas e cintos da Urbano. Edições limitadas com design contemporâneo brasileiro.",
      },
      { property: "og:title", content: "Urbano Acessórios | Moda que acompanha seu ritmo" },
      {
        property: "og:description",
        content: "Acessórios de moda em edição limitada, desenhados no Brasil.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const products = [
  { category: "Joias", name: "Colar Aurora", price: "R$ 480", image: productNecklace },
  { category: "Bolsas", name: "Bolsa Mérida", price: "R$ 1.290", image: productBag },
  { category: "Cintos", name: "Cinto Trama", price: "R$ 390", image: productBelt },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [notice, setNotice] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const addToCart = (name: string) => {
    setCartCount((count) => count + 1);
    setNotice(`${name} foi adicionado à sacola.`);
    window.setTimeout(() => setNotice(""), 2400);
  };

  const subscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubscribed(true);
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-accent/30">
      <div className="bg-primary px-5 py-2 text-center text-xs text-primary-foreground">
        Frete grátis para todo o Brasil em compras acima de R$ 499
      </div>

      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 sm:px-8">
          <nav className="hidden items-center gap-7 text-[13px] font-medium md:flex" aria-label="Categorias">
            <a href="#colecoes" className="text-foreground">Coleções</a>
            <a href="#comprar" className="text-muted-foreground transition-colors hover:text-accent">Bolsas</a>
            <a href="#comprar" className="text-muted-foreground transition-colors hover:text-accent">Joias</a>
            <a href="#comprar" className="text-muted-foreground transition-colors hover:text-accent">Cintos</a>
            <a href="#editorial" className="text-muted-foreground transition-colors hover:text-accent">Editorial</a>
          </nav>

          <Button
            variant="icon"
            size="icon"
            className="md:hidden"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>

          <a href="#inicio" className="absolute left-1/2 -translate-x-1/2 font-serif text-3xl font-semibold leading-none">
            Urbano<span className="text-accent">.</span>
          </a>

          <div className="flex items-center gap-1 sm:gap-3">
            <Button variant="icon" size="icon" aria-label="Buscar produtos"><Search size={19} /></Button>
            <Button variant="icon" size="icon" aria-label={`Sacola com ${cartCount} itens`} className="relative">
              <ShoppingBag size={19} />
              {cartCount > 0 && <span className="absolute right-0 top-0 grid size-5 place-items-center rounded-full bg-accent text-[10px] text-accent-foreground">{cartCount}</span>}
            </Button>
          </div>
        </div>
        {menuOpen && (
          <nav className="border-t border-border bg-background px-5 py-6 md:hidden" aria-label="Menu móvel">
            <div className="grid gap-4 font-serif text-2xl">
              <a href="#colecoes" onClick={() => setMenuOpen(false)}>Coleções</a>
              <a href="#comprar" onClick={() => setMenuOpen(false)}>Bolsas, joias e cintos</a>
              <a href="#editorial" onClick={() => setMenuOpen(false)}>Editorial</a>
            </div>
          </nav>
        )}
      </header>

      <main id="inicio">
        <section className="bg-secondary">
          <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-10 sm:px-8 lg:grid-cols-12 lg:py-20">
            <div className="reveal lg:col-span-5">
              <p className="eyebrow">Coleção Essência 2026</p>
              <h1 className="mt-6 font-serif text-6xl font-medium leading-[0.9] sm:text-7xl lg:text-[5.5rem]">
                O brilho que<br /><span className="italic text-accent">acompanha</span><br />o seu ritmo.
              </h1>
              <p className="mt-7 max-w-[42ch] text-base leading-relaxed text-muted-foreground">
                Acessórios de moda em edição limitada, desenhados no Brasil para quem veste a cidade como um editorial.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-5">
                <Button asChild><a href="#comprar">Ver a coleção</a></Button>
                <Button asChild variant="text"><a href="#editorial">Explorar editorial</a></Button>
              </div>
            </div>

            <div className="reveal reveal-delay relative lg:col-span-7">
              <img src={heroImage} alt="Modelo usando joias douradas e bolsa azul-marinho da Urbano" width={1088} height={1360} fetchPriority="high" className="ml-auto aspect-[4/5] w-full max-w-[570px] object-cover" />
              <div className="absolute -bottom-5 left-0 hidden w-60 bg-primary/90 p-5 backdrop-blur-md sm:block lg:-left-3">
                <p className="eyebrow text-accent">Destaque</p>
                <p className="mt-2 font-serif text-2xl text-primary-foreground">Bolsa Mérida</p>
                <p className="mt-1 text-sm text-primary-foreground/70">R$ 1.290 · couro premium</p>
              </div>
            </div>
          </div>
        </section>

        <section id="editorial" className="mx-auto max-w-[1440px] scroll-mt-24 px-5 py-16 sm:px-8 lg:py-24">
          <SectionHeading eyebrow="Campanhas" title="Edições em destaque" action="Ver todas" />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            <article className="group md:col-span-7">
              <div className="overflow-hidden">
                <img src={campaignJewelry} alt="Editorial de joias douradas Urbano" loading="lazy" width={1440} height={912} className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h3 className="font-serif text-3xl font-medium">Joias em luz dourada</h3><span className="eyebrow text-muted-foreground">01 / 02</span>
              </div>
              <p className="mt-2 max-w-[52ch] text-sm leading-relaxed text-muted-foreground">Formas orgânicas que traduzem a luz do fim de tarde em uma assinatura atemporal.</p>
            </article>
            <article className="group md:col-span-5 md:mt-16">
              <div className="overflow-hidden">
                <img src={campaignBelt} alt="Editorial Urbano com cinto champagne" loading="lazy" width={1024} height={1280} className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h3 className="font-serif text-3xl font-medium">Cintos &amp; estrutura</h3><span className="eyebrow text-muted-foreground">02 / 02</span>
              </div>
              <p className="mt-2 max-w-[40ch] text-sm leading-relaxed text-muted-foreground">Texturas honestas e fivelas esculturais para transformar a silhueta.</p>
            </article>
          </div>
        </section>

        <section id="colecoes" className="relative scroll-mt-20 overflow-hidden bg-primary text-primary-foreground">
          <img src={meridaBand} alt="Detalhe do couro azul-marinho e ferragem champagne da coleção Mérida" loading="lazy" width={1920} height={704} className="absolute inset-0 h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-primary/40" />
          <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:py-28">
            <div className="max-w-2xl">
              <p className="eyebrow text-accent">Coleção em foco</p>
              <h2 className="mt-4 font-serif text-5xl font-medium leading-[0.95] sm:text-7xl">Mérida, a peça que <span className="italic text-accent">define</span> a temporada.</h2>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Button asChild variant="champagne"><a href="#comprar">Comprar a Mérida</a></Button>
                <span className="text-sm text-primary-foreground/70">A partir de R$ 1.290</span>
              </div>
            </div>
          </div>
        </section>

        <section id="comprar" className="mx-auto max-w-[1440px] scroll-mt-24 px-5 py-16 sm:px-8 lg:py-24">
          <SectionHeading eyebrow="Seleção" title="Compra rápida" action="Ver catálogo" />
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <article key={product.name} className="group">
                <div className="overflow-hidden bg-secondary">
                  <img src={product.image} alt={product.name} loading="lazy" width={1024} height={1280} className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div><p className="eyebrow text-muted-foreground">{product.category}</p><h3 className="mt-1 font-serif text-2xl font-medium">{product.name}</h3></div>
                  <p className="font-serif text-xl font-medium">{product.price}</p>
                </div>
                <Button variant="outline" className="mt-4 w-full" onClick={() => addToCart(product.name)}>Adicionar à sacola</Button>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-border bg-secondary">
          <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-24">
            <div className="lg:col-span-7">
              <p className="eyebrow">Urbano Acessórios</p>
              <h2 className="mt-4 max-w-3xl font-serif text-5xl font-medium leading-none sm:text-6xl">Feito no Brasil, <span className="italic text-accent">vestido</span> em qualquer lugar.</h2>
              <p className="mt-6 max-w-[46ch] leading-relaxed text-muted-foreground">Design contemporâneo em pequenos lotes, pensado para atravessar temporadas.</p>
            </div>
            <div className="bg-primary p-7 sm:p-8 lg:col-span-5">
              {subscribed ? (
                <div role="status"><p className="font-serif text-3xl text-primary-foreground">Você está na lista.</p><p className="mt-2 text-sm text-primary-foreground/70">As próximas novidades chegam primeiro para você.</p></div>
              ) : (
                <><p className="font-serif text-3xl text-primary-foreground">Entre para a lista</p><p className="mt-2 text-sm text-primary-foreground/70">Lançamentos, editoriais e acesso antecipado.</p>
                <form onSubmit={subscribe} className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <label className="sr-only" htmlFor="email">Seu e-mail</label>
                  <input id="email" required type="email" placeholder="seu@email.com" className="min-h-12 w-full rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-5 text-sm text-primary-foreground outline-none placeholder:text-primary-foreground/40 focus:border-accent" />
                  <Button type="submit" variant="champagne">Assinar</Button>
                </form></>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8">
          <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
            <a href="#inicio" className="font-serif text-4xl font-semibold">Urbano<span className="text-accent">.</span></a>
            <nav className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-primary-foreground/60"><a href="#colecoes">Coleções</a><a href="#comprar">Atendimento</a><a href="#comprar">Trocas</a><a href="#editorial">Instagram</a></nav>
          </div>
          <p className="mt-10 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/40">© 2026 Urbano Acessórios · Brasil</p>
        </div>
      </footer>

      {notice && <div role="status" className="fixed bottom-5 left-1/2 z-50 w-[calc(100%-2.5rem)] max-w-sm -translate-x-1/2 bg-primary px-5 py-4 text-center text-sm text-primary-foreground shadow-xl">{notice}</div>}
    </div>
  );
}

function SectionHeading({ eyebrow, title, action }: { eyebrow: string; title: string; action: string }) {
  return (
    <div className="mb-10 flex items-end justify-between border-b border-border pb-6">
      <div><p className="eyebrow">{eyebrow}</p><h2 className="mt-3 font-serif text-4xl font-medium sm:text-5xl">{title}</h2></div>
      <Button asChild variant="text" className="hidden sm:inline-flex"><a href="#comprar">{action}</a></Button>
    </div>
  );
}