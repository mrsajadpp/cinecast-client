import "@fontsource/poppins";
import Script from 'next/script';
import Image from 'next/image';
import '@/public/css/tools/paragraph.css';
import Marquee from "react-fast-marquee";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Generate Engaging Paragraphs Quickly",
    description: "Create meaningful paragraphs and ideas with ease. Boost your content creation with our intuitive paragraph generator."
};

export default async function App() {
    return (
        <>
            <div className="main">
                <div className="generator-container">
                    <h2 className="generator-title">Paragraph Generator Tool</h2>
                    <textarea className="generator-input" id="content" placeholder="Type or paste your keywords here..." rows={6} required></textarea>
                    <button className="generator-btn" id="generate-button">Generate Paragraph</button>
                    <h3 className="generator-output-title">Generated Paragraph:</h3>
                    <div className="generator-output" id="output-result">Your generated paragraph will appear here...</div>
                </div>
                <div className="container text-generator-content">
                    <h1>Create Engaging Paragraphs Quickly</h1>
                    <p>
                        Our Paragraph Generator is a content creation tool designed to help you produce well-structured paragraphs from keywords and ideas, saving you time on brainstorming and writing.
                    </p>

                    <h2>How Does Our Paragraph Generator Work?</h2>
                    <p>
                        To use this tool:
                        <ol>
                            <li>Enter or paste your main keywords or ideas in the input box above.</li>
                            <li>Click the <strong>Generate Paragraph</strong> button.</li>
                            <li>The tool will instantly create a cohesive paragraph based on your input.</li>
                        </ol>
                    </p>

                    <h2>Why Use Our Paragraph Generator?</h2>
                    <ul>
                        <li>✅ <strong>Effortless Content Creation</strong></li>
                        <li>📖 <strong>AI-Powered Suggestions</strong></li>
                        <li>📝 Generates paragraphs for <strong>blogs, reports & more</strong></li>
                        <li>💰 <strong>100% Free</strong></li>
                        <li>💬 <strong>Multi-Language Support</strong></li>
                    </ul>

                    <h3>Key Features</h3>
                    <p>
                        <strong>Quick Paragraph Generation:</strong> Instantly produce engaging content from minimal input.
                        <br /><strong>Copy & Download:</strong> Easily copy or download the generated content as a text file.
                    </p>

                    <h3>Benefits of Using an AI Paragraph Generator</h3>
                    <ul>
                        <li><strong>Quick Results:</strong> Instantly create paragraphs from ideas without writer’s block.</li>
                        <li><strong>Enhanced Productivity:</strong> Save time and increase your writing efficiency.</li>
                        <li><strong>Ideal for Various Users:</strong> Suitable for bloggers, students, and professionals alike.</li>
                    </ul>

                    <h3>Who Uses Our Paragraph Generator?</h3>
                    <p>
                        This tool serves a broad range of users, including:
                        <ul>
                            <li><strong>Content Creators:</strong> Generate engaging paragraphs for articles or blogs.</li>
                            <li><strong>Students:</strong> Quickly create content for essays and assignments.</li>
                            <li><strong>Business Professionals:</strong> Write summaries, reports, and newsletters.</li>
                            <li><strong>SEO Specialists:</strong> Generate content ideas for optimized web pages.</li>
                        </ul>
                    </p>

                    <h3>Explore More Tools</h3>
                    <p>
                        Check out our other tools, like Text Summarizer, Invisible Character Generator, and Small Text Generator, for all your content needs.
                    </p>
                </div>
            </div>

            <Script src="https://cdnjs.cloudflare.com/ajax/libs/marked/2.1.3/marked.min.js"></Script>
            <Script src="/js/tools/paragraph.js" />
        </>
    );
}
