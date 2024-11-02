import "@fontsource/poppins";
import Script from 'next/script';
import Image from 'next/image';
import '@/public/css/tools/summarizer.css';
import Marquee from "react-fast-marquee";
import Link from "next/link";

export const metadata = {
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
            </div>

            <Script src="/js/tools/summarize.js" />
        </>
    );
}
