import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileLines, faUserGroup, faLock, faPen } from '@fortawesome/free-solid-svg-icons'

export default function HeroSection() {
   return (
      <>
         <section className="flex justify-center flex-col lg:flex-row w-full h-155 bg-[#150f14] relative overflow-hidden font-sans">
            <div className="flex flex-col lg:flex-row w-full h-full relative overflow-hidden font-sans">
               <div className="w-full lg:w-1/2 h-[50vh] lg:h-auto relative">
                  <img
                     src="../../../public/images/predio.png"
                     alt="Advogado Sócio"
                     className="w-full h-full object-cover object-top-left"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#150f14] via-transparent to-transparent lg:bg-linear-to-r lg:from-transparent lg:via-transparent lg:to-[#150f14]"></div>
               </div>
               <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 py-12 lg:px-20 lg:py-0 relative z-10">
                  <div className="hidden lg:block absolute top-0 bottom-0 left-1/3 border-l border-white/3 pointer-events-none"></div>
                  <div className="hidden lg:block absolute top-0 bottom-0 left-2/3 border-l border-white/3 pointer-events-none"></div>
                  <div className="max-w-xl mt-4 lg:mt-0">
                     <p className="text-[#b8735e] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                        10º TABELIONATO DE NOTAS RECIFE
                     </p>
                     <h1 className="text-white text-4xl lg:text-[3rem] font-roboto font-semibold leading-[1.1] mb-10">
                        Acompanhe seu pedido<br className="hidden lg:block" /> de forma rápida clicando<br className="hidden lg:block" /> no botão abaixo!
                     </h1>

                     <button className="bg-[#b8735e] hover:bg-[#9c604e] text-white text-sm font-semibold px-8 py-4 transition-colors">
                        Acompanhar Pedido
                     </button>
                  </div>
               </div>
            </div>
            
         </section>
         <div className="flex justify-center -mt-18.75">
            <div className="container flex absolute h-37.5 bg-gray-200s margin-auto  gap-x-4">
               <div className="bg-white w-1/4 text-xl text-[#9c604e] font-roboto font-bold p-2 h-full flex justify-center items-center shadow-xl rounded">
                  <FontAwesomeIcon className="text-3xl text-[#9c604e]" icon={faFileLines} />
                  Escritura
               </div>
               <div className="bg-white w-1/4 text-xl text-[#9c604e] font-roboto font-bold p-2 h-full flex justify-center items-center shadow-xl rounded">
                  <FontAwesomeIcon className="text-3xl text-[#9c604e] mr-2" icon={faUserGroup} />
                  Procuração
               </div>
               <div className="bg-white w-1/4 text-xl text-[#9c604e] font-roboto font-bold p-2 h-full flex justify-center items-center shadow-xl rounded">
                  <FontAwesomeIcon className="text-3xl text-[#9c604e]" icon={faLock} />
                  Autenticação
               </div>
               <div className="bg-white w-1/4 text-xl text-[#9c604e] font-roboto font-bold p-2 h-full flex justify-center items-center shadow-xl rounded">
                  <FontAwesomeIcon className="text-3xl text-[#9c604e] mr-2" icon={faPen} />
                  Reconhecimento de Firma
               </div>
            </div>
         </div>
      </>
   );
}