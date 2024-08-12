//-----------------Odd Even number-----------------------------
const tbuser = document.getElementById("tbuser");
const result = document.getElementById("result");
const validt1=document.getElementById('validt');
function MyFunction(){
            let num = tbuser.value;
            if(!num){
                validt1.textContent="The field cannot be empty."
                result.textContent=" ";
            }
            else if(num % 2 == 0)
            {
                result.textContent = "The number is Even";
                validt1.textContent=" ";
            }
            else
            {
                result.textContent="The number is Odd";
                validt1.textContent=" ";
            }
        }
//-----------------------------reverse of a number---------------------------------
        const revser = document.getElementById("rev"); 
        const result11 = document.getElementById("result1");
        const validta = document.getElementById('validt1');
        function reverse() {
            let num = revser.value;

            if (!num) {
                validta.textContent = "The field cannot be empty.";
                result11.textContent = '';
            } else {
                let reversed = num.toString().split("").reverse().join("");
                result11.textContent = "The reverse of the number is " + reversed;
                validta.textContent = '';
            }
        }
      
//---------------------------prime number--------------------------------------------
        const primenum=document.getElementById("prime");
        const result33=document.getElementById("result3");
        const validtb=document.getElementById('validt2');
         function PrimeNumber(){
            let num = primenum.value;
            if(!num){
                validtb.textContent="The field cannot be empty.";
                result33.textContent=" ";
            }
            else
            {
            let c=0;
            for(let i=1;i<=num;i++)
                {
                if(num%i==0){
                    c++;
                }
                }
            if(c==2){
                result33.textContent="The number is Prime";
                validtb.textContent="";
            }
            else{
                result33.textContent="The number is not Prime";
                validtb.textContent="";
                }
            }
         }
//---------------------------factorial of a number-----------------------------------------------
         const fact=document.getElementById("fact");
         const result44=document.getElementById("result4");
         const validtc=document.getElementById('validt3');
         function factorial()
         {
            let num = fact.value;
            if(!num)
            {
                validtc.textContent="The field cannot be empty.";
                result44.textContent=' ';
                }
                else
                {
                if(num==0)
                {
                    result44.textContent="The factorial of the number is 1";
                    validtc.textContent=' ';
                }
                else if(num==1)
                {
                    result44.textContent="The factorial of the number is 1";
                    validtc.textContent=' ';
                 }
                else if(num>2)
                {
                    let fact=1;
                    for(let i=1;i<=num;i++)
                    {
                    fact=fact*i;
                    }
                result44.textContent='The factorial of the number is ' +fact;
                validtc.textContent=' ';
                }
            }
        }
//------------------------------armstrong number---------------------------------------
    const arm = document.getElementById("arm");
    const result55 = document.getElementById("result5");
    const validtd = document.getElementById('validt4');
    function armstrong() 
    {
        let num = parseInt(arm.value);
        if(!num){
            validtd.textContent="The field cannot be empty.";
            result55.textContent=' ';
        }
        else
        {
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
                validtd.textContent=' ';
            } else 
            {
                result55.textContent = "The number is not Armstrong";
                validtd.textContent=' ';
            }
        }
    }
    
//-----------------------fib series---------------------------------------------
    const result66 = document.getElementById("result6");
    function fib() {
        let a = 0, b = 1;
        let sequence = "";
        for (let i = 0; i <= 30; i++) {
            sequence += a + ", ";
            let temp = a + b;
            a = b;
            b = temp;
        }
        result66.textContent = sequence;
    }
    function cler(){
        result66.textContent = '';
    }
//------------------------------------------------------------------------------------
    const uppers = document.getElementById('upper');
    const resus = document.getElementById('r1');
    const valilde=document.getElementById('validt5');
    function UpperCase() {
        const text1=uppers.value;
        if(text1==""){
            resus.textContent="";
            valilde.textContent="Please enter a string";
        }
        else
        {
            resus.textContent=text1.toUpperCase();
            valilde.textContent=' ';
        }
    }

    const revstr=document.getElementById('str1');
    const resstr1=document.getElementById('r2');
    const valid5=document.getElementById('validstr1');
    function revString()
    {
        const text2=revstr.value;
        if(text2=="")
        {
            resstr1.textContent="";
            valid5.textContent='The field cannot be empty.'
        }
        else
        {
            console.log(text2);
            let sb="";
            for(var i=text2.length;i>=0;i--){
            sb=sb+text2.charAt(i);
            }
            resstr1.textContent=sb;
            valid5.textContent=" ";
        }
    }

    