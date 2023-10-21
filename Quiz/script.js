const questions=[{
    'que':'What is the capital of Lucknow?',
    'a':'Uttarakhand',
    'b':'Uttar Pradesh',
    'c':'China',
    'd':'Bihar',
    'correct' :'b'

},
{
    'que':'What is the currency of India?',
    'a':'Rupee',
    'b':'Dirham',
    'c':'Peso',
    'd':'Rubler',
    'correct' :'a'
},
{


'que':'Which animal is known as the ship of the desert?',
'a':'Dog',
'b':'Cow',
'c':'Camel',
'd':'Buffalo',
'correct' :'c'
},
{
'que':'How many consonants are there in English Alphabet?',
'a':'11',
'b':'16',
'c':'21',
'd':'24',
'correct' :'c'

}
]

let index=0;
let total= questions.length;
let right=0;
    wrong=0;
const quesBox=document.getElementById("quesBox")
const optionInputs=document.querySelectorAll('.options')
const loadQuestion= () =>
{
    if(index==total)
    {
        return endQuiz()
    }
    reset();
    const data=questions[index]
    quesBox.innerText=`${index+1} ${data.que}`;
    optionInputs[0].nextElementSibling.innerText=data.a;
    optionInputs[1].nextElementSibling.innerText=data.b;
    optionInputs[2].nextElementSibling.innerText=data.c;
    optionInputs[3].nextElementSibling.innerText=data.d;
}
const submitQuiz=()=>
{
    const data=questions[index];
    const ans=getAnswer()
    console.log(ans,data.correct)
    if(ans===data.correct)
    {
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
const getAnswer=() =>
{
    let answer;
    optionInputs.forEach(
        (input)=>
        {
            if(input.checked)
            {
            answer= input.value;
        }
    }
    )
    return answer;
}
const reset=() =>
{
    optionInputs.forEach(
        (input)=>
        {
            input.checked=false;
        }
)}

const endQuiz =() =>
{
document.getElementById("box").innerHTML=`
<div style="text-align:center">
<h3>Thankyou for playing</h3>
<h2>${right} / ${total} are correct </h2>
</div>
`

}

loadQuestion();
