import HeaderHome from '../../components/site/HeaderHome'
import About from '../../components/site/About'
import Excellence from '../../components/site/Excellence'
import News from '../../components/site/News'

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
         <HeaderHome/>         
         <About/>
         <Excellence/>
         <News/>
      </>
   );
}