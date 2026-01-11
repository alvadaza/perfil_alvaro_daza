import Section from "../components/section";

export default function EducationSection() {
  return (
    <Section title="Formación Académica y Certificaciones">
      <div className="space-y-8">
        {/* Ingeniería principal */}
        <div className="border-l-4 border-blue-600 pl-5 flex items-start gap-4">
          <img
            src="/assets/san jose.webp"
            alt="Fundación Universitaria San José"
            className="w-12 h-12 object-contain rounded"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Ingeniero de Sistemas
            </h3>
            <p className="text-gray-600">
              Fundación Universitaria San José • Bogotá, Colombia
            </p>
            <p className="text-sm text-gray-500 mt-1">Diciembre 2023</p>
          </div>
        </div>

        {/* Certificaciones recientes - en grid con logos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Diplomado IA - Universidad de Cartagena */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
            <img
              src="/assets/100-1000672_escudo-unicartagena-university-of-cartagena.webp"
              alt="Universidad de Cartagena"
              className="w-10 h-10 object-contain"
            />
            <div>
              <h4 className="font-medium text-gray-800">
                Diplomado en Fortalecimiento de Habilidades y Herramientas de Inteligencia Artificial para el Sector Público
              </h4>
              <p className="text-gray-600 text-sm">
                Universidad de Cartagena – Convenio MinTIC • Noviembre 2025
              </p>
              <p className="text-xs text-gray-500 mt-2 italic">
                80 horas • Enfoque en IA aplicada al sector público
              </p>
            </div>
          </div>

          {/* Desarrollo Web Front-End - Uniandes */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
            <img
              src="/assets/Logo Universidad de los Andes Colombia-10-11.webp"
              alt="Universidad de los Andes"
              className="w-10 h-10 object-contain"
            />
            <div>
              <h4 className="font-medium text-gray-800">
                Desarrollo Web Front-End
              </h4>
              <p className="text-gray-600 text-sm">
                Universidad de los Andes • Diciembre 2025
              </p>
            </div>
          </div>

          {/* Bases de Datos - IGAC */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
            <img
              src="/assets/igac.webp"
              alt="IGAC"
              className="w-10 h-10 object-contain"
            />
            <div>
              <h4 className="font-medium text-gray-800">
                Certificado en Bases de Datos Alfanuméricas y Espaciales
              </h4>
              <p className="text-gray-600 text-sm">
                Instituto Geográfico Agustín Codazzi (IGAC) • Septiembre 2025
              </p>
            </div>
          </div>

          {/* LAMD-COL - IGAC */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
            <img
              src="/assets/igac.webp"
              alt="IGAC"
              className="w-10 h-10 object-contain"
            />
            <div>
              <h4 className="font-medium text-gray-800">
                Certificado en Implementación de Modelo de Aplicación LAMD-COL
              </h4>
              <p className="text-gray-600 text-sm">
                Instituto Geográfico Agustín Codazzi (IGAC) • Septiembre 2025
              </p>
            </div>
          </div>
        </div>

        {/* Cursos Platzi */}
        <div className="flex items-start gap-4">
          <img
            src="/assets/platzi.webp"
            alt="Platzi"
            className="w-10 h-10 object-contain"
          />
          <div>
            <h4 className="text-base font-medium text-gray-800 mb-2">
              Cursos especializados adicionales
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
              <li>Desarrollo Frontend – Platzi (2023)</li>
              <li>HTML y CSS a Profundidad – Platzi (2023)</li>
            </ul>
          </div>
        </div>

        {/* Cierre */}
        <p className="text-sm text-gray-600 italic pt-4 border-t border-gray-200">
          Formación continua enfocada en datos, IA aplicada al sector público y desarrollo web, complementando amplia experiencia institucional.
        </p>
      </div>
    </Section>
  );
}