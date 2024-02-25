
// 1 წინასწარ გვაქვს სიტვების ერეი
// პროგრამის გაშვების მომენტში რენდომად ვირჩევთ ერთს
// პრომტის მეშვეობით შემოგვაქვს ასოები, სანამ ყველას არ გამოვიცნობთ ან სანამ 10 ცდა არ ამოიწურება.
// პრომპტში ტირეებით უნდა ჩანდეს გამოცნობილი სიმმბოლოები ან ტირეები სიტყვის შესაბამისად.
// თუ ერთზე მეტი სიმბოლო შემოიყვანა, ვეუბნებით რომ არასწორი მნიშვნელობა შემოიყვანა და იტერაციას ვსკიპავთ

// ერეი, რომელშიც ვინახავთ სიტყვებს

const words = ['natia', 'giorgi', 'nika', 'zura', 'nini', 'tiko', 'lasha'];

// პროგრამა ირჩევს რენდომ სიტყვას ამ ერეიდან

const randomWord = words[Math.floor(Math.random() * words.length)];

// პროგრამის შერჩეულ სიტყვას გამოვსახავ ტირეებით და ვინახავ ერეიში

let wordToGuessAsArray = randomWord.split('').map(() => '_');

//მცდელობების რაოდენობა

let countAttempts = 10;



while(true) {

    //ამ ფრომფთის დახმარებით მომხმარებელს ვაწერინებთ ასოებს სიტყვის გამოსაცნობად

    let charToGuess = prompt(`Guess the world ${wordToGuessAsArray.join(' ')}, attempts remainig ${countAttempts}`);

    // ერთჯერადად გამოცნობილი სიმბოლოების რაოდენობა
    let found = 0;

    // თუ მომხმარებელი არაფერს შემოიყვანს ან 1-ზე მეტ ასოს ჩაწერს, შესაბამი გაფრთხილებას მიიღებს

    if (!charToGuess || charToGuess?.length !== 1) {
        console.log('Wrong Value, pls try again');
        continue;
    }

    //თუ მომხმარებლის შემოყვანილი ასო მოიძებნება შერჩეულ სიტყვაში, აღნიშნული ასო ჩაიწერება შესაბამის ადგილას

    for (let i = 0; i < randomWord.length; i++) {
        if (randomWord.charAt(i) === charToGuess) {
            wordToGuessAsArray[i] = charToGuess;
            found++;
        }
    }

    // თუ არასწორს ჩაწერს, მცდელობები დააკლდება

    if (!found) {   
        countAttempts--;
        console.log("Wrong guess!")
    } else {
        console.log("Wuhuuu!")
    }

    // გვისახავს გამოცნობილ ასოებს და დარჩენილ მცდელობებს

    console.log('Your guess:',  wordToGuessAsArray.join(' '), '\nAttempts left:', countAttempts);

    // თუ მცდელობები ამოიწურება, ამოხტება წაგების ალერტი

    if (!countAttempts) {
        alert('You Lose!');
        break;
    }

    // თუ მომხმარებელს აღარ დარჩება დეფისი სიტყვაში, პროგრამა მიხვდება რომ სიტყვა გამოცნობილია და ამოვადრება შესაბამისი შეტყობინება

    if (!wordToGuessAsArray.includes('_')) {
        alert('You Win!!')
        break
    }

}