import "@fontsource/poppins";
import Script from 'next/script';
import Image from 'next/image';
import '@/public/css/tools.css';
import Marquee from "react-fast-marquee";
import Link from "next/link";
import ReactMarkdown from 'react-markdown';

export const metadata = {
    title: "AI Content Generation Tools",
    description: "The leading AI content generation tools that simplifies paragraph creation, text summarization, and description generation. Enhance your writing efficiency and produce high-quality content with ease."
};

export default async function App() {
    return (
        <>
            <div className="main">
                <h2 className="tools-title">AI Content Generation Tools</h2>
                <div className="button-container">
                    <Link className="grid-button" href="/tools/text-summarizer/">
                        <img src="/icons/graphics/pencil.png" alt="Text Summarizer" />
                        <button>Text Summarizer</button>
                    </Link>
                    <Link className="grid-button" href="/tools/paragraph-generator/">
                        <img src="/icons/graphics/certificate.png" alt="Paragraph Gen" />
                        <button>Paragraph Gen</button>
                    </Link>
                    <Link className="grid-button" href="/tools/title-generator/">
                        <img src="/icons/graphics/marker.png" alt="Title Gen" />
                        <button>Title Gen</button>
                    </Link>
                    <Link className="grid-button" href="/tools/caption-generator/">
                        <img src="/icons/graphics/abc.png" alt="Caption Gen" />
                        <button>Caption Gen</button>
                    </Link>
                </div>
                <h2 className="tools-title">AI Chemistry Tools</h2>
                <div className="button-container">
                    <Link className="grid-button" href="/tools/chemical-reaction-cmopleter/">
                        <img src="/icons/graphics/atom.png" alt="Text Summarizer" />
                        <button>Chemical Reaction Completer</button>
                    </Link>
                    <Link className="grid-button" href="/tools/molecule-property-predictor/">
                        <img src="/icons/graphics/molecule.png" alt="Paragraph Gen" />
                        <button>Molecule Property Predictor</button>
                    </Link>
                    <Link className="grid-button" href="/tools/environmental-impact-analyzer/">
                        <img src="/icons/graphics/glass.png" alt="Title Gen" />
                        <button>Environmental Impact Analyzer</button>
                    </Link>
                    <Link className="grid-button" href="/tools/compound-compatibility-checker/">
                        <img src="/icons/graphics/reaction.png" alt="Caption Gen" />
                        <button>Compound Compatibility Checker</button>
                    </Link>
                </div>
            </div>

            <br /><br />
        </>
    );
}
