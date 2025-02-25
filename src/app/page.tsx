"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  id: number;
  title: string;
  verse: string;
  verseText: string;
  content: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "La Palabra Perseguida",
    verse: "Hebreos 4:12",
    verseText: "Porque la palabra de Dios es viva y eficaz, y más cortante que toda espada de dos filos; y penetra hasta partir el alma y el espíritu, las coyunturas y los tuétanos, y discierne los pensamientos y las intenciones del corazón.",
    content: "En Medio Oriente, miles de creyentes arriesgan sus vidas diariamente para llevar la Palabra de Dios a aquellos que anhelan conocer la verdad. Cada Biblia que cruza la frontera es una semilla de esperanza.",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    title: "El Poder de la Biblia",
    verse: "Isaías 55:11",
    verseText: "Así será mi palabra que sale de mi boca; no volverá a mí vacía, sino que hará lo que yo quiero, y será prosperada en aquello para que la envié.",
    content: "En países donde la Biblia está prohibida, su poder se manifiesta de maneras extraordinarias. Guardias se convierten, perseguidores encuentran la verdad, y la Palabra transforma vidas contra toda probabilidad.",
    image: "https://images.unsplash.com/photo-1544931733-7ee54f7c3b4f?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Transformación Radical",
    verse: "Hechos 9:15-16",
    verseText: "El Señor le dijo: Ve, porque instrumento escogido me es éste, para llevar mi nombre en presencia de los gentiles, y de reyes, y de los hijos de Israel; porque yo le mostraré cuánto le es necesario padecer por mi nombre.",
    content: "Como Pablo, muchos antiguos perseguidores en Medio Oriente se convierten en apasionados mensajeros del evangelio. Dios está transformando a los enemigos de la fe en sus más fervientes defensores.",
    image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    title: "Fe Bajo Fuego",
    verse: "Mateo 5:10-12",
    verseText: "Bienaventurados los que padecen persecución por causa de la justicia, porque de ellos es el reino de los cielos. Bienaventurados sois cuando por mi causa os vituperen y os persigan, y digan toda clase de mal contra vosotros, mintiendo. Gozaos y alegraos, porque vuestro galardón es grande en los cielos.",
    content: "En Medio Oriente, ser cristiano significa enfrentar persecución diaria: familias divididas, empleos perdidos, amenazas constantes. Aun así, la iglesia crece más fuerte cada día.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    title: "El Desafío de Occidente",
    verse: "Apocalipsis 3:15-16",
    verseText: "Yo conozco tus obras, que ni eres frío ni caliente. ¡Ojalá fueses frío o caliente! Pero por cuanto eres tibio, y no frío ni caliente, te vomitaré de mi boca.",
    content: "Mientras nuestros hermanos en Medio Oriente arriesgan todo por su fe, en Occidente luchamos contra la apatía espiritual y el materialismo. La comodidad se ha convertido en nuestro mayor enemigo.",
    image: "https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    title: "Desafíos Modernos",
    verse: "2 Timoteo 3:1-2,4-5",
    verseText: "También debes saber que en los últimos días vendrán tiempos peligrosos. Porque habrá hombres amadores de sí mismos, avaros, vanagloriosos... amadores de los deleites más que de Dios, que tendrán apariencia de piedad, pero negarán la eficacia de ella.",
    content: "En Occidente, enfrentamos diferentes batallas: el relativismo moral, el hedonismo, la tecnología que nos distrae de Dios, y una sociedad que cada vez más rechaza los valores cristianos.",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80",
  },
  {
    id: 7,
    title: "El Costo Universal",
    verse: "Lucas 9:23-24",
    verseText: "Y decía a todos: Si alguno quiere venir en pos de mí, niéguese a sí mismo, tome su cruz cada día, y sígame. Porque todo el que quiera salvar su vida, la perderá; y todo el que pierda su vida por causa de mí, éste la salvará.",
    content: "Seguir a Cristo tiene un costo en cualquier parte del mundo. En Medio Oriente puede ser la vida física; en Occidente, la muerte al yo, al confort y al compromiso con el mundo.",
    image: "https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?auto=format&fit=crop&q=80",
  },
  {
    id: 8,
    title: "El Llamado Final",
    verse: "Mateo 28:19-20",
    verseText: "Por tanto, id, y haced discípulos a todas las naciones, bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu Santo; enseñándoles que guarden todas las cosas que os he mandado; y he aquí yo estoy con vosotros todos los días, hasta el fin del mundo. Amén.",
    content: "El llamado es el mismo para todos: hacer discípulos. Ya sea en la persecución de Medio Oriente o en la comodidad de Occidente, Cristo nos llama a ser luz en las tinieblas.",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&q=80",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setIsTransitioning(true);
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setIsTransitioning(true);
      setCurrentSlide(prev => prev - 1);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") nextSlide();
    if (e.key === "ArrowLeft") prevSlide();
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  return (
    <main className="h-screen w-screen overflow-hidden bg-black text-white">
      <div 
        className={`h-full w-full transition-transform duration-500 ease-in-out ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${slides[currentSlide].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex h-full flex-col items-center justify-center px-8 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">
            {slides[currentSlide].title}
          </h1>
          
          <div className="mb-8 mt-4 max-w-4xl">
            <p className="text-xl font-semibold text-yellow-400">
              {slides[currentSlide].verse}
            </p>
            <p className="mt-2 italic text-gray-300">
              &quot;{slides[currentSlide].verseText}&quot;
            </p>
          </div>
          
          <p className="max-w-3xl text-lg md:text-xl">
            {slides[currentSlide].content}
          </p>

          <div className="absolute bottom-8 flex w-full items-center justify-center gap-4">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`rounded-full p-2 transition-colors ${
                currentSlide === 0 ? "text-gray-600" : "hover:bg-white/10"
              }`}
            >
              <ChevronLeft size={24} />
            </button>
            
            <span className="text-sm">
              {currentSlide + 1} / {slides.length}
            </span>
            
            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className={`rounded-full p-2 transition-colors ${
                currentSlide === slides.length - 1 
                  ? "text-gray-600" 
                  : "hover:bg-white/10"
              }`}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}