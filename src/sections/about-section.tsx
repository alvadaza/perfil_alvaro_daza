import Section from "../components/section";

export default function AboutSection() {
  return (
    <Section title="Acerca de mí">
      <div className="text-sm leading-6 space-y-5">
        <p className="font-medium text-base">
          Soy Luis Álvaro Daza Holguín, <strong>análista, procesamiento y gestión de datos</strong> con fuerte experiencia en el <strong>sector público colombiano</strong>.
        </p>

        <p>
          En mi rol más reciente como <strong>analista en la Superintendencia de Notariado y Registro</strong>, fui responsable de garantizar la <strong>integridad, calidad y disponibilidad</strong> de la información crítica del Sistema de Información Registral (SIR), utilizando <strong>Azure RDM, SQL Server y Oracle</strong> para soportar procesos misionales y decisiones estratégicas de alto impacto.
        </p>

        <p>
          Combino esta experiencia institucional con habilidades de <strong>desarrollo web Full Stack</strong> (más de 3 años) y una sólida trayectoria de <strong>23 años en Domesa de Colombia</strong>, donde desarrollé competencias destacadas en gestión de procesos complejos, adaptabilidad al cambio y compromiso con resultados.
        </p>

        <p className="font-medium">
          Mi objetivo actual es aportar <strong>valor técnico + comprensión profunda del sector público</strong> para generar <strong>información confiable, eficiente y accionable</strong> que facilite la toma de decisiones basadas en datos.
        </p>

        {/* Opcional - muy recomendado añadir */}
        <div className="pt-2">
          <p className="text-gray-600 italic text-xs">
            Tecnologías principales: SQL Server • Oracle • Azure • Power BI /JavaScript/TypeScript • React • Node.js
          </p>
        </div>
      </div>
    </Section>
  );
}