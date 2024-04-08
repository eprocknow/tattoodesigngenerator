document.getElementById("promptForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var prompt = document.getElementById("prompt").value;
    generateDesign(prompt);
});

function generateDesign(prompt) {
    fetch('/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'prompt=' + encodeURIComponent(prompt),
    })
    .then(response => response.text())
    .then(data => {
        // Display the generated design on the website
        console.log("Generated design:", data);
        // Replace the following line with code to display the generated design on the website
        document.getElementById("generatedDesign").innerHTML = data;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
