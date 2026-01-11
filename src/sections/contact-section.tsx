import Section from "../components/section";

export default function ContactSection() {
    return (
        <Section title="Contacto">
            <table className="table-auto mr-auto">
                <tbody>
                    <tr>
                        <td className="pr-4 py-2">Correo Electronico:</td>
                        <td className="py-2 text-gray-500">ingenieroalvarod@gmail.com</td>
                    </tr>
                    <tr>
                        <td className="pr-4 py-2">Teléfono:</td>
                        <td className="py-2 text-gray-500">57 3133574711</td>
                    </tr>
                </tbody>
            </table>
        </Section>
    );
}