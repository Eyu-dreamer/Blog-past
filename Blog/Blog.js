let formElement = document.querySelector("form");
let displayBox = document.querySelector("#container");
let titleElement = document.querySelector("input");
let textareaElement = document.querySelector("textarea");

// Function to handle submit event
function handleSubmit(event) {
    event.preventDefault();

    let title = titleElement.value.trim();
    let blog = textareaElement.value.trim();

    if (!title || !blog) {
        // Fixed logical error
        alert("Please enter both a title and content!");
        return;
    }

    let postContainer = document.createElement("div");
    postContainer.classList.add("post"); // Optional: For styling

    let h1 = document.createElement("h1");
    let p = document.createElement("p");
    let timestamp = document.createElement("small");

    h1.textContent = title;
    p.textContent = blog;
    timestamp.textContent = `Posted on: ${new Date().toLocaleString()}`;

    postContainer.append(h1, p, timestamp);
    displayBox.textContent = ""; // Clears previous post before adding new one
    displayBox.appendChild(postContainer);

    formElement.reset();
}

formElement.addEventListener("submit", handleSubmit);