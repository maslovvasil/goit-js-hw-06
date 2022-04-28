
const inputRangeRef = document.querySelector("#font-size-control");
const inputTextRef = document.querySelector("#text");



const handleInput = () => {
  inputTextRef.style.fontSize = `${inputRangeRef.value}px`;
};

inputRangeRef.addEventListener("input", handleInput);



// const refs = {
//    input: document.getElementById(`input#font-size-control`),
//    span: document.getElementById(`span#text`),
// }

// refs.input.addEventListener("input", handleInputRange);

// function handleInputRange(event) {
//   refs.span.style.fontSize = event.currentTarget.value + "px";
// }
