export default function HeroSection() {
   return (
      <section className="w-full bg-white py-16 lg:py-24 px-6 flex justify-center font-sans mt-40">
         <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-12 lg:gap-0">
            <div className="w-full lg:w-1/2 lg:pr-16 flex flex-col items-start justify-center">
               <span className="text-[#b8735e] text-xs font-bold tracking-[0.15em] uppercase mb-4">
                  O 10º Tabelionato de notas
               </span>

               <h2 className="text-[#231824] text-3xl lg:text-[2.75rem] font-roboto font-bold leading-[1.15] mb-8">
                  O 10º Tabelionato de Notas de Recife.  Excelência notarial na Ilha do Leite.
               </h2>

               <button className="cursor-pointer border border-[#b8735e] text-[#b8735e] hover:bg-[#b8735e] hover:text-white transition-colors px-8 py-3 text-sm font-semibold">
                  Conhecer Mais
               </button>
            </div>
            <div className="w-full lg:w-1/2 lg:pl-16 flex flex-col sm:flex-row gap-8 justify-center items-center lg:border-l lg:border-gray-200">                  
               <div className="flex flex-col gap-5 text-gray-500 text-lg font-semibold leading-relaxed">
                  <p>
                     O 10º Tabelionato de Notas de Recife existe para servir. Cada ato praticado carrega o peso da fé pública e a responsabilidade de proteger direitos, formalizar negócios e garantir a autenticidade das relações jurídicas. Esse compromisso não tem prazo de validade.
                  </p>
                  <p>
                     O 10º Tabelionato de Notas de Recife nasce de um compromisso renovado com a cidadania e a segurança jurídica na capital pernambucana. 
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
}