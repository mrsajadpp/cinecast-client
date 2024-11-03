import "@fontsource/poppins";
import Script from 'next/script';
import Image from 'next/image';
import '@/public/css/tools/summarizer.css';
import Marquee from "react-fast-marquee";
import Link from "next/link";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Summarize Text and Paragraphs Quickly",
    description: "Quickly generate concise summaries for paragraphs, articles, and documents. Enhance your productivity with this easy-to-use summarization tool."
};

export default async function App() {
    return (
        <>
            <div className="main">
                <div className="summarizer-container">
                    <h2 className="summarizer-title">Text Summarizer Tool</h2>
                    <textarea className="summarizer-input" id="content" placeholder="Paste your text here..." rows={6} required></textarea>
                    <button className="summarizer-btn" id="summarize-button">Summarize</button>
                    <h3 className="summarizer-summary-title">Summary:</h3>
                    <div className="summarizer-output" id="summary-result">Your summarized text will appear here...</div>
                </div>
                <div className="container text-summarizer-content">
                    <h1>Summarize Text and Paragraphs Quickly</h1>
                    <p>
                        Our Text Summarizer is an AI-powered tool designed to summarize long texts, paragraphs, and articles, capturing the main concepts with just one click.
                    </p>

                    <h2>How Does Our AI Summary Generator Work?</h2>
                    <p>
                        To use this tool, follow these steps:
                        <ol>
                            <li>Enter or paste your text in the input box above.</li>
                            <li>Click the <strong>Summarize</strong> button.</li>
                            <li>The AI summary tool will analyze the key points and generate a concise summary within seconds.</li>
                        </ol>
                    </p>

                    <h2>What is Text Summarization?</h2>
                    <p>
                        Text summarization is the process of condensing a body of text to extract its main ideas. Our AI text summarizer utilizes advanced algorithms to accurately analyze and present the essential information from your content.
                    </p>

                    <h2>Why Use Our Text Summarizer?</h2>
                    <ul>
                        <li>✅ <strong>Accurate</strong> Summary Results</li>
                        <li>📖 <strong>AI-Powered</strong> Summarization</li>
                        <li>📝 Summarize <strong>Papers, Documents & More</strong></li>
                        <li>💰 <strong>100% Free</strong></li>
                        <li>💬 <strong>11+ Languages Supported</strong></li>
                    </ul>

                    <h3>Features</h3>
                    <p>
                        <strong>Accurate Summarization:</strong> Our tool provides precise summaries without changing the meaning of the original text.
                        <br /><strong>Copy & Download:</strong> Quickly copy the summarized text or download it as a doc file.
                    </p>

                    <h3>Benefits of Using an Online Text Summarizer</h3>
                    <ul>
                        <li><strong>Generates Instant Results:</strong> Get main ideas from long texts without reading the entire document.</li>
                        <li><strong>Boosts Productivity:</strong> Save time and effort by quickly extracting essential information.</li>
                        <li><strong>Ideal for Students and Researchers:</strong> Quickly summarize assignments, essays, or academic papers.</li>
                    </ul>

                    <h3>Who Uses Our Text Summarizer?</h3>
                    <p>
                        This tool serves a wide range of users, including:
                        <ul>
                            <li><strong>Students:</strong> Summarize lengthy essays or assignments for study.</li>
                            <li><strong>Researchers:</strong> Synthesize multiple sources for literature reviews.</li>
                            <li><strong>Businesses:</strong> Summarize reports, emails, and news articles.</li>
                            <li><strong>SEO Professionals:</strong> Create effective meta descriptions and summaries.</li>
                            <li><strong>Writers & Webmasters:</strong> Generate quick summaries for blogs or customer feedback analysis.</li>
                        </ul>
                    </p>

                    <h3>Additional Tools</h3>
                    <p>
                        Explore our other tools, including Online Notepad, Invisible Character, Text Summarizer, and Small Text Generator, for all your content needs.
                    </p>
                </div>
            </div>

            <Script src="https://cdnjs.cloudflare.com/ajax/libs/marked/2.1.3/marked.min.js"></Script>
            <Script src="/js/tools/summarize.js" />
        </>
    );
}
