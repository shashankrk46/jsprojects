const currencyOne=document.getElementById('currency-one');
const amountOne=document.getElementById('amount-one');
const currencytwo=document.getElementById('currency-two');
const amounttwo=document.getElementById('amount-two');

const rateEl=document.getElementById('rate');
const swap=document.getElementById('swap')


// fetch exchange rate and update the dom
function calculate(){
  const curOne=currencyOne.value;
  const curTwo=currencytwo.value;
//   console.log(curOne,curTwo);
  fetch(`https://api.exchangeratesapi.io/latest?base=${curOne}`)
  .then(res=>res.json())
  .then(data=>{
    //   console.log(data)
      const rate=data.rates[curTwo]
      rateEl.innerHTML=`1 ${curOne}=${rate} ${curTwo}`;

      amounttwo.value=(amountOne.value*rate).toFixed(2)
  })
}

// event listners
currencyOne.addEventListener('change',calculate);
amountOne.addEventListener('input',calculate);
currencytwo.addEventListener('change',calculate);
amounttwo.addEventListener('input',calculate);

swap.addEventListener('click',()=>{
    const temp=currencyOne.value;
    currencyOne.value=currencytwo.value;
    currencytwo.value=temp;
    calculate();
})
calculate()