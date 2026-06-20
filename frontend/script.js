const API_URL = "http://127.0.0.1:8000";

async function uploadFile() {

    const fileInput = document.getElementById("fileInput");

    if(fileInput.files.length === 0){
        alert("Select a file");
        return;
    }

    const formData = new FormData();

    formData.append(
        "file",
        fileInput.files[0]
    );

    document.getElementById("analysisResult").textContent =
        "Uploading document...";

    try{

        const response = await fetch(
            `${API_URL}/upload`,
            {
                method:"POST",
                body:formData
            }
        );

        const data = await response.json();

        document.getElementById("analysisResult").textContent =
            data.analysis || JSON.stringify(data,null,2);

    }
    catch(error){

        document.getElementById("analysisResult").textContent =
            error.message;
    }
}

async function askQuestion(){

    const question =
        document.getElementById("question").value;

    if(!question){
        alert("Enter a question");
        return;
    }

    document.getElementById("answerResult").textContent =
        "Searching...";

    try{

        const response = await fetch(
            `${API_URL}/ask?question=${encodeURIComponent(question)}`,
            {
                method:"POST"
            }
        );

        const data = await response.json();

        document.getElementById("answerResult").textContent =
            data.answer;

    }
    catch(error){

        document.getElementById("answerResult").textContent =
            error.message;
    }
}
function fillQuestion(text){

    document.getElementById("question").value = text;
}