let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let result = document.querySelector('.result');
let btns = document.querySelectorAll('.btn');
let strike = document.getElementById("strike");
let conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const ticTacToe = (element, index) => {
    element.value = currentPlayer;
    element.disabled = true;
    cells[index] = currentPlayer;
    currentPlayer = currentPlayer == 'X' ? 'O' : 'X';
    result.innerHTML = `Player ${currentPlayer} Turn`;

    for (let i = 0; i < conditions.length; i++) {
        let condition = conditions[i];
        let a = cells[condition[0]];
        let b = cells[condition[1]];
        let c = cells[condition[2]];

        if (a == '' || b == '' || c == '') {
            continue;
        }

        if ((a == b) && (b == c)) {
            switch((a == b) && (b == c)) {
                case i == 0:
                    strike.classList.add("strike-r1");
                    console.log(i)
                    break;
                case i == 1:
                    strike.classList.add("strike-r2");
                    console.log(i)
                    break;
                case i == 2:
                    strike.classList.add("strike-r3");
                    console.log(i)
                    break;
                case i == 3:
                    strike.classList.add("strike-c1");
                    console.log(i)
                    break;
                case i == 4:
                    strike.classList.add("strike-c2");
                    console.log(i)
                    break;
                case i == 5:
                    strike.classList.add("strike-c3");
                    console.log(i)
                    break;
                case i == 6:
                    strike.classList.add("strike-dlr");
                    console.log(i)
                    break;
                case i == 7:
                    strike.classList.add("strike-drl");
                    console.log(i)
                    break;                                              
            }

            result.innerHTML = `Player ${a} Won `;
            btns.forEach((btn) => btn.disabled = true);
        }
    }
};

function reset() {
    for (let i = 0; i <= 3; i++) {
        strike.classList.remove("strike-r1")
        strike.classList.remove("strike-r2")
        strike.classList.remove("strike-r3")
        strike.classList.remove("strike-c1")
        strike.classList.remove("strike-c2")
        strike.classList.remove("strike-c3")
        strike.classList.remove("strike-dlr")
        strike.classList.remove("strike-drl")
    }
    cells = ['', '', '', '', '', '', '', '', ''];
    btns.forEach((btn) => {
        btn.value = '';
    });
    currentPlayer = 'X';
    result.innerHTML = `Player X Turn`;
    btns.forEach((btn) => btn.disabled = false);
};

document.querySelector('#reset').addEventListener('click', reset);

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => ticTacToe(btn, i));
});
