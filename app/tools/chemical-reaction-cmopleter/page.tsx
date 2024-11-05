import "@fontsource/poppins";
import Script from 'next/script';
import Image from 'next/image';
import '@/public/css/tools/reaction-predictor.css';
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Complete Chemical Reactions Easily",
    description: "Enter chemical reactants and predict the products instantly with our chemical reaction completer."
};

export default async function App() {
    return (
        <>
            <div className="main">
                <div className="generator-container">
                    <h2 className="generator-title">Chemical Reaction Completer</h2>
                    <textarea 
                        className="generator-input" 
                        id="content" 
                        placeholder="Type or paste your chemical reactants here (e.g., C6H12O6 + O2)..." 
                        rows={4} 
                        required
                    ></textarea>
                    <button className="generator-btn" id="generate-button">
                        Complete Reaction
                    </button>
                    <h3 className="generator-output-title">Predicted Products:</h3>
                    <div className="generator-output" id="output-result">
                        The products of your reaction will appear here...
                    </div>
                </div>
                <div className="container text-generator-content">
                    <h1>Complete Chemical Reactions Instantly</h1>
                    <p>
                        Our Chemical Reaction Completer tool allows you to predict the products of a chemical reaction
                        quickly. Simply enter your reactants, and let our tool do the rest.
                    </p>

                    <h2>How to Use the Reaction Completer?</h2>
                    <p>
                        Follow these simple steps:
                        <ol>
                            <li>Enter or paste the chemical reactants in the input box above.</li>
                            <li>Click the <strong>Complete Reaction</strong> button.</li>
                            <li>The tool will display the products and balance the equation, if possible.</li>
                        </ol>
                    </p>

                    <h2>Key Benefits of Using This Tool</h2>
                    <ul>
                        <li>🧪 <strong>Fast and Accurate</strong>: Complete reactions in seconds.</li>
                        <li>⚛️ <strong>Equation Balancing</strong>: Automatically balances equations.</li>
                        <li>🔍 Suitable for <strong>Students, Chemists, and Researchers</strong></li>
                    </ul>

                    <h3>Why Use a Reaction Completer?</h3>
                    <p>
                        Balancing chemical reactions and predicting products can be time-consuming and error-prone.
                        This tool simplifies the process, providing you with balanced reactions and potential products
                        with a single click.
                    </p>

                    <h3>Explore More Chemistry Tools</h3>
                    <p>
                        Check out our other tools for Molecule Property Prediction, Synthesis Pathways, and Real-Time Reaction Monitoring.
                    </p>
                </div>
            </div>

            <Script src="https://cdnjs.cloudflare.com/ajax/libs/marked/2.1.3/marked.min.js"></Script>
            <Script src="/js/tools/chemical-reaction-completer.js" />
        </>
    );
}
