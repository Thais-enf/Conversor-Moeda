const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-covert")
  const currencyvalueToConverted = document.querySelector(".currency-value")

const dolarToday = 5.6
const euroToday = 7.2
const libraToday = 6.63
const bitcoinToday = 359.101




if (currencySelect.value =="dolar"){
    currencyvalueToConverted.innerHTML = new Intl.NumberFormat("en-US",{
        style: "currency",
        currency:"USD"
    }).format(inputCurrencyValue/dolarToday)
}

if (currencySelect.value =="euro"){
    currencyvalueToConverted.innerHTML= new Intl.NumberFormat("de-DE",{
     style:"currency",
     currency:"EUR"   
    }).format(inputCurrencyValue/euroToday)
}

if (currencySelect.value =="libra"){
    currencyvalueToConverted.innerHTML = new Intl.NumberFormat("en-GB",{
        style: "currency",
        currency:"GBP"
    }).format(inputCurrencyValue/libraToday)
}

if (currencySelect.value =="bitcoin"){
    currencyvalueToConverted.innerHTML = new Intl.NumberFormat("en-BT",{
        style: "currency",
        currency:"BTC"
    }).format(inputCurrencyValue/bitcoinToday)
}



   currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
    style:"currency",
    currency:"BRL"   
   }).format(inputCurrencyValue)
}

function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar"){
        currencyName.innerHTML= "Dólar americano"
        currencyImage.src ="./dolar.png"
    }

    if (currencySelect.value == "euro"){
        currencyName.innerHTML= "Euro"
        currencyImage.src ="./euro.png"
    }

    if (currencySelect.value == "libra"){
        currencyName.innerHTML= "Libra"
        currencyImage.src ="./libra.png"
    }

    if (currencySelect.value == "bitcoin"){
        currencyName.innerHTML= "bitcoin"
        currencyImage.src ="./bitcoin.png"
    }

    convertValues()
}


currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click",convertValues)
