import "@fontsource/poppins";
import Script from 'next/script';
import Image from 'next/image';
import '@/public/css/donate.css';
import Marquee from "react-fast-marquee";
import Link from "next/link";

export const metadata = {
    title: "Support Cinecas",
    description: "Help keep Cinecast ad-free by supporting us through donations. Your contribution allows us to provide high-quality AI content generation tools, including text summarization, story creation, and more. Join us in making creative tools accessible for everyone!",
    openGraph: {
        images: ['/opengraph/image.jpg'],
    }
};


export default async function App() {
    return (
        <>
            <div className="main">
                <div className="donate-container">
                    <p className="donate-message">
                        To keep our website ad-free and accessible to everyone, we rely on your generous support. If you find our resources valuable, please consider making a donation. Your support keeps us going!
                    </p>

                    <img src="/donate.png" alt="Bitcoin QR Code" className="qr-code" />

                    <p className="bitcoin-address">1AqQFtHqT2sDEAPiRnLPdoTANeGpL4GFKq</p>

                    <a href="https://buymeacoffee.com/grovixlab" target="_blank" className="donate-button coffee-btn">Buy Me a Coffee</a>
                </div>
            </div>
        </>
    );
}
