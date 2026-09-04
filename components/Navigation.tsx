import Link from "next/link";

export default function Navigation() {
    return (
        <nav>
            <div className="navigation-container">
                <Link href="/" className="navigation-company-name">
                    De Tandenborstel
                </Link>

                <ul>
                    <li><Link href="/" className="navigation-link">Home</Link></li>
                    <li><Link href="/bleken" className="navigation-link">Bleken</Link></li>
                    <li><Link href="/gaatjes" className="navigation-link">Gaatjes</Link></li>
                    <li><Link href="/afspraken" className="navigation-link navigation-button">Afspraken</Link></li>
                </ul>
            </div>
        </nav>
    );
}