document.getElementById("summarize-button").addEventListener("click", async () => {
    const content = document.getElementById("content").value;
    const resultArea = document.getElementById("summary-result");

    // Check if content is empty
    if (!content) {
        resultArea.textContent = "Please provide some text to summarize.";
        return;
    }

    // Clear previous result
    resultArea.textContent = "Processing...";

    try {
        // Send request to the API
        const response = await fetch("https://tools-api-alpha.vercel.app/api/pargraph/summery", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ content })
        });

        // Check if the response is OK
        if (!response.ok) {
            const errorData = await response.json();
            if (errorData.error) {
                resultArea.textContent = `${errorData.error}: ${errorData.message}`;
            } else {
                resultArea.textContent = "An error occurred. Please try again later.";
            }
            return;
        }

        // Parse the response
        const data = await response.json();
        if (data.response) {
            resultArea.textContent = data.response;
        } else {
            resultArea.textContent = "Unexpected response format. Please try again later.";
        }
    } catch (error) {
        console.error("Error calling the summarizer API:", error);
        resultArea.textContent = "An error occurred while processing your request. Please try again later.";
    }
});