async function skinvalo() {
    const reponse = await fetch("https://valorant-api.com/v1/weapons");
    const valorant = await reponse.json();
    return valorant
}

var weaponnames = [];

async function afficheNom() {
    const data = await skinvalo();
    for (let i = 0; i < data.data.length; i++) {
        const displayName = data.data[i].displayName;
        weaponnames.push(displayName);
        console.log(displayName)
    }
}
afficheNom();

const searchinputs = document.getElementsByClassName("search");
const suggestion = document.getElementsByClassName("recherche");

const searchinput = searchinputs[0];

searchinput.addEventListener("input", function () {
    const input = searchinput.value;

    const result = weaponnames.filter(weaponname => weaponname.toLocaleLowerCase().includes(input.toLocaleLowerCase()));

    
    suggestion[0].innerHTML = result.map((name) => `<p class="texte">${name}</p>`).join('');

    ajoutertexte()

    console.log(result);
})

function ajoutertexte(){
    const buttons = document.getElementsByClassName("texte")

    for(const button of buttons){
        console.log("button")
        button.addEventListener("mousedown",(event) =>{
            console.log('clicked')
            const text = event.target.innerText
            placeText(text)
            console.log(text);
        })
    }
}   

function placeText(text){
    const store = document.getElementsByClassName("stockimage")

    store[0].innerHTML += `<p>${text}</p>`
}

