import Section from "../components/section";

export default function ProjectsSection() {
 const projects = [
  {
    title: "Plataforma Educativa Estudiantil",
    description: "Desarrollo completo de una aplicación web para gestión académica: inscripción de cursos, seguimiento de progreso estudiantil, entrega de tareas, calificaciones y dashboard personalizado para profesores y alumnos. Enfoque en UX intuitiva y responsiva para uso en dispositivos móviles.",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Firebase/Auth", "Firestore"],
    image: "/assets/funeonpagina.webp",
    link: "https://fundneon.netlify.app/", // o GitHub repo
    year: "2025",
  },
  {
    title: "Marketplace E-commerce Multivendedor",
    description: "Aplicación full stack de ventas online con múltiples vendedores: catálogo de productos, carrito de compras, pasarela de pago integrada (ej. PayU/Epayco), panel de administración para vendedores, gestión de inventario y órdenes. Optimizada para SEO y rendimiento móvil.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB", "Stripe/PayU"],
    image: "/assets/fundabs.png",
    link: "https://fundacion-fundabs.org/",
    year: "2024",
  },
  {
    title: "Tienda Online Personalizada (E-commerce Básico)",
    description: "Sitio de venta de productos con diseño moderno: homepage con banners promocionales, filtros avanzados por categoría/precio, detalles de producto, checkout simple y responsive. Integración con base de datos para gestión de stock y pedidos.",
    technologies: ["React", "Tailwind CSS", "Firebase", "Vite"],
    image: "/assets/peths.png",
    link: "https://pet-shop-dun.netlify.app/",
    year: "2023",
  },
];

    return (
        <Section title="Projectos">
            <div className="flex flex-wrap justify-center items-center gap-4 mr-auto">
                {projects.map((project) => (
                    <div key={project.title} className="hover:-translate-y-0.5 transition duration-300 max-w-75 border border-gray-200 rounded-xl">
                        <img
                            className="rounded-t-xl h-42 object-fit"
                            src={project.image}
                            alt={project.title}
                            width={300}
                            height={170}
                        />
                        <div className="p-4">
                            <h3 className="text-base font-medium">
                                {project.title}
                            </h3>
                            <p className="text-gray-500 mt-1">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}