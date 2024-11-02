import "@fontsource/poppins";
import Script from 'next/script';
import Image from 'next/image';
import '@/public/css/index.css';
import Marquee from "react-fast-marquee";

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
      <div className="marquee">
        <Marquee direction="left" pauseOnHover>
          &nbsp;Effortlessly generate engaging paragraphs, streamline text summarization, create detailed descriptions, and enhance your content with our AI-driven solutions. Join us today and elevate your content creation experience!
        </Marquee>
      </div>
      <div className="contact">
        <form>
          <div className="row">
            <h2>Contact Us</h2>
          </div>
          <div className="row">
            <div className="inputBox">
              <label htmlFor="firstname">First Name:*</label>
              <input type="text" id="firstname" name="firstname" required />
            </div>
            &nbsp;&nbsp;
            <div className="inputBox">
              <label htmlFor="lastname">Last Name:*</label>
              <input type="text" id="lastname" name="lastname" required />
            </div>
          </div>
          <div className="row">
            <div className="inputBox">
              <label htmlFor="email">Email:*</label>
              <input type="email" id="email" name="email" required />
            </div>
          </div>
          <div className="row">
            <div className="inputBox messageBox">
              <label htmlFor="message">Message:*</label>
              <textarea name="message" id="message" required></textarea>
            </div>
          </div>
          <div className="row">
            <div className="inputBox">
              <button type="submit">Send</button>
            </div>
          </div>
        </form>
      </div>
      <br /><br />
    </>
  );
}
