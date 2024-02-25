// ვქმნი ორმაგ ერეის, რომ წინასწარ შევინახო მო,ხარებლის ინფორმაცია
let users = [
  ["ნათია", "1234", 123456, 1000],
  ["გიორგი", "2345", 234567, 2000],
];

let selectUserNumber;
let selectPin;
let atm;
let selectedUser;
runProgram();

// ეს არის ნახევრად რეკურსოული ფუნქცია, რომელიც პროგრამის წარმატების დასრულების შემდეგ იუზერის სურვილის შემთხვევაში გამოიძახებს საკუთარ თავს
function runProgram() {
  // მომხმარებელს ვაძლევთ საშუალებას რომ აირჩიოს იუზერი, არასწორი ინფო სშემოყვანის შემთხვევაში ამოდი შესაბამისი ალერტი. 
  while (true) {
    selectUserNumber = parseInt(
      prompt("გთხოვთ აირჩიოთ მომხმარებელი: \n1. ნათია\n2. გიორგი")
    );

    if (!isNaN(Number(selectUserNumber)) && users[selectUserNumber - 1]) {
      console.log("User:" + users[selectUserNumber - 1][0]);
      selectedUser = users[selectUserNumber - 1];
      break;
    } else {
      alert("მითითებული მომხმარებელი არ არსებობს");
    }
  }

  // მომხმარებლის იუზერის არჩევის შემდეგ, საჭიროა პინის შეყვანა, რათა გაგრძელდეს ოპერაცია. არასწორი პინის შემოყვანისას ამოდის შესაბამისი ალერტი

  while (true) {
    selectPin = prompt("გთხოვთ შეიყვანოთ პინი:");

    if (selectPin === selectedUser[1]) {
      console.log("User PIN:" + selectPin);

      break;
    } else {
      alert("შეყვანილი პინი არასწორია");
    }
  }

  // მიმხმარებელი ირჩევს სასურველ ოპერაციას
  while (true) {
    const atmOptions = [1, 2, 3, 4];
    atm = parseInt(
      prompt(
        "გთხოვთ აირჩიოთ ოპერაცია: \n1. ბალანსის შემოწმება\n2. თანხის შეტანა\n3. თანხის გატანა\n4. Exit"
      )
    );

    if (atmOptions.includes(atm)) {
      console.log("Operation #" + atm);

      break;
    } else {
      alert("არასწორი ოპერაცია");
    }
  }

  // შეყვანილი ოპერაციის მიხედვით ეშვება ფუნქცია სვჩის დახმარებით
  switch (atm) {
    case 1:
      checkBalance();
      break;
    case 2:
      deposit();
      break;
    case 3:
      withdraw();
      break;
    case 4:
      exit();
      break;
  }

  // აქამდე თუ მოვიდა, ნიშნავს რომ პროგრამა წარმატებით დასრულდა, ეს ფუნქცია კი ყველაფერს თავიდან დაიწყებს
  const resumeProcess = parseInt(prompt('თუ გსურთ პროცესის თავიადნ დაწყება? აკრიფეთ ციფრი 1, სხვა შემთხვევაში პროცესი დასრულდება'));
  if (resumeProcess === 1) { 
    runProgram();
  }
}

// ფუნქცია ამოწმებს მომხმარებლის ბალანსს

function checkBalance() {
  const msg = "ხელმისაწვდომი თანხა: " + selectedUser[3];
  console.log(msg);
  alert(msg);
}

// ფუნქცია მომხმარებელს ძლევბს საშუალებას, რომ თანხა შეიტანოს საკუთარ ანგარიშზე. ოპერაციის ბოლოს ვუჩვენებთ ჯამურ თანხას

function deposit() {
  while (true) {
    let amount = Number(prompt("გთხოვთ შეიყვანოთ თანხა"));
    if (!isNaN(amount) && amount > 0) {
      selectedUser[3] += amount;
      checkBalance();
      break;
    } else {
      alert("არასწორი ფორმატი");
    }
  }
}

// ფუნქცია მომხმარებელს ძლევბს საშუალებას, რომ თანხა გაიტანოს საკუთარი ანგარიშიდან. ოპერაციის ბოლოს ვუჩვენებთ დარჩენილ თანხას


function withdraw() {
  while (true) {
    let amount = Number(prompt("გთხოვთ შეიყვანოთ თანხა"));
    if (!isNaN(amount) && amount > 0 && amount <= selectedUser[3]) {
      selectedUser[3] -= amount;
      checkBalance();
      break;
    } else if (amount > selectedUser[3]) {
      alert("არასაკმარისი თანხა ანგარიშზე");
    } else {
      alert("არასწორი ფორმატი");
    }
  }
}

// იმ შემთხვევაში თუ მომხმარებელს მოუნდება ოპერაციის დასრულება, ამ ფუნქციის დახმარებით დახურავს პროგრამას

function exit() {
  console.log("Exiting...");
  return;
}

// პრომპტი, რომლითაც მომხმარებელი აირჩევს თავის იუზერს
// თუ არასწორი კოდი შემოიყვანა, ვაწყებინებთ თავიდან
// ვაწერინებთ პინს (სანამ სწორ ვერსიას არ შძემოიყვანს)
// ოპერაციების პროომპტი (სანამ სწორს არ აირჩევს)
//  1. აირჩიაბალანსის შემოწმება და დაულოგავს
// აბრუნებს ისევ ოპერაციებზე
// თანხის შეცვლის შემთხვევაში თანხის ჩასაწერი ინფუთი(სანამ სწორად არ შემოიყვანს)
// გატანის სემთხვევაში უნდა შევამოწმოთ რომ 0-ს ქვემოთ არ შემოვაყვანინოთ მნიშვნელობა
// მექნება Exit მნიშვნელობა რომ მომხმარებელი დაბრნდეს მომხმარებლების პრომპტზე
