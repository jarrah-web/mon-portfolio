
export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="mb-8 text-3xl md:text-4xl font-bold">
        Mes projets
      </h1>

      <p className="mb-6 text-slate-300" >
        Voici une sélection de projets sur lesquels j'ai travaillé en tant qu'étudiante
        en conception des systèmes d'information et développeuse web.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
          <h2 className="text-xl font-semibold mb-2">Portfolio Next.js</h2>
          
        </article>

        <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
          <h2 className="text-xl font-semibold mb-2">Application de gestion</h2>
         
        </article>
      </div>
    </section>
  );
}
