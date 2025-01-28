document.getElementById('loadButton').addEventListener('click', function() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (!file) {
        alert('Please select a JSON file.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
        try {
            const jsonData = JSON.parse(event.target.result);
            displayData(jsonData);
        } catch (error) {
            alert('Error parsing JSON: ' + error.message);
        }
    };
    reader.readAsText(file);
});

function displayData(data) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = JSON.stringify(data, null, 2);
}