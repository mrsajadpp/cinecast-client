import "@fontsource/poppins";
import Script from 'next/script';
import '@/public/css/tools/molecule-property-predictor.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Predict Molecule Properties",
    description: "Input a molecular formula to predict various properties of the molecule, such as molecular weight, boiling point, and more."
};

export default async function MoleculePropertyPredictor() {
    return (
        <>
            <div className="main">
                <div className="generator-container">
                    <h2 className="generator-title">Molecule Property Predictor</h2>
                    <textarea
                        className="generator-input"
                        id="content"
                        placeholder="Enter molecular formula (e.g., H2O, C6H12O6)..."
                        rows={4}
                        required
                    ></textarea>
                    <button className="generator-btn" id="generate-button">
                        Predict Properties
                    </button>
                    <h3 className="generator-output-title">Predicted Properties:</h3>
                    <div className="generator-output" id="output-result">
                        The properties of the molecule will appear here... The products of your reaction will appear here...
                    </div>
                </div>
                <div className="container text-generator-content">
                    <h1>Predict Molecule Properties Instantly</h1>
                    <p>
                        Our Molecule Property Predictor tool helps you quickly obtain key information about a molecule.
                        Simply enter the molecular formula, and let our tool calculate various properties such as molecular weight,
                        boiling point, and more.
                    </p>

                    <h2>How to Use the Molecule Property Predictor?</h2>
                    <p>
                        Just follow these easy steps:
                        <ol>
                            <li>Enter the molecular formula (e.g., H<sub>2</sub>O, C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>) in the input box above.</li>
                            <li>Click the <strong>Predict Properties</strong> button.</li>
                            <li>The tool will display the molecule’s properties, giving you immediate access to valuable data.</li>
                        </ol>
                    </p>

                    <h2>Key Benefits of Using This Tool</h2>
                    <ul>
                        <li>⚛️ <strong>Quick Insights</strong>: Instantly retrieve molecular properties.</li>
                        <li>📊 <strong>Comprehensive Data</strong>: Provides molecular weight, boiling point, melting point, and more.</li>
                        <li>🔬 Ideal for <strong>Students, Chemists, and Researchers</strong> seeking reliable data fast.</li>
                    </ul>

                    <h3>Why Use a Molecule Property Predictor?</h3>
                    <p>
                        Calculating molecular properties can be complex and time-consuming. This tool streamlines the process,
                        allowing you to obtain detailed data on molecular characteristics quickly and accurately.
                    </p>

                    <h3>Explore More Chemistry Tools</h3>
                    <p>
                        Discover additional tools for chemical reaction completion, synthesis pathway exploration,
                        and real-time reaction monitoring to expand your research capabilities.
                    </p>
                </div>

            </div>

            <Script src="https://cdnjs.cloudflare.com/ajax/libs/marked/2.1.3/marked.min.js"></Script>
            <Script src="/js/tools/molecule-property-predictor.js" />
        </>
    );
}
