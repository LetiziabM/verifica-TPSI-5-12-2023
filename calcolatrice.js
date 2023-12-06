let backBtn = document.querySelector('.container .back-btn');
let input = document.querySelector('.container .input-box .input-value');
let result = document.querySelector('.container .input-box .result');
let container = document.querySelector('.container');
let allBtns = document.querySelectorAll('.container .btn');
let flag = 0;
let backSpace = () => {
        if(input.value[input.value.length - 1] == '('){
                flag = 0;
        } else if(input.value[input.value.length - 1] == ')'){
                flag = 1;
        }
        input.value = input.value.substr(0, input.value.length - 1);
}


for (let item of allBtns) {
        item.addEventListener('click', (e) => {
                let btnText = e.target.innerHTML;
                if (btnText == '×') {
                        btnText = '*';
                }

                if (btnText == '÷') {
                        btnText = '/';
                }

                if(btnText == '( )' && flag == 0){
                        btnText = '(';
                        flag = 1;
                } else if(btnText == '( )' && flag == 1){
                        btnText = ')';
                        flag = 0;
                }

                input.value += btnText;
        })
}

let calculate = () => {
        result.value = eval(input.value);
        input.value = result.value;
}