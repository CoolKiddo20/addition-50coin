const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 4; 

while (attempts > 0) {
    const userGuess = prompt(`1 dan 100 gacha bo'lgan raqamni toping (urinishlar soni ${attempts} ta):`);
    const guessNumber = parseInt(userGuess, 10);

    if (isNaN(guessNumber)) {
        alert("Iltimos, raqam kiriting.");
        continue;
    }

    if (guessNumber === randomNumber) {
        alert("Tabriklaymiz! Siz to'g'ri topdingiz.");
        break;
    } else if (guessNumber < randomNumber) {
        attempts--;
        if (attempts > 0) {
            alert(`Kichik son yozdingiz. Urinishlar soni ${attempts} ta.`);
        }
    } else {
        attempts--;
        if (attempts > 0) {
            alert(`Katta son yozdingiz. Urinishlar soni ${attempts} ta.`);
        }
    }

    if (attempts === 0) {
        alert(`Afsuski, imkoniyatlaringiz tugadi. To'g'ri javob ${randomNumber} edi.`);
    }
}