export default function Footer() {
    return (
        <footer className="mt-32 w-full text-center py-3 text-gray-500 border-t border-gray-200">
            <p>
                © {new Date().getFullYear()}{" "}
                <a href="https://protechsolucionesplus.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-700">
                    Protechsolucionesplus
                </a>
                . Todos los derechos reservados.
            </p>
        </footer>
    );
}