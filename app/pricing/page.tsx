import "@fontsource/poppins";
import Script from 'next/script';
import Image from 'next/image';
import '@/public/css/pricing.css';
import Marquee from "react-fast-marquee";
import Link from "next/link";

export const metadata = {
    title: "Pricing Plans",
    description: "Discover Cinecast's affordable and scalable pricing plans for AI-powered content generation. From the Free Trial Plan to the Enterprise Plan for large teams, choose the best option to elevate your content creation. Join Cinecast to access top-tier content generation tools today!",
    openGraph: {
        images: ['/opengraph/image.jpg'],
    }
};

export default async function App() {
    return (
        <>
            <div className="pricing-container">
                {/* Free Trial Plan */}
                <div className="pricing-card">
                    <h3 className="plan-title">Free Trial Plan</h3>
                    <p className="plan-description">Try Cinecast risk-free!</p>
                    <ul className="plan-features">
                        <li>1,000 tokens for 14 days</li>
                        <li>Access to core features</li>
                        <li>Community support</li>
                        <li>Basic usage analytics</li>
                    </ul>
                    <p className="plan-price">₹0/month</p>
                    <button className="purchase-button">Start Free Trial</button>
                </div>

                {/* Starter Plan */}
                <div className="pricing-card">
                    <h3 className="plan-title">Starter Plan</h3>
                    <p className="plan-description">Ideal for freelancers and beginners.</p>
                    <ul className="plan-features">
                        <li>10,000 tokens per month</li>
                        <li>Standard content generation</li>
                        <li>Community support</li>
                        <li>Basic usage analytics</li>
                    </ul>
                    <p className="plan-price">₹499/month</p>
                    <button className="purchase-button">Purchase</button>
                </div>

                {/* Pro Plan */}
                <div className="pricing-card">
                    <h3 className="plan-title">Pro Plan</h3>
                    <p className="plan-description">Perfect for growing teams and businesses.</p>
                    <ul className="plan-features">
                        <li>50,000 tokens per month</li>
                        <li>Expanded content customization</li>
                        <li>Priority email support</li>
                        <li>Access to content templates</li>
                        <li>Detailed usage analytics</li>
                    </ul>
                    <p className="plan-price">₹1,999/month</p>
                    <button className="purchase-button">Purchase</button>
                </div>

                {/* Enterprise Plan */}
                <div className="pricing-card">
                    <h3 className="plan-title">Enterprise Plan</h3>
                    <p className="plan-description">Best for large teams and high-volume needs.</p>
                    <ul className="plan-features">
                        <li>200,000 tokens per month</li>
                        <li>Custom content styles and integrations</li>
                        <li>Dedicated account manager</li>
                        <li>24/7 priority support</li>
                        <li>Advanced usage analytics</li>
                    </ul>
                    <p className="plan-price">₹6,999/month</p>
                    <button className="purchase-button">Purchase</button>
                </div>
            </div>
            <br /><br />
        </>
    );
}
