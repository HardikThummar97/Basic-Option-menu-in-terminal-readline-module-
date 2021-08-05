const readline = require("readline");
// console.log("readline:", readline.createInterface);

const readline1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let books = ["Book1", "Book2", "Book3"];
let menu = () => {
  readline1.question(
    "Select any option:\n1 - Show all books, 2 - Add a new book, 3 - Quit  ",
    function (res) {
      switch (res) {
        case "1":
          books.forEach((el) => {
            console.log(el);
          });
          menu();
          break;
        case "2":
          readline1.question("Enter book name: ", function (name) {
            books.push(name);
            console.log(`book ${name} added successfully`);
            menu();
          });
          break;
        case "3":
          readline1.question(
            "Are you sure you want to quit - press Y to quit ",
            function (ans) {
              if (ans == "Y" || ans == "y") {
                readline1.close();
              }
            }
          );
          break;
        default:
          console.log(
            "You have selected an invalid entry so please press 1, 2 or 3"
          );
          menu();
          break;
      }
    }
  );
};

readline1.on("close", function () {
  console.log("Bye Bye!");
});
menu();
