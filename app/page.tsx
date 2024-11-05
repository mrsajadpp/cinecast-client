import "@fontsource/poppins";
import Script from 'next/script';
import Image from 'next/image';
import '@/public/css/index.css';
import Marquee from "react-fast-marquee";
import Link from "next/link";

export const metadata = {
  title: "AI Content & Chemistry Tools Platform",
  description: "Explore Cinecast's AI-driven tools for creating content and chemistry insights. From paragraph generation and text summarization to molecular analysis, Cinecast empowers creators and scientists alike. Join us to revolutionize your content and research processes.",
  openGraph: {
    images: ['/opengraph/image.jpg'],
  }
};

export default async function App() {
  return (
    <>
      <div className="container" style={{ minHeight: "70vh", display: 'flex', flexDirection: 'column', justifyContent: "center" }}>
        <h1 className="h1">AI-Powered Content & Chemistry Generation</h1>
        <p className="p">
          Welcome to Cinecast, your comprehensive platform for AI-driven content creation and chemistry tools.
          Our advanced tools empower creators, scientists, and innovators alike to effortlessly generate high-quality
          content, from summaries and captions to in-depth paragraph generation, along with specialized chemistry insights.
          Unlock your potential with Cinecast.
        </p>
        <Link href="/tools">
          <button className="btn">Get Started</button>
        </Link>
      </div>

      <div className="marquee">
        <Marquee direction="left" pauseOnHover>
          &nbsp;Transform the way you create with Cinecast. Generate engaging paragraphs, streamline text summaries, craft eye-catching
          titles, and even predict chemical properties with AI. Join Cinecast today and elevate your content and scientific discovery journey!
        </Marquee>
      </div>

      {/* Content Generation Tools */}
      <div className="content-section" style={{ display: 'none' }}>
        <h2>AI Content Generation Tools</h2>
        <ul>
          <li><strong>Text Summarizer:</strong> Simplify lengthy content into concise summaries for quick insights.</li>
          <li><strong>Paragraph Generator:</strong> Generate structured and engaging paragraphs instantly.</li>
          <li><strong>Title Generator:</strong> Create catchy, optimized titles to capture your audience's attention.</li>
          <li><strong>Caption Generator:</strong> Produce engaging captions that enhance your social media and content reach.</li>
        </ul>
      </div>

      {/* Chemistry Tools */}
      <div className="content-section" style={{ display: 'none' }}>
        <h2>AI Chemistry Tools</h2>
        <ul>
          <li><strong>Chemical Reaction Completer:</strong> Predict and complete chemical reactions with AI assistance.</li>
          <li><strong>Molecule Property Predictor:</strong> Analyze molecular properties to support research and development.</li>
          <li><strong>Environmental Impact Analyzer:</strong> Assess the environmental impact of compounds to make sustainable choices.</li>
          <li><strong>Compound Compatibility Checker:</strong> Check compound compatibility for safer formulations and mixtures.</li>
        </ul>
      </div>
    </>
  );
}
