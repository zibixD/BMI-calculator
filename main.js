window.addEventListener("load", () => {
    let button = document.querySelector("#submitBtn");

    button.addEventListener("click", calculateBMI)
});

const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");

const calculateBMI = () => {
    let height = parseInt(document.querySelector('#height').value)
    let weight = parseInt(document.querySelector('#weight').value)

    if(height == "" || isNaN(height)){
        alert("Wprowadź poprawne wartości")
    }
    else if(weight === "" || isNaN(weight)){
        alert("Wprowadź poprawne wartości")
    }
    else{
        let bmi = (weight / ((height * height) / 10000)).toFixed(2);
            if(bmi < 16){
                setTimeout(colorHandler, 3000)
                one.style.backgroundColor = "#2942c2"
            }
            else if(bmi >= 16 && bmi < 17){
                setTimeout(colorHandler, 3000)
                two.style.backgroundColor = "#3265db"
            }
            else if(bmi >= 17 && bmi < 18.5){
                setTimeout(colorHandler, 3000)
                three.style.backgroundColor = "#29b387"
            }
            else if(bmi >= 18.5 && bmi < 25){
                setTimeout(colorHandler, 3000)
                four.style.backgroundColor = "#1fcc5b"
            }
            else if(bmi >= 25 && bmi < 30){
                setTimeout(colorHandler, 3000)
                five.style.backgroundColor = "#cfe031"
            }
            else if(bmi >= 30 && bmi < 35){
                setTimeout(colorHandler, 3000)
                six.style.backgroundColor = "#ba921a"
            }
            else if(bmi >= 35 && bmi < 40){
                setTimeout(colorHandler, 3000)
                seven.style.backgroundColor = "#b33617"
            }
            else{
                setTimeout(colorHandler, 3000)
                eight.style.backgroundColor = "#9e0e0e"
            }
    }
}

const colorHandler = () => {
    one.style.backgroundColor = "white"
    two.style.backgroundColor = "white"
    three.style.backgroundColor = "white"
    four.style.backgroundColor = "white"
    five.style.backgroundColor = "white"
    six.style.backgroundColor = "white"
    seven.style.backgroundColor = "white"
    eight.style.backgroundColor = "white"
}





