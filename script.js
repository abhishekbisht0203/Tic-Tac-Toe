let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");

let turnO = true;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6]
    [0, 4, 8]
    [1, 4, 7]
    [2, 5, 8]
    [2, 4, 6]
    [3, 4, 5]
    [6, 7, 8]
];

function checkWinner() {
    for (const pattern of winpatterns) {
        const [a, b, c] = pattern;
        if (boxes[a].innerText && boxes[a].innerText === boxes[b].innerText && boxes[a].innerText === boxes[c].innerText) {
            return boxes[a].innerText;
        }
    }
    return null;
}

function handleClick(event) {
    const box = event.target;
    if (box.innerText) return;  // Ignore if box is already filled
    if (turnO) {
        box.innerText = "O";
    } else {
        box.innerText = "X";
    }
    turnO = !turnO;

    const winner = checkWinner();
    if (winner) {
        setTimeout(() => alert(`${winner} wins!`), 100);
        boxes.forEach(box => box.removeEventListener('click', handleClick)); // Disable further clicks
    }
}

boxes.forEach(box => {
    box.addEventListener('click', handleClick);
});

resetbtn.addEventListener('click', () => {
    boxes.forEach(box => {
        box.innerText = "";
        box.addEventListener('click', handleClick); // Re-enable clicks
    });
    turnO = true;
});
