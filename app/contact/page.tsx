export default function contactPge() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="mb-8 text-3xl md:text-4xl font-bold">
        Contactez-moi
      </h1> 
        <p className="mb-6 text-slate-300">
        Je suis toujours ouvert aux nouvelles opportunités et collaborations. N'hésitez pas à me contacter pour discuter de projets, poser des questions ou simplement échanger des idées.
      </p>
      <form className="flex flex-col gap-4">    
        <label className="flex flex-col">
          <span className="mb-1 text-sm font-medium text-slate-200">Nom</span>
          <input type="text" className="rounded-md border border-slate-700 bg-slate-800 px-4 py-2 text-slate-200 focus:border-sky-500 focus:outline-none" />
        </label>
        <label className="flex flex-col">   
            <span className="mb-1 text-sm font-medium text-slate-200">Email</span>
            <input type="email" className="rounded-md border border-slate-700 bg-slate-800 px-4 py-2 text-slate-200 focus:border-sky-500 focus:outline-none" />
        </label>
        <label className="flex flex-col">

            <span className="mb-1 text-sm font-medium text-slate-200">Message</span>
            <textarea className="rounded-md border border-slate-700 bg-slate-800 px-4 py-2 text-slate-200 focus:border-sky-500 focus:outline-none" rows={5}></textarea>
        </label>
        <button type="submit" className="self-start rounded-md bg-sky-600 px-6 py-2 text-sm font-medium text-white hover:bg-sky-700">
            Envoyer 
        </button>
      </form>
    </section>
  );
}