const ATTACK_VALUE = 10;

let chossenMaxValue = 100;
let currentMosterHealth = chossenMaxValue;
let currentHealth = chossenMaxValue;


adjustHealthBars(chossenMaxValue);

function attackHandler() {
    const damage = dealMonsterDamage(ATTACK_VALUE);
    currentMosterHealth -= damage;
}


attackBtn.addEventListener('click', attackHandler);