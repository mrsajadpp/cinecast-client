import "@fontsource/poppins";
import Script from 'next/script';
import Image from 'next/image';
import '@/public/css/donate.css';
import Marquee from "react-fast-marquee";
import Link from "next/link";

export const metadata = {
    title: "AI Content Generation Platform",
    description: "Discover Cinecast, the leading AI content generation platform that simplifies paragraph creation, text summarization, and description generation. Enhance your writing efficiency and produce high-quality content with ease. Join us today and transform your creative process!",
    openGraph: {
        images: ['/opengraph/image.jpg'],
    }
};

export default async function App() {
    return (
        <>
            <div className="main">
                <div className="donate-container">
                    <img src="/donate.png
                    " alt="Bitcoin QR Code" className="qr-code" />

                    <p className="bitcoin-address">1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa</p>

                    <a href="https://www.patreon.com/" target="_blank" className="donate-button patreon-btn">Support on Patreon</a>
                    <a href="https://www.buymeacoffee.com/" target="_blank" className="donate-button coffee-btn">Buy Me a Coffee</a>
                </div>
            </div>
        </>
    );
}
