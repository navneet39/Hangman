const wordE1 = document.getElementById('word');
const wrongLettersE1 = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureParts= document.querySelectorAll(".figure-part");

const words = [
    'wares', 'soup', 'mount', 'extend', 'brown', 'expert', 'tired', 'humidity', 'backpack', 'crust', 
    'dent', 'market', 'knock', 'smite', 'windy', 'coin', 'throw', 'silence', 'bluff', 'downfall', 
    'climb', 'lying', 'weaver', 'snob', 'kickoff', 'match', 'quaker', 'foreman', 'excite', 'thinking', 
    'mend', 'allergen', 'pruning', 'coat', 'emerald', 'coherent', 'manic', 'multiple', 'square', 'funded', 
    'funnel', 'sailing', 'dream', 'mutation', 'strict', 'mystic', 'film', 'guide', 'strain', 'bishop', 
    'settle', 'plateau', 'emigrate', 'marching', 'optimal', 'medley', 'endanger', 'wick', 'condone', 
    'schema', 'rage', 'figure', 'plague', 'aloof', 'there', 'reusable', 'refinery', 'suffer', 'affirm', 
    'captive', 'flipping', 'prolong', 'main', 'coral', 'dinner', 'rabbit', 'chill', 'seed', 'born', 
    'shampoo', 'italian', 'giggle', 'roost', 'palm', 'globe', 'wise', 'grandson', 'running', 'sunlight', 
    'spending', 'crunch', 'tangle', 'forego', 'tailor', 'divinity', 'probe', 'bearded', 'premium', 
    'featured', 'serve', 'borrower', 'examine', 'legal', 'outlive', 'unnamed', 'unending', 'snow', 
    'whisper', 'bundle', 'bracket', 'deny', 'blurred', 'pentagon', 'reformed', 'polarity', 'jumping', 
    'gain', 'laundry', 'hobble', 'culture', 'whittle', 'docket', 'mayhem', 'build', 'peel', 'board', 
    'keen', 'glorious', 'singular', 'cavalry', 'present', 'cold', 'hook', 'salted', 'just', 'dumpling', 
    'glimmer', 'drowning', 'admiral', 'sketch', 'subject', 'upright', 'sunshine', 'slide', 'calamity', 
    'gurney', 'adult', 'adore', 'weld', 'masking', 'print', 'wishful', 'foyer', 'tofu', 'machete', 
    'diced', 'behemoth', 'rout', 'midwife', 'neglect', 'mass', 'game', 'stocking', 'folly', 'action', 
    'bubbling', 'scented', 'sprinter', 'bingo', 'egyptian', 'comedy', 'rung', 'outdated', 'radical', 
    'escalate', 'mutter', 'desert', 'memento', 'kayak', 'talon', 'portion', 'affirm', 'dashing', 
    'fare', 'battle', 'pupil', 'rite', 'smash', 'true', 'entrance', 'counting', 'peruse', 'dioxide', 
    'hermit', 'carving', 'backyard', 'homeless', 'medley', 'packet', 'tickle', 'coming', 'leave', 
    'swing', 'thicket', 'reserve', 'murder', 'costly', 'corduroy', 'bump', 'oncology', 'swatch', 
    'rundown', 'steal', 'teller', 'cable', 'oily', 'official', 'abyss', 'schism', 'failing', 'guru', 
    'trim', 'alfalfa', 'doubt', 'booming', 'bruised', 'playful', 'kicker', 'jockey', 'handmade', 
    'landfall', 'rhythm', 'keep', 'reassure', 'garland', 'sauna', 'idiom', 'fluent', 'lope', 'gland', 
    'amend', 'fashion', 'treaty', 'standing', 'current', 'sharpen', 'cinder', 'idealist', 'festive', 
    'frame', 'molten', 'sill', 'glisten', 'fearful', 'basement', 'minutia', 'coin', 'stick', 'featured', 
    'soot', 'static', 'crazed', 'upset', 'robotics', 'dwarf', 'shield', 'butler', 'stitch', 'stub', 
    'sabotage', 'parlor', 'prompt', 'heady', 'horn', 'bygone', 'rework', 'painful', 'composer', 
    'glance', 'acquit', 'eagle', 'solvent', 'backbone', 'smart', 'atlas', 'leap', 'danger', 'bruise', 
    'seminar', 'tinge', 'trip', 'narrow', 'while', 'jaguar', 'seminary', 'command', 'cassette', 
    'draw', 'anchovy', 'scream', 'blush', 'organic', 'applause', 'parallel', 'trolley', 'pathos', 
    'origin', 'hang', 'pungent', 'angular', 'stubble', 'painted', 'forward', 'saddle', 'muddy', 
    'orchid', 'prudence', 'disprove', 'yiddish', 'lobbying', 'neuron', 'tumor', 'haitian', 'swift', 
    'mantel', 'wardrobe', 'consist', 'storied', 'extreme', 'payback', 'control', 'dummy', 'influx', 
    'realtor', 'detach', 'flake', 'consign', 'adjunct', 'stylized', 'weep', 'prepare', 'pioneer', 
    'tail', 'platoon', 'exercise', 'dummy', 'clap', 'actor', 'spark', 'dope', 'phrase', 'welsh', 
    'wall', 'whine', 'fickle', 'wrong', 'stamina', 'dazed', 'cramp', 'filet', 'foresee', 'seller', 
    'award', 'mare', 'uncover', 'drowning', 'ease', 'buttery', 'luxury', 'bigotry', 'muddy', 'photon', 
    'snow', 'oppress', 'blessed', 'call', 'stain', 'amber', 'rental', 'nominee', 'township', 
    'adhesive', 'lengthy', 'swarm', 'court', 'baguette', 'leper', 'vital', 'push', 'digger', 
    'setback', 'accused', 'taker', 'genie', 'reverse', 'fake', 'widowed', 'renewed', 'goodness', 
    'featured', 'curse', 'shocked', 'shove', 'marked', 'interact', 'mane', 'hawk', 'kidnap', 
    'noble', 'proton', 'effort', 'patriot', 'showcase', 'parish', 'mosaic', 'coil', 'aide', 
    'breeder', 'concoct', 'pathway', 'hearing', 'bayou', 'regimen', 'drain', 'bereft', 'matte', 
    'bill', 'medal', 'prickly', 'sarcasm', 'stuffy', 'allege', 'monopoly', 'lighter', 'repair', 
    'worship', 'vent', 'hybrid', 'buffet', 'lively'

];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
const wrongLetters = [];

