export default function HeroSection() {
   return (
      <>
         <section className="relative w-full py-20 lg:py-32 px-6 flex justify-center items-center overflow-hidden font-sans">
            <div 
               className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
               style={{ 
                  backgroundImage: "url('../../../public/images/background_line.jpg')" 
               }}
            >               
            </div>
            <div className="absolute inset-0 bg-[#231824]/85"></div>
            <div className="relative z-10 flex flex-col items-center text-center max-w-6xl mx-auto">
               <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-roboto font-normal leading-tight">
                  Excelência no atendimento, rigor técnico e soluções inovadoras para quem busca segurança e praticidade em cada ato.
               </h2>
            </div>
         </section>
      </>
   );
}