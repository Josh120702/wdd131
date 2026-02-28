const character = {
    name: "Snortblat",
    class: "Warrior",
    level: 1,
    health: 100,
    image: "snortleblat.webp",

    attacked: function() {
        if (this.health <= 0) return;

        this.health -= 20;

        if (this.health <= 0) {
            this.health = 0;
            document.getElementById("message").textContent =
            this.name + " "+"has died!";
        }
        else {
            document.getElementById("message").textContent =
            this.name + " "+"was attacked!";
        }
        updateUI();
    },

    levelUp: function() {
        if (this.health <= 0) return;

        this.level += 1;
        this.health += 10;
        document.getElementById("message").textContent =
        this.name + " "+"leveled up!";
        updateUI();
    }
    
};
window.onload = function(){
    updateUI();
}
function updateUI(){
    document.getElementById("charName").textContent = character.name;
    document.getElementById("charClass").textContent = character.class;
    document.getElementById("charLevel").textContent = character.level;
    document.getElementById("charHealth").textContent = character.health;
}
document.getElementById("attackBtn").addEventListener("click", function (){
        character.attacked();
    });
document.getElementById("levelBtn").addEventListener("click", function (){
        character.levelUp();
    });