let div=document.createElement("div");
div.setAttribute("class","main1");


let formgroup=document.createElement("div");
formgroup.setAttribute("class","form-group");

let head=document.createElement("h1")
head.innerHTML="NATIONALITY";

let paragraph=document.createElement("p");
paragraph.innerHTML=`<span>Search for Nationality based on names</span>`


let input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("class","form-control");
input.setAttribute("id","main");
input.setAttribute("placeholder","Name");

 
let div1=document.createElement("div");
div1.setAttribute("class","input-group-append");

let button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="Search";
button.addEventListener("click",foo);

let name1=document.createElement("div");
name1.setAttribute("id","name");
name1.style.marginTop="25px";
name1.style.color="black";
name1.style.fontSize="20px"
name1.style.fontWeight="600";
name1.style.fontFamily="'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";



let countryname1=document.createElement("div");
countryname1.setAttribute("id","countryname");
countryname1.style.color="black";
countryname1.style.marginTop="2px";
countryname1.style.textAlign="center";
countryname1.style.fontSize="20px"
countryname1.style.fontWeight="600";
countryname1.style.fontFamily="'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";


let probabilityvalue1=document.createElement("div")
probabilityvalue1.setAttribute("id","probabilityvalue");
probabilityvalue1.style.color="black";
probabilityvalue1.style.marginLeft="50px";
probabilityvalue1.style.marginTop="2px";
probabilityvalue1.style.fontSize="20px";
probabilityvalue1.style.fontWeight="600";
probabilityvalue1.style.fontFamily="'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";


let countryname2=document.createElement("div");
countryname2.setAttribute("id","countryname");
countryname2.style.color="black";
countryname2.style.textAlign="center";
countryname2.style.marginTop="2px";
countryname2.style.marginLeft="3px";
countryname2.style.fontSize="20px";
countryname2.style.fontWeight="600";
countryname2.style.fontFamily="'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";


let probabilityvalue2=document.createElement("div")
probabilityvalue2.setAttribute("id","probabilityvalue");
probabilityvalue2.style.color="black";
probabilityvalue2.style.marginLeft="50px";
probabilityvalue2.style.marginTop="2px";
probabilityvalue2.style.fontSize="20px";
probabilityvalue2.style.fontWeight="600";
probabilityvalue2.style.fontFamily="'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"

formgroup.append(head,paragraph,input,div1,button,name1,countryname1,probabilityvalue1,countryname2,probabilityvalue2);


div.append(formgroup);
document.body.append(div);


async function foo(){
try {
let name=document.getElementById("main").value;
console.log(name);
let res=await fetch(`https://api.nationalize.io?name=${name}`);
let result= await res.json();
console.log(result.name);
console.log(result.country[0].country_id);
console.log(result.country[0].probability);
console.log(result.country[1].country_id);
console.log(result.country[1].probability);
name1.innerHTML=`Name : <mark> ${result.name}</mark>`;
countryname1.innerHTML=`Country name : ${result.country[0].country_id}`;
probabilityvalue1.innerHTML= `Probability value : ${result.country[0].probability}`;
countryname2.innerHTML=`Country name : ${result.country[1].country_id}`;
probabilityvalue2.innerHTML= `Probability value : ${result.country[1].probability}`;
} catch (error) {
  console.log(error);
}

}
