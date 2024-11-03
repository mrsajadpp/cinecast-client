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
            <div className="main-area">
                <h1 className="pricing-title">Cinecast Pricing Plans</h1>
                <p className="pricing-intro">
                    This is API pricing plan. Choose the perfect plan that fits your needs! Our pricing is designed to provide you with flexible options, whether you're just starting out with our Free Trial Plan or scaling up with our Enterprise Plan. Experience the best in AI-powered content generation at competitive rates.
                </p>
            </div>

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
                    <Link href="https://forms.gle/eHXZe95uksKz92DJA">
                        <button className="purchase-button">Start Free Trial</button>
                    </Link>
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
                    <Link href="https://forms.gle/UBuuvWcWmda5g6Zn7">
                        <button className="purchase-button">Purchase</button>
                    </Link>
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
                    <Link href="https://forms.gle/wMJYaTKiwzGP5p3x7">
                        <button className="purchase-button">Purchase</button>
                    </Link>
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
                    <Link href="https://forms.gle/PCb2HrM6D1ofNe7Q6">
                        <button className="purchase-button">Purchase</button>
                    </Link>
                </div>
            </div>
            <br /><br />
        </>
    );
}
