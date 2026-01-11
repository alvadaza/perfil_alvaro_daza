import Section from "../components/section";

export default function ExperienceSection() {
 const experience = [
  {
    image: "/assets/logo-snr-mediano.webp", 
    title: "Analista de Datos / Profesional Universitario Tipo B (Contrato de prestación de servicios)",
    company: "Superintendencia de Notariado y Registro",
    location: "Bogotá, Colombia",
    start: "Agosto 2025",
    end: "Diciembre 2025",
    supervisor: "Supervisor: Jorge Arcecio Cañaveral Rojas",
    description: [
      "Automatización de Procesos ETL: Creé y mantuve scripts personalizados para extracción, transformación y carga (ETL) de datos, automatizando la actualización mensual del portal Azure (RDM) para respaldar la planificación estratégica de TI.",
      "Gestión de Datos Críticos: Generé y validé mensualmente las mutaciones de oficinas ORIP mediante el Sistema de Información Registral (SIR), asegurando calidad e integridad de información esencial para arquitectura empresarial.",
      "Interoperabilidad y Cumplimiento: Diseñé y generé archivos XTF para Catastro Multipropósito, garantizando cumplimiento de requisitos normativos y técnicos para interoperabilidad entre sistemas.",
      "Soporte Técnico Especializado: Gestioné solicitudes de información técnica de entidades externas (SAE, delegada de Tierras), fortaleciendo transparencia y cumplimiento normativo desde TI.",
      "Arquitectura Empresarial: Contribuí al fortalecimiento de la arquitectura empresarial mediante análisis de procesos y participación en iniciativas de mejora tecnológica.",
    ],
  },
  {
    image: "/assets/logo-snr-mediano.webp",
    title: "Técnico Administrativo Grado 18 (Contrato provisional)",
    company: "Superintendencia de Notariado y Registro",
    location: "Bogotá, Colombia",
    start: "Julio 2024",
    end: "Agosto 2025",
    supervisor: "Supervisor: José Ricardo Acevedo",
    description: [
      "Administré bases de datos SQL, realizando consultas, generación de reportes y respaldo de datos para Oficinas de Registro.",
      "Apoyé técnicamente a la Superintendencia delegada de Tierras e IGAC en estructuración de archivos XTF y XML según modelo LAND-COL/LADM-COL.",
      "Desarrollé dashboards y paneles interactivos en Power BI para apoyo a toma de decisiones institucional.",
      "Brindé soporte técnico y capacitación a usuarios en herramientas ofimáticas y software institucional.",
    ],
  },
  {
    image: "/assets/domesa-logo-E670B6C83E-seeklogo.com.webp", 
    title: "Motorizado con responsabilidades de coordinación",
    company: "Domesa de Colombia | Seguros Bolívar",
    location: "Bogotá, Colombia",
    start: "Abril 2001",
    end: "Junio 2024",
    duration: "23 años",
    supervisor: "Supervisor: Sandra Mora",
    description: [
      "Liderazgo Operativo: Responsable del manejo de personal durante 3 años, incluyendo entrega de informes, verificación de actividades y gestión de rutas.",
      "Gestión Logística: Especializado en planificación y ejecución de operaciones logísticas eficientes.",
      "Servicio al Cliente: Atención y resolución de requerimientos de clientes de Seguros Bolívar.",
      "Herramientas Tecnológicas: Manejo avanzado de Excel, SQL básico, aplicaciones web internas y sistemas corporativos.",
    ],
  },
  {
    image: "/assets/fundacion.webp", 
    title: "Soporte Técnico IT (Contrato independiente)",
    company: "Fundación Fundamor",
    location: "Bogotá, Colombia",
    start: "2018",
    end: "Actualidad",
    description: [
      "Soporte técnico presencial y en línea, mantenimiento y programación de equipos de cómputo e impresoras.",
      "Desarrollo e implementación de página web informativa para difusión de actividades con familias vulnerables y niños.",
    ],
  },
];

    return (
        <Section title="Experiencia">
            <div className="space-y-6">
                {experience.map((experience) => (
                    <div key={experience.title} className="w-full border border-gray-200 p-6 rounded-xl">
                        <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500">
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                                    <img
                                        src={experience.image}
                                        alt={experience.title}
                                        width={40}
                                        height={40}
                                    />
                                </div>
                                <div>
                                    <h3 className="text-base font-medium text-gray-800">
                                        {experience.title}
                                    </h3>
                                    <div>{experience.company}</div>
                                </div>
                            </div>
                            <div>{experience.start} - {experience.end}</div>
                        </div>
                        <ul className="list-disc px-5 mt-6 text-gray-500 space-y-2">
                            {experience.description.map((description) => (
                                <li key={description}>{description}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}