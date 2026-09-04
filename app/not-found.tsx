import Link from "next/link";

export default function NotFound() {
    return (
        <main className="page-container">
            <h1>Pagina niet gevonden</h1>

            <p> Helaas kunnen we de pagina die u zoekt niet vinden.</p>
            <Link href="/" className="link-button"> Terug naar de homepage </Link>
        </main>
    );
}