    const refs = {
    input: document.querySelector(`#name-input`),
    nameLabel: document.querySelector(`#name-output`),
};

refs.input.addEventListener("input", (event) =>{
    if (event.currentTarget.value === "") {
        refs.nameLabel.innerHTML = `Anonymous`;
    }
    else {
        refs.nameLabel.textContent = event.currentTarget.value;
    }
    });

//     const refs = {
//     input: document.querySelector(`input#name-input`),
//     nameLabel: document.querySelector(`span#name-output`),
// };

// refs.input.addEventListener("input", onInputChange);

// function onInputChange(event) {
//     if (event.currentTarget.value === "") {
//         refs.nameLabel.innerHTML = `Anonymous`;
//     }
//     else {
//         refs.nameLabel.textContent = event.currentTarget.value;
//     }
//     }



    // const refs = {
//     input: document.querySelector(`input#name-input`),
//     nameLabel: document.querySelector(`span#name-output`),
// };

// refs.input.addEventListener("input", onInputChange);

// function onInputChange(event) {

//     refs.nameLabel.textContent = event.currentTarget.value;
//     // refs.nameLabel.innerHTML = `Anonymous`; ?????
//     }



