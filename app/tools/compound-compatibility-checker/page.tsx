import "@fontsource/poppins";
import Script from 'next/script';
import '@/public/css/tools/compound-compatibility-checker.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Compound Compatibility Checker",
    description: "Evaluate the compatibility of two compounds based on their chemical properties and potential interactions."
};

export default async function MoleculePropertyPredictor() {
    return (
        <>
            <div className="main">
                <div className="generator-container">
                    <h2 className="generator-title">Compound Compatibility Checker</h2>
                    <textarea
                        className="generator-input"
                        id="content"
                        placeholder="Enter two compounds separated by a comma (e.g., H2O, NaCl)"
                        rows={4}
                        required
                    ></textarea>
                    <button className="generator-btn" id="generate-button">
                        Check Compatibility
                    </button>
                    <h3 className="generator-output-title">Compatibility Result:</h3>
                    <div className="generator-output" id="output-result">
                        Compatibility information will appear here...
                    </div>
                </div>
                <div className="container text-generator-content">
                    <h1>Check Compound Compatibility Instantly</h1>
                    <p>
                        Our Compound Compatibility Checker tool allows you to quickly assess the compatibility of different chemical compounds.
                        Simply enter the compounds you're working with, and let our tool evaluate potential reactions, stability, and compatibility
                        to ensure safe handling and effective combinations.
                    </p>

                    <h2>How to Use the Compound Compatibility Checker?</h2>
                    <p>
                        Using the tool is simple. Just follow these steps:
                        <ol>
                            <li>Enter the compounds you want to check in the input boxes (e.g., H<sub>2</sub>O, NaCl).</li>
                            <li>Click the <strong>Check Compatibility</strong> button.</li>
                            <li>View the compatibility results, which include potential reactions, warnings, and compatibility ratings.</li>
                        </ol>
                    </p>

                    <h2>Key Benefits of Using This Tool</h2>
                    <ul>
                        <li>🧪 <strong>Enhanced Safety</strong>: Identify potential hazards and avoid unsafe chemical combinations.</li>
                        <li>📉 <strong>Detailed Analysis</strong>: Get insights into stability, reactivity, and other compatibility factors.</li>
                        <li>🔍 Perfect for <strong>Chemists, Lab Technicians, and Researchers</strong> aiming for safe, effective experimentation.</li>
                    </ul>

                    <h3>Why Use a Compound Compatibility Checker?</h3>
                    <p>
                        Determining the compatibility of chemical compounds is essential for safe lab work and industrial processes.
                        This tool streamlines the evaluation process, providing you with reliable data on compound interactions to
                        help avoid unwanted reactions.
                    </p>

                    <h3>Explore More Chemistry Safety Tools</h3>
                    <p>
                        Discover other tools designed for safe chemical handling, including tools for hazard identification, reaction prediction,
                        and compound toxicity analysis, to expand your research and experimentation toolkit.
                    </p>
                </div>

            </div>

            <Script src="https://cdnjs.cloudflare.com/ajax/libs/marked/2.1.3/marked.min.js"></Script>
            <Script src="/js/tools/compound-compatibility-checker.js" />
        </>
    );
}
