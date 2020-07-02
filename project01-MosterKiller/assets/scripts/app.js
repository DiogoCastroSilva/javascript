const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MOSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

let currentMosterHealth = chossenMaxLife;
let currentPlayerHealth = chossenMaxLife;
let hasBonusLife = true;

const enteredValue = prompt('Maximum life for you and the monster?', '100');
let chossenMaxLife = parseInt(enteredValue);

if (isNaN(chossenMaxLife) || chossenMaxLife <= 0) {
    chossenMaxLife = 100;
}
adjustHealthBars(chossenMaxLife);

function attackMoster(mode = 'ATTACK') {
    if (isGameOver()) {
        return;
    }
    let maxDamage = ATTACK_VALUE;
    if (mode === 'STRONG_ATTACK') {
        maxDamage = STRONG_ATTACK_VALUE;
    }
    const damage = dealMonsterDamage(maxDamage);
    currentMosterHealth -= damage;
    endRound();
}

function attackPlayer() {
    const playerDamage = dealPlayerDamage(MOSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
}


function attackHandler() {
    attackMoster('STRONG_ATTACK');
}

function strongAttackHandler() {
    attackMoster();
}

function healPlayerHandler() {
    isGameOver();
    let healValue = HEAL_VALUE;
    if (currentPlayerHealth >= chossenMaxLife - HEAL_VALUE) {
        healValue = chossenMaxLife - currentPlayerHealth;
    }
    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;
    endRound();
}




function reset() {
    currentPlayerHealth = chossenMaxLife;
    currentMosterHealth = chossenMaxLife;
    resetGame(chossenMaxLife);
}

function isGameOver() {
    if (currentPlayerHealth <= 0 || currentMosterHealth <= 0) {
        return true;
    } else {
        return false;
    }
}

function endRound() {
    const initialPlayerHealth = currentPlayerHealth;
    attackPlayer();
    bonusLife(initialPlayerHealth);
    if (currentMosterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You won');
        reset();
    } else if (currentPlayerHealth <= 0 && currentMosterHealth > 0) {
        alert('You lost');
        reset();
    } else if (currentPlayerHealth <= 0 && currentMosterHealth <= 0) {
        alert('You have a draw');
        reset();
    }
}

function bonusLife(initialPlayerHealth) {
    if (currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        alert('You would be death but the bonus life saved you!');
        setPlayerHealth(initialPlayerHealth);
    }
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);