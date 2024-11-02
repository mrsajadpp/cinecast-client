import "@fontsource/poppins";
import Script from 'next/script';
import Image from 'next/image';
import '@/public/css/index.css';

export const metadata = {
  title: "Find Your Perfect Articles, Every Time.",
  description: "Start reading now on Grovix Lab! Explore endless knowledge in your favorite category."
};

export default async function App() {
  return (
    <>
      <div className="container">
        <h1 className="h1">Welcome to Our Platform</h1>
        <p className="p">Cinecast empowers creators with AI-driven content generation. Effortlessly craft compelling descriptions, summaries, and more—all in one place. Unlock your creativity with Cinecast.</p>
        <button className="btn">Get Started</button>
      </div>
    </>
  );
}
