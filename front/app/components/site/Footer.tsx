import { Link } from "react-router";

export default function Footer() {
   return (
      <footer className="bg-[#231824] text-white font-sans pt-16 pb-8 px-6 w-full">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
               <div className="lg:col-span-4 flex flex-col justify-center items-start">
                  <img src="../../../public/images/brand.svg" className="w-90" alt="" />
               </div>
               <div className="lg:col-span-4">
                  <h3 className="text-[#c29b62] text-lg mb-6">Links úteis</h3>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-4 text-sm">
                     <div className="flex flex-col gap-4">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <Link to="/#" className="hover:text-white transition-colors">Serviços</Link>
                        <Link to="/#" className="hover:text-white transition-colors">Notícias</Link>
                        <Link to="/#" className="hover:text-white transition-colors">Dúvidas frequentes</Link>
                        <Link to="/#" className="hover:text-white transition-colors">Tabela de custas</Link>
                     </div>
                     <div className="flex flex-col gap-4">
                        <Link to="/#" className="hover:text-white transition-colors">Links úteis</Link>
                        <Link to="/#" className="hover:text-white transition-colors">Área do Profissional</Link>
                        <Link to="/#" className="hover:text-white transition-colors">Fale Conosco</Link>
                        <Link to="/#" className="hover:text-white transition-colors">Canal de Denúncias</Link>
                        <Link to="/#" className="hover:text-white transition-colors">O Cartório</Link>
                     </div>
                  </div>
               </div>
               <div className="lg:col-span-4">
                  <h3 className="text-[#c29b62] text-lg mb-6">Atendimento</h3>
                  <ul className="flex flex-col gap-4 text-sm">
                     <li className="flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 shrink-0 mt-0.5">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                           <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        <span>Av. Governador Agamenon Magalhaes, nº4575 -<br/>Ilha do Leite, CEP: 50070-255 - Recife - PE</span>
                     </li>
                     <li className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 shrink-0">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.25-3.95-6.847-6.847l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        <span>(81) 3314-0210</span>
                     </li>
                     <li className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 shrink-0">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                        </svg>
                        <span>(81) 97345-1010</span>
                     </li>
                     <li className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 shrink-0">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                        <span>contato@10notasrecife.com.br</span>
                     </li>
                     <li className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 shrink-0">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <span>Segunda à Sexta das 09h às 17h</span>
                     </li>
                  </ul>
               </div>
            </div>
            <div className="border-t border-white/10 w-full mb-6"></div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs">
               <p>
                  Todos os Direitos Reservados © 2026 <span className="font-bold border-b border-gray-500 pb-0.5"></span>
               </p>

               <div className="flex flex-wrap justify-center items-center gap-6">
                  <Link to="/#" className="hover:text-white transition-colors">Política de privacidade</Link>
                  <Link to="/#" className="hover:text-white transition-colors">Portal da transparência</Link>                  
               </div>
            </div>
         </div>
      </footer>
   );
}