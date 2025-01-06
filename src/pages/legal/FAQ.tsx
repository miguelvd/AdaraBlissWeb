import React, { useState, useEffect, useRef } from 'react';
import FAQCategory from '../../components/FAQCategory';
import '../../styles/FAQ.css';

const FAQ = () => {
  const [openCategoryIndex, setOpenCategoryIndex] = useState<number>(-1);
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isInitialMount = useRef(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToCategory = (index: number) => {
    if (categoryRefs.current[index]) {
      const headerOffset = 160;
      const elementPosition = categoryRefs.current[index]?.getBoundingClientRect().top || 0;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleCategoryClick = (index: number) => {
    // Si la categoría ya está abierta, la cerramos
    if (openCategoryIndex === index) {
      setOpenCategoryIndex(-1);
      return;
    }
    
    // Si es una categoría diferente, la abrimos y hacemos scroll
    setOpenCategoryIndex(index);
    setTimeout(() => {
      scrollToCategory(index);
    }, 300);
  };

  // Efecto para manejar el hash inicial
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const categoryIndex = categories.findIndex(cat => cat.id === hash);
      if (categoryIndex !== -1) {
        setOpenCategoryIndex(categoryIndex);
      }
    }
  }, []);

  const categories = [
    {
      id: "informacion-general",
      title: "Información General",
      description: "Conoce más sobre nuestro salón y servicios",
      items: [
        {
          question: "¿Necesito agendar cita?",
          answer: "Sí, recomendamos agendar cita para garantizar la disponibilidad y un mejor servicio. " +
                 "Puedes agendar fácilmente a través de nuestro WhatsApp."
        },
        {
          question: "¿Realizan servicios a domicilio?",
          answer: "Por el momento, todos nuestros servicios se realizan exclusivamente en nuestro salón " +
                 "para garantizar la calidad y utilizar todos nuestros equipos profesionales."
        },
        {
          question: "¿Tienen wifi gratuito?",
          answer: "Sí, contamos con wifi gratuito de alta velocidad para que puedas mantenerte conectado durante tu visita."
        },
        {
          question: "¿Me puedo teñir el cabello después del alisado?",
          answer: "Recomendamos teñir tu cabello 2 días después del alisado. Si lo tiñes antes " +
                 "puede que no dure tanto tu tinte. Si decides teñirlo antes de tu alisado " +
                 "no correrías ningún riesgo."
        },
        {
          question: "¿Puedo decolorar mi cabello después del alisado?",
          answer: "Sí es posible decolorar tu cabello, pero recomendamos hacerlo antes del alisado " +
                 "para obtener mejores resultados."
        },
        {
          question: "¿El tratamiento resiste actividades acuáticas y ambientes húmedos?",
          answer: "Sí, nuestro tratamiento está especialmente formulado para resistir:\n\n" +
                 "• Agua de mar y alberca\n" +
                 "• Ambientes húmedos y calurosos\n" +
                 "• Vapores y altas temperaturas\n\n" +
                 "Para mantener resultados óptimos, recomendamos utilizar el kit de mantenimiento " +
                 "que te proporcionamos, el cual ayudará a prolongar la duración y belleza de tu alisado."
        },
        {
          question: "¿Se requiere algún acondicionador o mascarilla específica?",
          answer: "No, la marca de acondicionador o mascarilla que decidas usar no afectará el resultado " +
                 "de tu alisado. Puedes utilizar los productos de tu preferencia para el cuidado de tu cabello."
        },
        {
          question: "¿Puedo seguir usando crema para peinar, aceites o silika?",
          answer: "Sí, puedes seguir usando los productos de styling que prefieras para el cuidado y peinado de tu cabello."
        },
        {
          question: "¿El alisado afecta a la caída del cabello?",
          answer: "No, el alisado no afecta a la caída del cabello. De hecho, puede ayudar a detenerla ya que:\n\n" +
                 "• Sella la cutícula del cabello, protegiéndolo de daños externos\n" +
                 "• Fortalece la fibra capilar con proteínas y nutrientes\n" +
                 "• Reduce la necesidad de usar calor excesivo al peinar\n" +
                 "• Disminuye la manipulación diaria del cabello\n\n" +
                 "Todo esto contribuye a mantener un cabello más saludable y resistente, lo que puede ayudar a prevenir la caída causada por daño mecánico o debilitamiento."
        },
        {
          question: "¿El alisado daña el cabello?",
          answer: "No, nuestros tratamientos están diseñados para mejorar la salud del cabello:\n\n" +
                 "• Contienen proteínas y nutrientes que reparan y fortalecen\n" +
                 "• Sellan la cutícula protegiendo de daños ambientales\n" +
                 "• Reducen la necesidad de usar planchas diariamente\n" +
                 "• Incluyen tratamientos hidratantes y regeneradores\n\n" +
                 "Al contrario de dañar, el alisado puede mejorar significativamente la condición de tu cabello, " +
                 "dejándolo más suave, brillante y manejable."
        },
        {
          question: "¿Qué puedo hacer si el alisado irritó mi cuero cabelludo?",
          answer: "La irritación puede ocurrir por varias razones:\n\n" +
                 "• Sensibilidad natural de tu cuero cabelludo\n" +
                 "• Haberte rascado o lastimado antes del tratamiento\n" +
                 "• Exposición reciente al sol\n" +
                 "• Tintes o decoloraciones recientes\n\n" +
                 "Si experimentas irritación, recomendamos:\n\n" +
                 "• Aplicar aloe vera puro en el cuero cabelludo\n" +
                 "• Usar shampoo neutro sin sulfatos\n" +
                 "• Evitar agua muy caliente\n" +
                 "• No rascar ni frotar el área\n\n" +
                 "Si la irritación persiste, contáctanos para una valoración personalizada. " +
                 "Para tu próximo tratamiento, podemos usar productos específicos para cuero cabelludo sensible."
        },
        {
          question: "¿Qué pasa si el tratamiento de alisado no queda tan lacio como esperaba?",
          answer: "Los resultados del alisado pueden variar según varios factores de tu cabello:\n\n" +
                 "• Estructura del cabello (grosor y tipo de ondulación)\n" +
                 "• Nivel de porosidad\n" +
                 "• Tratamientos químicos previos\n" +
                 "• Estado general del cabello\n\n" +
                 "Por esto ofrecemos diferentes opciones:\n\n" +
                 "Alisado Láser (Premium):\n" +
                 "• Incluye garantía de satisfacción\n" +
                 "• Si no quedas satisfecha, realizamos otra sesión sin costo adicional\n\n" +
                 "Keratina Japonesa y Orgánica:\n" +
                 "• En caso de requerir un retratamiento, se aplica un costo del 40% del valor total\n" +
                 "• Esto cubre los productos y el tiempo del servicio"
        },
        {
          question: "¿Cuál es el mejor tratamiento de alisado para mi cabello?",
          answer: "Ofrecemos tres niveles de tratamientos, cada uno con beneficios específicos:\n\n" +
                 "1. Alisado Láser (Premium):\n" +
                 "• Máximo nivel de alisado (100%)\n" +
                 "• Mayor duración (4-8 meses)\n" +
                 "• Incluye garantía de satisfacción\n" +
                 "• Tecnología de luz azul exclusiva\n\n" +
                 "2. Keratina Japonesa:\n" +
                 "• Alisado efectivo (80%)\n" +
                 "• Duración de 4-6 meses\n" +
                 "• Excelente control del frizz\n\n" +
                 "3. Keratina Orgánica:\n" +
                 "• Alisado suave (70%)\n" +
                 "• Duración de 3-5 meses\n" +
                 "• Ideal para personas sensibles\n" +
                 "• Sin formol\n\n" +
                 "Recomendamos el Alisado Láser para resultados óptimos y mayor duración. " +
                 "En tu consulta personalizada, evaluaremos tu tipo de cabello para recomendarte " +
                 "el tratamiento más adecuado."
        },
        {
          question: "¿Cuál es la diferencia entre Botox Capilar y las Keratinas?",
          answer: "Cada tratamiento tiene un propósito diferente:\n\n" +
                 "Botox Capilar:\n" +
                 "• NO alisa, es un tratamiento nutritivo\n" +
                 "• Repara el cabello en un 95%\n" +
                 "• Mantiene el tipo de cabello natural\n" +
                 "• Ideal para todo tipo de cabello\n" +
                 "• Enfoque en reparación y nutrición\n\n" +
                 "Keratinas (Premium y Orgánica):\n" +
                 "• Alisan el cabello en un 80%\n" +
                 "• Reparan el cabello en un 80%\n" +
                 "• Modifican la textura del cabello\n" +
                 "• Ideales para reducir volumen\n" +
                 "• Enfoque en alisado y control de frizz\n\n" +
                 "La elección dependerá de tu objetivo: si buscas alisar, elige Keratina; si buscas nutrir y reparar manteniendo tu tipo de cabello, elige Botox."
        },
        {
          question: "¿Qué cuidados requiere después del tratamiento?",
          answer: "Para mantener los resultados recomendamos:\n\n" +
                 "• Usar shampoo sin sulfatos\n" +
                 "• Aplicar productos hidratantes\n" +
                 "• Usar protector térmico\n\n" +
                 "Al agendar tu cita te explicamos todos los cuidados a detalle."
        }
      ]
    },
    {
      id: "tratamiento-alisado-laser",
      title: "Tratamiento de Alisado Láser",
      description: "Descubre los beneficios de nuestro tratamiento estrella",
      items: [
        {
          question: "¿Qué es el Alisado Láser?",
          answer: "El Alisado Láser es un tratamiento innovador que alisa tu cabello en un 100%. " +
                 "Utiliza ondas de luz azul (450nm) que entran en contacto directo con la cutícula del " +
                 "cabello, haciendo una mejor fijación del alisado."
        },
        {
          question: "¿Cuánto tiempo dura el efecto del tratamiento?",
          answer: "El Alisado Láser tiene una duración de 4 a 8 meses, manteniendo tu cabello perfectamente " +
                 "liso y manejable durante este período."
        },
        {
          question: "¿Cuánto tarda el servicio?",
          answer: "El procedimiento del Alisado Láser toma 3 horas. " +
                 "Recomendamos reservar este tiempo para garantizar los mejores resultados."
        },
        {
          question: "¿Tiene garantía?",
          answer: "Sí, la garantía consiste en una sesión adicional sin costo. Tienes 15 días para " +
                 "solicitarla si no estás satisfecha con los resultados del Alisado Láser, y así " +
                 "asegurar que obtengas los resultados deseados."
        },
        {
          question: "¿Cómo funciona la tecnología láser?",
          answer: "El tratamiento utiliza ondas de luz azul (450nm) que penetran directamente en la cutícula " +
                 "del cabello. Esta tecnología innovadora permite una mejor fijación del alisado, " +
                 "logrando resultados superiores y más duraderos."
        },
        {
          question: "¿Qué cuidados debo tener después?",
          answer: "Los cuidados principales son:\n\n" +
                 "• Recomendamos lavar el cabello en 24 horas\n" +
                 "• Usar productos profesionales recomendados\n" +
                 "• No sujetar el cabello por 24 horas"
        },
        {
          question: "¿En qué se diferencia de otros alisados?",
          answer: "El Alisado Láser se destaca por:\n\n" +
                 "• Alisado 100% efectivo\n" +
                 "• Mayor duración (4-8 meses)\n" +
                 "• Tecnología de luz azul exclusiva\n" +
                 "• Garantía de 15 días\n" +
                 "• Resultados más naturales y duraderos"
        }
      ]
    },
    {
      id: "tratamiento-keratina-premium",
      title: "Tratamiento de Keratina Japonesa",
      description: "Conoce todos los detalles de nuestro tratamiento estrella",
      items: [
        {
          question: "¿Qué beneficios principales ofrece la Keratina Japonesa?",
          answer: "La Keratina Japonesa ofrece múltiples beneficios:\n\n" +
                 "• Control total del frizz: Efectivo en cualquier clima (humedad, calor, frío y lluvia)\n" +
                 "• Reducción del volumen excesivo\n" +
                 "• Cabello más manejable\n" +
                 "• Aspecto natural y saludable"
        },
        {
          question: "¿Qué porcentaje de alisado se logra?",
          answer: "Con la Keratina Japonesa se logra un 80% promedio de alaciado, siendo efectiva " +
                 "tanto en cabellos vaporosos como en cabellos rizados. El resultado final dependerá " +
                 "del tipo de cabello inicial."
        },
        {
          question: "¿Cómo actúa la Keratina sobre el cabello?",
          answer: "La Keratina actúa de manera integral:\n\n" +
                 "• Aporta aminoácidos esenciales\n" +
                 "• Alisa la fibra reduciendo el volumen excesivo"
        },
        {
          question: "¿Es efectiva contra el frizz?",
          answer: "Sí, la Keratina Japonesa ofrece un control Anti-Frizz total, eliminando los cabellos rebeldes sin importar las condiciones climáticas, ya sea en ambientes húmedos, calurosos, fríos o lluviosos."
        },
        {
          question: "¿Qué tipo de cabello puede tratarse?",
          answer: "Es ideal para todo tipo de cabello, especialmente:\n\n" +
                 "• Cabello maltratado por químicos\n" +
                 "• Cabello decolorado\n" +
                 "• Cabello fino o delicado\n" +
                 "• Cabello rizado o con frizz\n" +
                 "• Cabello sensible a tratamientos químicos"
        },
        {
          question: "¿Qué cuidados requiere después del tratamiento?",
          answer: "Para mantener los resultados recomendamos:\n\n" +
                 "• Usar shampoo sin sulfatos\n" +
                 "• Aplicar productos hidratantes\n" +
                 "• Usar protector térmico\n" +
                 "• Realizar mantenimientos periódicos cada 4-6 meses"
        },
        {
          question: "¿Cuánto tiempo dura el efecto del tratamiento?",
          answer: "El tratamiento tiene una duración de 4 a 6 meses, manteniendo tu cabello " +
                 "liso, brillante y suave durante todo este período. La duración exacta " +
                 "dependerá del tipo de cabello y los cuidados posteriores."
        }
      ]
    },
    {
      id: "keratina-organica",
      title: "Keratina Orgánica",
      description: "Descubre nuestro tratamiento sin formol, seguro y efectivo para personas sensibles",
      items: [
        {
          question: "¿Qué es la Keratina Orgánica sin formol?",
          answer: "Es un tratamiento libre de formol que alisa tu cabello hasta un 70%. " +
                 "Es completamente seguro y está especialmente formulado para nutrir el cabello dañado " +
                 "mientras lo alisa, brindando resultados naturales y saludables."
        },
        {
          question: "¿Cuánto tiempo dura el efecto?",
          answer: "El tratamiento tiene una duración de 3 a 5 meses, manteniendo tu cabello " +
                 "liso, brillante y suave durante todo este período. La duración exacta " +
                 "dependerá del tipo de cabello y los cuidados posteriores."
        },
        {
          question: "¿Es seguro para embarazadas y niñas?",
          answer: "Sí, al ser un tratamiento sin formol, es completamente seguro para:\n\n" +
                 "• Mujeres embarazadas\n" +
                 "• Niñas desde los 9 años\n" +
                 "• Personas con sensibilidad\n" +
                 "• No irrita el cuero cabelludo ni las vías respiratorias"
        },
        {
          question: "¿Qué tipo de cabello puede tratarse?",
          answer: "Es ideal para todo tipo de cabello, especialmente:\n\n" +
                 "• Cabello maltratado por químicos\n" +
                 "• Cabello decolorado\n" +
                 "• Cabello fino o delicado\n" +
                 "• Cabello rizado o con frizz\n" +
                 "• Cabello sensible a tratamientos químicos"
        }
      ]
    },
    {
      id: "botox-capilar",
      title: "Botox Capilar",
      description: "Cirugía capilar para nutrir y reparar tu cabello en profundidad",
      items: [
        {
          question: "¿Qué es el Botox Capilar y cómo funciona?",
          answer: "El Botox Capilar es un tratamiento de cirugía capilar que nutre y repara el cabello dañado " +
                 "en un 95%. A diferencia de las keratinas, no alisa el cabello, sino que se enfoca en " +
                 "restaurar la salud y vitalidad del cabello desde el interior."
        },
        {
          question: "¿Cuánto tiempo dura el tratamiento?",
          answer: "Los resultados del Botox Capilar tienen una duración de 3 a 5 meses. " +
                 "La duración exacta dependerá de los cuidados posteriores y del tipo de cabello."
        },
        {
          question: "¿Qué beneficios ofrece para el cabello dañado?",
          answer: "El tratamiento ofrece múltiples beneficios:\n\n" +
                 "• Nutre el cabello dañado en un 95%\n" +
                 "• Elimina el cabello crespo y esponjado\n" +
                 "• Previene el frizz"
        },
        {
          question: "¿Se puede combinar con otros tratamientos?",
          answer: "Sí, el Botox Capilar se puede aplicar junto con una Keratina (con costo extra). " +
                 "Esta combinación potencia los resultados, obteniendo un cabello nutrido y más manejable. " +
                 "Consulta con nuestras especialistas para determinar la mejor combinación según tu tipo de cabello."
        },
        {
          question: "¿Para qué tipo de cabello es recomendable?",
          answer: "El Botox Capilar es ideal para:\n\n" +
                 "• Cabello muy dañado o quebradizo\n" +
                 "• Cabello con frizz excesivo\n" +
                 "• Cabello sin brillo o vida\n" +
                 "• Cabello esponjado\n" +
                 "• Todo tipo de cabello que necesite nutrición profunda"
        },
        {
          question: "¿En qué se diferencia de la Keratina?",
          answer: "Las principales diferencias son:\n\n" +
                 "• El Botox NO alisa el cabello, se enfoca en nutrirlo\n" +
                 "• Repara el cabello en un 95% vs el 80% de la keratina\n" +
                 "• Es un tratamiento puramente reconstructor\n" +
                 "• Ideal para quien quiere mantener su forma natural\n" +
                 "• Se puede combinar con keratina para mejores resultados"
        },
        {
          question: "¿Qué cuidados requiere después del tratamiento?",
          answer: "Para mantener los resultados recomendamos:\n\n" +
                 "• Usar productos sin sulfatos\n" +
                 "• Evitar el exceso de calor\n" +
                 "• Aplicar mascarillas hidratantes regularmente\n" +
                 "• Usar protector térmico\n" +
                 "• Realizar mantenimientos cada 3-5 meses"
        }
      ]
    },
    {
      id: "servicios-adicionales",
      title: "Servicios Adicionales",
      description: "Información sobre otros servicios que ofrecemos",
      items: [
        {
          question: "¿Realizan diagnóstico capilar?",
          answer: "Sí, antes de cualquier tratamiento realizamos un diagnóstico completo que incluye:\n\n" +
                 "• Evaluación del estado del cabello\n" +
                 "• Historial de tratamientos previos\n" +
                 "• Identificación de necesidades específicas\n" +
                 "• Recomendación personalizada de tratamiento\n" +
                 "• Plan de cuidado posterior"
        },
        {
          question: "¿Qué servicios de corte ofrecen?",
          answer: "Ofrecemos los siguientes servicios de corte:\n\n" +
                 "• Despuntes de cabello\n" +
                 "• Flequillos\n" +
                 "• Corte recto"
        }
      ]
    },
    {
      id: "productos-y-cuidados",
      title: "Productos y Cuidados",
      description: "Recomendaciones sobre productos profesionales",
      items: [
        {
          question: "¿Cómo debo preparar mi cabello para el tratamiento?",
          answer: "Para obtener los mejores resultados:\n\n" +
                 "• Ven con el cabello limpio, sin acondicionador, aceites, gel u otros productos\n" +
                 "• Puedes lavar tu cabello un día antes o el mismo día de la cita\n" +
                 "• Usa solo shampoo para el lavado\n" +
                 "• Si no puedes venir con el cabello así preparado, podemos lavarlo en el salón"
        },
        {
          question: "¿Qué productos recomiendan usar después del tratamiento?",
          answer: "Para mantener los resultados recomendamos:\n\n" +
                 "• Shampoo sin sulfatos\n" +
                 "• Acondicionador sin sal\n" +
                 "• Mascarillas hidratantes\n" +
                 "• Protector térmico\n" +
                 "• Productos específicos según tu tipo de tratamiento"
        },
        {
          question: "¿Dónde puedo comprar los productos recomendados?",
          answer: "Todos los productos profesionales recomendados están disponibles en nuestro salón. " +
                 "Nuestro equipo te asesorará sobre cuáles son los más adecuados para tu tipo de cabello " +
                 "y tratamiento realizado."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white pt-20">
      {/* Menú de navegación fijo */}
      <div className="menu-fixed">
        <div className="menu-container scrollbar-hide">
          <div className="menu-items">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(index)}
                className={`menu-button ${
                  openCategoryIndex === index
                    ? 'menu-button-active'
                    : 'menu-button-inactive'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-5xl mx-auto px-4 py-12 mt-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Preguntas Frecuentes
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre nuestros servicios, 
            políticas y procedimientos
          </p>
        </div>

        <div className="space-y-8"> 
          {categories.map((category, index) => (
            <div 
              key={category.id} 
              ref={el => categoryRefs.current[index] = el}
              className="pt-4" 
            >
              <FAQCategory
                title={category.title}
                description={category.description}
                items={category.items}
                isOpen={openCategoryIndex === index}
                onToggle={() => handleCategoryClick(index)}
              />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            ¿No encontraste lo que buscabas?
          </h2>
          <p className="text-gray-600 mb-6">
            Estamos aquí para ayudarte. Contáctanos directamente y responderemos 
            todas tus dudas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/524492175606"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#F25AA3] hover:bg-pink-600 transition-colors duration-200"
            >
              Contactar por WhatsApp
            </a>
            <a
              href="tel:+524492175606"
              className="inline-flex items-center justify-center px-6 py-3 border border-[#F25AA3] text-base font-medium rounded-md text-[#F25AA3] hover:bg-pink-50 transition-colors duration-200"
            >
              Llamar ahora
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
