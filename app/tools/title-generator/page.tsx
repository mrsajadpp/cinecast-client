import "@fontsource/poppins";
import Script from 'next/script';
import Image from 'next/image';
import '@/public/css/tools/title.css';
import Marquee from "react-fast-marquee";
import Link from "next/link";
import type { Metadata } from 'next';


export const metadata: Metadata = {
    title: "Generate Engaging Titles Quickly",
    description: "Create captivating titles with ease using our intuitive title generator tool."
};

export default async function App() {
    return (
        <>
            <div className="main">
                {/* Title Generator Container */}
                <div className="generator-container">
                    <h2 className="generator-title">Title Generator Tool</h2>
                    <textarea
                        className="generator-input"
                        id="content"
                        placeholder="Type or paste your keywords here..."
                        rows={6}
                        required
                    ></textarea>
                    <button className="generator-btn" id="generate-button">
                        Generate Title
                    </button>
                    <h3 className="generator-summary-title">Generated Title:</h3>
                    <div className="generator-output" id="output-result">
                        Your generated title will appear here...
                    </div>
                </div>

                {/* Content Section */}
                <div className="container text-generator-content">
                    <h1>Create Engaging Titles Quickly</h1>
                    <p>
                        Our Title Generator is designed to help you produce catchy titles from keywords and ideas, saving you time on brainstorming and writing.
                    </p>

                    <h2>How Does Our Title Generator Work?</h2>
                    <p>
                        To use this tool:
                        <ol>
                            <li>Enter or paste your main keywords in the input box above.</li>
                            <li>Click the <strong>Generate Title</strong> button.</li>
                            <li>The tool will instantly create a captivating title based on your input.</li>
                        </ol>
                    </p>

                    <h2>Why Use Our Title Generator?</h2>
                    <ul>
                        <li>✅ <strong>Effortless Title Creation</strong></li>
                        <li>📖 <strong>AI-Powered Suggestions</strong></li>
                        <li>📝 Generates titles for <strong>articles, blogs, & more</strong></li>
                        <li>💰 <strong>100% Free</strong></li>
                        <li>💬 <strong>Multi-Language Support</strong></li>
                    </ul>

                    <h3>Key Features</h3>
                    <p>
                        <strong>Quick Title Generation:</strong> Instantly produce engaging titles from minimal input.
                        <br /><strong>Copy & Download:</strong> Easily copy or download the generated title as a text file.
                    </p>

                    <h3>Benefits of Using an AI Title Generator</h3>
                    <ul>
                        <li><strong>Quick Results:</strong> Instantly create titles without writer’s block.</li>
                        <li><strong>Enhanced Productivity:</strong> Save time and increase your writing efficiency.</li>
                        <li><strong>Ideal for Various Users:</strong> Suitable for bloggers, students, and professionals alike.</li>
                    </ul>

                    <h3>Who Uses Our Title Generator?</h3>
                    <p>
                        This tool serves a broad range of users, including:
                        <ul>
                            <li><strong>Content Creators:</strong> Generate captivating titles for articles or blogs.</li>
                            <li><strong>Students:</strong> Quickly create titles for essays and assignments.</li>
                            <li><strong>Business Professionals:</strong> Write attention-grabbing titles for reports and newsletters.</li>
                            <li><strong>SEO Specialists:</strong> Generate optimized titles for web pages.</li>
                        </ul>
                    </p>

                    <h3>Explore More Tools</h3>
                    <p>
                        Check out our other tools, like Text Summarizer, Invisible Character Generator, and Small Text Generator, for all your content needs.
                    </p> 
                </div> 
            </div>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/marked/2.1.3/marked.min.js"></Script>
            <Script src="/js/tools/title.js" />
        </>
    );
}