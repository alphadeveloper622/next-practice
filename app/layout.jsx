import Link from "next/link"
import Counter from '../components/Counter'

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
            <header className="site-header">
                <he>Our Header</he>    
            </header>
            {children}
            <footer className="site-footer">
                <p>Our footer</p>
                <nav>
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About Us</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </nav>
                <Counter />
            </footer>
        </body>
      </html>
    )
}