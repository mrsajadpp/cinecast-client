import Link from "next/link";
import '@/public/css/header.css';
import Script from "next/script";

export default function Header() {
    return (
        <>
            {/* Header */}
            <header>
                <div className="left">
                    <div className="menuIcon">
                        <button id="menuIcon">
                            <i className="fi fi-ss-menu-burger" id="menu"></i>
                        </button>
                    </div>
                    <div className="logo">
                        <Link href="/">
                            <img src="/logo/black-text-logo.png" alt="CineCast" />
                        </Link>
                    </div>
                    <div className="menuBar">
                        <nav>
                            <Link href="/">Home</Link>
                            <Link href="/tools">Tools</Link>
                            <Link href="/pricing">Pricing</Link>
                            <Link href="/donate">Donate</Link>
                        </nav>
                    </div>
                </div>
            </header>
            {/* Mobile Menu */}
            <div className="mobileMenu hidden" id="menuBar">
                <nav>
                    <Link href="/">Home</Link>
                    <Link href="/tools">Tools</Link>
                    <Link href="/pricing">Pricing</Link>
                    <Link href="/donate">Donate</Link>
                </nav>
            </div>
            <Script src="/js/script.js" />
        </>
    );
}