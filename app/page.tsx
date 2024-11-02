import "@fontsource/poppins";
import Script from 'next/script';
import Image from 'next/image';
import '@/public/css/index.css';

export const metadata = {
  title: "AI Content Generation Platform",
  description: "Discover Cinecast, the leading AI content generation platform that simplifies paragraph creation, text summarization, and description generation. Enhance your writing efficiency and produce high-quality content with ease. Join us today and transform your creative process!"
};

export default async function App() {
  return (
    <>
      <div className="container">
        <h1 className="h1">AI-Powered Content Creation</h1>
        <p className="p">Cinecast empowers creators with AI-driven content generation. Effortlessly craft compelling descriptions, summaries, and more—all in one place. Unlock your creativity with Cinecast.</p>
        <button className="btn">Get Started</button>
      </div>
    </>
  );
}
