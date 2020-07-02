const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MOSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const MODE_ATTACK = 'ATTACK';
const MODE_STRONG_ATTACK = 'STRON_ATTACK'
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'STRONG_ATTACK';
const LOG_EVENT_MOSTER_ATTACK = 'MOSTER_ATTACK';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';
const LOG_EVENT_HEAL = 'HEAL';

const enteredValue = prompt('Maximum life for you and the monster?', '100');
let chossenMaxLife = parseInt(enteredValue);

let currentMosterHealth = chossenMaxLife;
let currentPlayerHealth = chossenMaxLife;
let hasBonusLife = true;
let battleLog = [];

if (isNaN(chossenMaxLife) || chossenMaxLife <= 0) {
    chossenMaxLife = 100;
}
adjustHealthBars(chossenMaxLife);

function attackMoster(mode = MODE_ATTACK) {
    if (isGameOver()) {
        return;
    }
    let maxDamage = ATTACK_VALUE;
    let logEvent = LOG_EVENT_PLAYER_ATTACK;
    if (mode === MODE_STRONG_ATTACK) {
        maxDamage = STRONG_ATTACK_VALUE;
        logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
    }
    const damage = dealMonsterDamage(maxDamage);
    currentMosterHealth -= damage;
    writeToLog(
        logEvent,
        damage,
        currentMosterHealth,
        currentPlayerHealth
    );
    endRound();
}

function attackPlayer() {
    const playerDamage = dealPlayerDamage(MOSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    writeToLog(
        LOG_EVENT_MOSTER_ATTACK,
        playerDamage,
        currentMosterHealth,
        currentPlayerHealth
    );
}


function attackHandler() {
    attackMoster(MODE_STRONG_ATTACK);
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
    writeToLog(
        LOG_EVENT_HEAL,
        healValue,
        currentMosterHealth,
        currentPlayerHealth
    );
    endRound();
}

function printLogHandler() {
    console.log(battleLog);
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
        writeToLog(
            LOG_EVENT_MOSTER_ATTACK,
            'Player Won',
            currentMosterHealth,
            currentPlayerHealth
        );
        reset();
    } else if (currentPlayerHealth <= 0 && currentMosterHealth > 0) {
        alert('You lost');
        writeToLog(
            LOG_EVENT_MOSTER_ATTACK,
            'Moster Won',
            currentMosterHealth,
            currentPlayerHealth
        );
        reset();
    } else if (currentPlayerHealth <= 0 && currentMosterHealth <= 0) {
        alert('You have a draw');
        writeToLog(
            LOG_EVENT_MOSTER_ATTACK,
            'A Draw',
            currentMosterHealth,
            currentPlayerHealth
        );
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

function writeToLog(event, value, mosterHealth, playerHealth) {
    let logEntry = {
        value: value,
        mosterHealth: mosterHealth,
        playerHealth: playerHealth
    };
    if (event === LOG_EVENT_GAME_OVER) {
        logEntry = {
            ...logEntry,
            event: 'Game Over'
        };
    } else if (event === LOG_EVENT_HEAL) {
        logEntry = {
            ...logEntry,
            event: 'Heal',
            target: 'Player'
        };
    } else if (event === LOG_EVENT_MOSTER_ATTACK) {
        logEntry = {
            ...logEntry,
            event: 'Moster Attack',
            target: 'Player'
        };
    } else if (event === LOG_EVENT_PLAYER_ATTACK) {
        logEntry = {
            ...logEntry,
            event: 'Player Attack',
            target: 'Moster'
        };
    } else if (event === LOG_EVENT_PLAYER_STRONG_ATTACK) {
        logEntry = {
            ...logEntry,
            event: 'Player Strong Attack',
            target: 'Moster'
        };
    }
    battleLog.push(logEntry);
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogHandler);