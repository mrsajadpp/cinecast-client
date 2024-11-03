import "@fontsource/poppins";
import Script from 'next/script';
import Image from 'next/image';
import '@/public/css/tools/caption.css';
import Marquee from "react-fast-marquee";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Generate Engaging Social Media Captions Quickly",
    description: "Create impactful and catchy social media captions in seconds. Enhance your posts with our intuitive caption generator."
};

export default async function App() {
    return (
        <>
            <div className="main">
                <div className="generator-container">
                    <h2 className="generator-title">Social Media Caption Generator</h2>
                    <textarea className="generator-input" id="content" placeholder="Type or paste your content here..." rows={6} required></textarea>
                    <button className="generator-btn" id="generate-button">Generate Caption</button>
                    <h3 className="generator-output-title">Generated Caption:</h3>
                    <div className="generator-output" id="output-result">Your generated caption will appear here...</div>
                </div>
                <div className="container text-generator-content">
                    <h1>Create Catchy Captions for Social Media</h1>
                    <p>
                        Our Social Media Caption Generator helps you create captivating captions that enhance your social media presence. Save time and engage your audience with compelling captions.
                    </p>

                    <h2>How Does Our Caption Generator Work?</h2>
                    <p>
                        To use this tool:
                        <ol>
                            <li>Enter or paste your content in the input box above.</li>
                            <li>Click the <strong>Generate Caption</strong> button.</li>
                            <li>The tool will instantly generate an engaging caption based on your content.</li>
                        </ol>
                    </p>

                    <h2>Why Use Our Caption Generator?</h2>
                    <ul>
                        <li>✅ <strong>Engaging Social Media Content</strong></li>
                        <li>📱 <strong>Increases Post Visibility</strong></li>
                        <li>✍️ Generates captions for <strong>Instagram, Facebook, Twitter & more</strong></li>
                        <li>💰 <strong>100% Free</strong></li>
                    </ul>

                    <h3>Key Features</h3>
                    <p>
                        <strong>Quick Caption Generation:</strong> Instantly create social media-ready captions.
                        <br /><strong>Copy & Share:</strong> Easily copy or share the generated caption for instant use.
                    </p>

                    <h3>Benefits of Using an AI Caption Generator</h3>
                    <ul>
                        <li><strong>Quick Results:</strong> Generate captions in seconds without writer’s block.</li>
                        <li><strong>Boosts Engagement:</strong> Create attention-grabbing captions to increase reach.</li>
                        <li><strong>Ideal for Various Users:</strong> Suitable for influencers, businesses, and everyday users alike.</li>
                    </ul>

                    <h3>Who Uses Our Caption Generator?</h3>
                    <p>
                        This tool is ideal for:
                        <ul>
                            <li><strong>Content Creators:</strong> Generate catchy captions for posts.</li>
                            <li><strong>Businesses:</strong> Create promotional captions for brand visibility.</li>
                            <li><strong>Social Media Managers:</strong> Save time creating captions for client accounts.</li>
                            <li><strong>Everyone:</strong> Anyone looking to enhance their social media presence.</li>
                        </ul>
                    </p>

                    <h3>Explore More Tools</h3>
                    <p>
                        Check out our other tools, like Paragraph Generator, Text Summarizer, and more for all your content needs.
                    </p>
                </div>
            </div>

            <Script src="https://cdnjs.cloudflare.com/ajax/libs/marked/2.1.3/marked.min.js"></Script>
            <Script src="/js/tools/caption.js" />
        </>
    );
}
