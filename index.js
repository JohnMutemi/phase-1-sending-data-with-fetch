function submitData(userName, userEmail) {
    const userDetails = {
        name: userName,
        email: userEmail
    };
    
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(userDetails),
    };
    
    // Return the fetch chain here
    return fetch("http://localhost:3000/users", configurationObject)
        .then(response => response.json())
        .then(data => {
            const id = data.id;
            const element = document.createElement("div");
            document.body.append(element);
            element.append(id);
        })
        
        .catch(error => {
            // Catching and handling errors
            const errorMessage = document.createElement("div");
             // Displaying the error message
            errorMessage.textContent = error.message;
            document.body.appendChild(errorMessage);
        });
        
}
