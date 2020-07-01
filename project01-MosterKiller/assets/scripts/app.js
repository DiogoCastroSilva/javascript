const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MOSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

let chossenMaxLife = 100;
let currentMosterHealth = chossenMaxValue;
let currentPlayerHealth = chossenMaxValue;


adjustHealthBars(chossenMaxLife);

function attackMoster(mode = 'ATTACK') {
    if (isGameOver()) {
        return;
    }
    let maxDamage = ATTACK_VALUE;
    if (mode === 'STRONG_ATTACK') {
        maxDamage = STRONG_ATTACK_VALUE;
    }
    const damage = dealMonsterDamage(ATTACK_VALUE);
    currentMosterHealth -= damage;
    mosterAttack();
    endRound();
}

function attackHandler() {
    attackMoster('STRONG_ATTACK');
}

function strongAttackHandler() {
    attackMoster();
}

function mosterAttack() {
    const playerDamage = dealPlayerDamage(MOSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
}

function healPlayerHandler() {
    isGameOver();
    let healValue = HEAL_VALUE;
    if (currentPlayerHealth >= chossenMaxLife - HEAL_VALUE) {
        healValue = chossenMaxLife - currentPlayerHealth;
    }
    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;
    mosterAttack();
    endRound();
}




function isGameOver() {
    if (currentPlayerHealth <= 0 || currentMosterHealth <= 0) {
        return true;
    } else {
        return false;
    }
}

function endRound() {
    if (currentMosterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You won');
    } else if (currentPlayerHealth <= 0 && currentMosterHealth > 0) {
        alert('You lost');
    } else if (currentPlayerHealth <= 0 && currentMosterHealth <= 0) {
        alert('You have a draw');
    }
}


attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);