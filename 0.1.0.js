function compra (valor, convenio, cartao){

if(convenio && cartao){
let desconto = valor * 0.15
let calc = valor - desconto
return calc

}else if (convenio || cartao){
    let desconto = valor*0.1
    let calc = valor - desconto
    return calc
}else{
    return valor
}
}
    console.log("o valor da compra é: ",compra(100, true, false))