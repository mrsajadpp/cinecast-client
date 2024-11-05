import "@fontsource/poppins";
import Script from 'next/script';
import '@/public/css/tools/environmental-impact-analyzer.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Environmental Impact Analyzer",
    description: "Evaluate the environmental impact of a chemical reaction, considering energy requirements, emissions, and byproducts."
};

export default async function MoleculePropertyPredictor() {
    return (
        <>
            <div className="main">
                <div className="generator-container">
                    <h2 className="generator-title">Environmental Impact Analyzer</h2>
                    <textarea
                        className="generator-input"
                        id="content"
                        placeholder="Enter the chemical reaction (e.g., 2H2 + O2 → 2H2O)..."
                        rows={4}
                        required
                    ></textarea>
                    <button className="generator-btn" id="generate-button">
                        Analyze Impact
                    </button>
                    <h3 className="generator-output-title">Analysis Results:</h3>
                    <div className="generator-output" id="output-result">
                        The analysis results will appear here...
                    </div>
                </div>
                <div className="container text-generator-content">
                    <h1>Analyze Environmental Impact of Chemical Reactions</h1>
                    <p>
                        Our Environmental Impact Analyzer tool provides a comprehensive evaluation of the environmental effects of chemical reactions.
                        Simply input the chemical reaction, and our advanced AI will assess energy requirements, emissions, and byproducts, suggesting
                        eco-friendly alternatives to enhance sustainability.
                    </p>

                    <h2>How to Use the Environmental Impact Analyzer?</h2>
                    <p>
                        Follow these simple steps to get started:
                        <ol>
                            <li>Enter the chemical reaction (e.g., 2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O) in the input box above.</li>
                            <li>Click the <strong>Analyze Impact</strong> button.</li>
                            <li>Receive an immediate analysis of the environmental impact, including suggestions for eco-friendly modifications.</li>
                        </ol>
                    </p>

                    <h2>Key Benefits of Using This Tool</h2>
                    <ul>
                        <li>🌍 <strong>Eco-Friendly Insights</strong>: Understand the environmental implications of chemical reactions.</li>
                        <li>📉 <strong>Data-Driven Recommendations</strong>: Get suggestions for alternative pathways and catalysts to reduce impact.</li>
                        <li>🔍 Ideal for <strong>Environmental Scientists, Chemical Engineers, and Researchers</strong> focusing on sustainable practices.</li>
                    </ul>

                    <h3>Why Use an Environmental Impact Analyzer?</h3>
                    <p>
                        Evaluating the environmental impact of chemical processes is crucial for promoting sustainable practices.
                        This tool simplifies the analysis process, offering valuable insights and recommendations to reduce negative effects on the environment.
                    </p>

                    <h3>Explore More Sustainability Tools</h3>
                    <p>
                        Discover additional tools for carbon footprint analysis, waste management strategies, and renewable energy assessments to enhance your sustainability efforts.
                    </p>
                </div>


            </div>

            <Script src="https://cdnjs.cloudflare.com/ajax/libs/marked/2.1.3/marked.min.js"></Script>
            <Script src="/js/tools/environmental-impact-analyzer.js" />
        </>
    );
}
