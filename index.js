
function funcaoSomar(){
    var tn1 = document.getElementById("txtn1")
    var tn2 = document.getElementById("txtn2")
    var res = document.getElementById("res")
    
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    res.innerText =  `A soma entre ${n1} e ${n2} e igual a = ${s} `
    console.log("cliclou")

}

function funcaoSubtrair(){
    var tn1 = document.getElementById("txtn1")
    var tn2 = document.getElementById("txtn2")
    var res = document.getElementById("res")
    
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 - n2
    res.innerText =  `A soma entre ${n1} e ${n2} e igual a = ${s} `
    console.log("cliclou")

}

function funcaoMultiplicacao(){
    var tn1 = document.getElementById("txtn1")
    var tn2 = document.getElementById("txtn2")
    var res = document.getElementById("res")
    
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 * n2
    res.innerText =  `A soma entre ${n1} e ${n2} e igual a = ${s} `
    console.log("cliclou")

}

function funcaoDivisao(){
    var tn1 = document.getElementById("txtn1")
    var tn2 = document.getElementById("txtn2")
    var res = document.getElementById("res")
    
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 / n2
    res.innerText =  `A soma entre ${n1} e ${n2} e igual a = ${s} `
    console.log("cliclou")

}

function viraPreto(){
    let div = document.getElementById("somar")
    div.style.background = "black";
}

function viraVermelho(){
    let div = document.getElementById("somar")
    div.style.background = "red";
}