
const tbuser = document.getElementById("tbuser");
const btn = document.getElementById("btn");
const result = document.getElementById("result");
function MyFunction(){
            let num = tbuser.value;
            if(num % 2 == 0)
            {
                result.textContent = "The number is Even";
            }
            else
            {
                result.textContent="The number is Odd";
            }
        }
        btn.addEventListener('click',MyFunction);
//-------------------------------------------------------------------------
const revser = document.getElementById("rev");
const btn11 = document.getElementById("btn1");
const result11 = document.getElementById("result1");
function reverse(){
            let num = revser.value;
            let reversed = num.toString().split("").reverse().join("");
            result11.textContent = "The reverse of the number is " + reversed;
        }
        btn11.addEventListener('click',reverse);
//-----------------------------------------------------------------------------
        const primenum=document.getElementById("prime");
        const btn33=document.getElementById("btn3");
        const result33=document.getElementById("result3");
         function PrimeNumber(){
            let num = primenum.value;
            let c=0;
            for(let i=1;i<=num;i++){
                if(num%i==0){
                    c++;
                }
            }
            if(c==2){
                result33.textContent="The number is Prime";
            }
            else{
                result33.textContent="The number is not Prime";
            }
         }
         btn33.addEventListener('click',PrimeNumber);
//--------------------------------------------------------------------------------------
         const fact=document.getElementById("fact");
         const btn44=document.getElementById("btn4");
         const result44=document.getElementById("result4");
         function factorial()
         {
            let num = fact.value;
            if(num==0)
            {
                result44.textContent="The factorial of the number is 1";
            }
            else if(num==1)
            {
                result44.textContent="The factorial of the number is 1";
            }
            else if(num>2)
            {
                let fact=1;
                for(let i=1;i<=num;i++)
                {
                fact=fact*i;
                }
            result44.textContent='The factorial of the number is ' +fact;
            }
        }
    btn44.addEventListener('click',factorial);
//---------------------------------------------------------------------------
    const arm = document.getElementById("arm");
    const btn55 = document.getElementById("btn5");
    const result55 = document.getElementById("result5");

    function armstrong() 
    {
        let num = parseInt(arm.value); // Convert input to an integer
        let sum = 0;
        let temp = num;
        let c = 0;
        while (temp > 0) 
        {
            temp = Math.floor(temp / 10);
            c++;
        }
        temp = num;
        while (temp > 0) 
        {
            let rem = temp % 10;
            sum += Math.pow(rem, c);
            temp = Math.floor(temp / 10);
        }
        if (sum === num) 
        {
            result55.textContent = "The number is Armstrong";
        } else 
        {
            result55.textContent = "The number is not Armstrong";
        }
    }
    btn55.addEventListener('click', armstrong);
