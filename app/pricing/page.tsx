import "@fontsource/poppins";
import Script from 'next/script';
import Image from 'next/image';
import '@/public/css/pricing.css';
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
            <div className="pricing-container">
                <div className="pricing-card">
                    <h3 className="plan-title">Basic Plan</h3>
                    <p className="plan-description">Ideal for individuals starting out.</p>
                    <ul className="plan-features">
                        <li>Access to core tools</li>
                        <li>5 AI generations per day</li>
                        <li>Email support</li>
                    </ul>
                    <p className="plan-price">₹0/month</p>
                    <button className="purchase-button">Purchase</button>
                </div>

                <div className="pricing-card">
                    <h3 className="plan-title">Standard Plan</h3>
                    <p className="plan-description">Perfect for content creators.</p>
                    <ul className="plan-features">
                        <li>Unlimited AI generations</li>
                        <li>Priority email support</li>
                        <li>Access to new tools</li>
                    </ul>
                    <p className="plan-price">₹0/month</p>
                    <button className="purchase-button">Purchase</button>
                </div>

                <div className="pricing-card">
                    <h3 className="plan-title">Pro Plan</h3>
                    <p className="plan-description">Best for professionals and agencies.</p>
                    <ul className="plan-features">
                        <li>All Standard features</li>
                        <li>Phone & email support</li>
                        <li>Custom integrations</li>
                    </ul>
                    <p className="plan-price">₹0/month</p>
                    <button className="purchase-button">Purchase</button>
                </div>
            </div>
<br /><br />
        </>
    );
}
