export default function HeroSection() {

   const newsData = [
      {
         id: "01",
         date: "9/9/2026",
         author: "O CARTÓRIO",
         category: "NOTÍCIA",
         title: "Entenda a importância da Declaração de União Estável e saiba como formalizá-la",
         excerpt: ""
      },
      {
         id: "02",
         date: "5/2/2027",
         author: "O CARTÓRIO",
         category: "ARTIGO",
         title: "Entenda como solicitar o Reconhecimento de Firma e suas modalidades",
         excerpt: ""
      },
      {
         id: "03",
         date: "31/8/2026",
         author: "O CARTÓRIO",
         category: "NOTÍCIA",
         title: "Entenda o Apostilamento de Haia",
         excerpt: "Agilidade Internacional para seus documentos"
      },
      {
         id: "04",
         date: "9/9/2026",
         author: "O CARTÓRIO",
         category: "NOTÍCIA",
         title: "Entenda a importância da Declaração de União Estável e saiba como formalizá-la",
         excerpt: ""
      },
      {
         id: "05",
         date: "5/2/2027",
         author: "O CARTÓRIO",
         category: "ARTIGO",
         title: "Entenda como solicitar o Reconhecimento de Firma e suas modalidades",
         excerpt: ""
      },
      {
         id: "06",
         date: "31/8/2026",
         author: "O CARTÓRIO",
         category: "NOTÍCIA",
         title: "Entenda o Apostilamento de Haia",
         excerpt: "Agilidade Internacional para seus documentos"
      },
   ];

   return (
      <>
         <section className="bg-[#f7f7f5] py-20 px-6 font-sans w-full">
            <div className="max-w-7xl mx-auto">
               <div className="text-center mb-16">
                  <span className="text-[#c29b62] text-sm font-semibold tracking-widest uppercase block mb-3">
                     Fique por dentro
                  </span>
                  <h2 className="text-[#4a554e] text-4xl md:text-5xl font-roboto">
                     Últimas Notícias
                  </h2>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {newsData.map((item) => (
                     <div key={item.id} className="bg-white p-8 relative shadow-md hover:shadow-2xl transition-all cursor-pointer flex flex-col h-full">
                        <span className="absolute top-6 right-6 text-7xl font-bold text-gray-100 select-none z-0">
                           {item.id}
                        </span>
                        <div className="relative z-10 flex flex-col h-full">
                           <div className="mb-12">
                              <span className="bg-[#333333] text-white text-xs font-bold px-3 py-1.5">
                              {item.date}
                              </span>
                           </div>
                           <div className="flex items-center gap-3 text-[10px] font-bold text-gray-600 uppercase mb-3">
                              <div className="flex items-center gap-1">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                                 <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                              </svg>
                              {item.author}
                              </div>
                              <div className="flex items-center gap-1">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                                 <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                              </svg>
                              {item.category}
                              </div>
                           </div>
                           <h3 className="text-xl font-bold text-gray-900 leading-tight mb-3">
                              {item.title}
                           </h3>
                           {item.excerpt && (
                              <p className="text-sm text-gray-700 leading-relaxed">
                              {item.excerpt}
                              </p>
                           )}

                        </div>
                     </div>
                  ))}
               </div>

            </div>
         </section>
      </>
   );
}