//Show hidden word
function displayWord(){
    wordE1.innerHTML = `
    ${selectedWord
    .split('')
    .map(
        letter =>`
        <span class="letter">
        ${correctLetters.includes(letter) ? letter : ''}
        </span>
        `
    )
    .join('')}
    `;

    const innerWord = wordE1.innerText.replace(/\n/g, '');

    if(innerWord === selectedWord){
        finalMessage.innerText = 'Congratulations! You won! 😃';
        popup.style.display= 'flex';
    }
}

// Update the wrong letters
function updateWrongLetterE1(){
    //Display wrong letters
    wrongLettersE1.innerHTML = `
    ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
    ${wrongLetters.map(letter => `<span>${letter}</span>`)}
    `;

    //Display parts
    figureParts.forEach((part,index) => {
        const errors = wrongLetters.length;

        if(index < errors) {
            part.style.display = 'block'
        }
        else{
            part.style.display = 'none';
        }
    });

    //Check if lost
    if(wrongLetters.length === figureParts.length){
        finalMessage.innerText = 'Unfortunately you lost. 😕';
        popup.style.display = 'flex';
    }
}

//Show notification
function showNotification(){
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
}

//Keydown letter press
window.addEventListener('keydown', e =>{
    if(e.keyCode >= 65 && e.keyCode <=90){
        const letter = e.key;

        if(selectedWord.includes(letter)){
            if(!correctLetters.includes(letter)){
                correctLetters.push(letter);

                displayWord();
            } else{
                showNotification();
            }
        } else{
            if(!wrongLetters.includes(letter)){
                wrongLetters.push(letter);

                updateWrongLetterE1();
            } else{
                showNotification();
            }
        }
    }
});

//Restart game and play again
playAgainBtn.addEventListener('click', () => {
    //Empty arrays
    correctLetters.splice(0);
    wrongLetters.splice(0);

    selectedWord = words[Math.floor(Math.random() * words.length)];

    displayWord();

    updateWrongLetterE1();

    popup.style.display = 'none';
});

displayWord();

