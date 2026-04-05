document.getElementById("generate").addEventListener("click", updateCard);

function updateCard(){
    const name = document.getElementById("name").value;
    const mana = document.getElementById("mana").value;
    const type = document.getElementById("type").value;
    const desc = document.getElementById("description").value;
    const rarity = document.getElementById("rarity").value;
    const stats = document.getElementById("stats").value;


    const card = {
        name,mana,type,desc,rarity,stats
    };
    displayCard(card);
}
function displayCard(card) {
    document.getElementById("cardName").textContent = card.name
    document.getElementById("cardType").textContent = card.type
    document.getElementById("cardDesc").textContent = card.desc
    document.getElementById("cardStats").textContent = card.stats
    document.getElementById("cardRarity").textContent = card.rarity

    renderManaSymbols(card.mana);
    applyCardFrame(card.mana);
}
function applyCardFrame(mana){
    const card = document.getElementById("card");
    card.className = "card";
    let colors= [];

    if (mana.includes("W")) colors.push("white");
    if (mana.includes("U")) colors.push("blue");
    if (mana.includes("B")) colors.push("black");
    if (mana.includes("R")) colors.push("red");
    if (mana.includes("G")) colors.push("green");

    if (colors.length === 0){
        card.classList.add("colorless");
    } else if (colors.length === 1){
        card.classList.add(colors[0]);
    } else {
        card.classList.add("multi")
    }
}

function renderManaSymbols(mana) {
    const container = document.getElementById("cardMana");
    container.innerHTML = "";
    const symbols = mana.match(/\d+|[WUBRG]/gi)||[];
    symbols.forEach(symbol => {
        const img = document.createElement("img");
        if (!isNaN(symbol)){
           const span = document.createElement("span");
           span.textContent = symbol;
           span.classList.add("mana-number");
           container.appendChild(span);
        }else {
            const img = document.createElement("img");
            img.src = `mana/${symbol.toUpperCase()}.png`;
            img.alt =symbol.toUpperCase();
            container.appendChild(img)
        }
    })
}