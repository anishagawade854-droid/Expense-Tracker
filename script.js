let balance=0

function addExpense(){

let title=
document.getElementById("title").value

let amount=
Number(
document.getElementById("amount").value
)

if(title==""||amount<=0){
return
}

balance+=amount

document.getElementById(
"balance"
).innerText=balance

document.getElementById(
"list"
).innerHTML+=

`
<div class="item">

${title}

₹${amount}

</div>
`

document.getElementById(
"title"
).value=""

document.getElementById(
"amount"
).value=""
}