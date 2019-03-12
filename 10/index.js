class Main {
  constructor() {
    this.runTask();
  }

  runTask() {
    const taskNumber = prompt("Ведите номер задачи");
    if (!taskNumber) return;

    switch (+taskNumber) {
      case 1:
        this.task1();
        break;
      case 2:
        this.task2();
        break;
      case 3:
        this.task3();
        break;
      case 4:
        this.task4();
        break;
      case 5:
        this.task5();
        break;
      default:
        this.runTask();
        break;
    }
  }

  task1() {
    const name = prompt("Введите имя пользователя");
    alert("Ваше имя '" + name + "'");
    this.runTask();
  }

  task2() {
    let randomNum = Math.round(Math.random() * 1000);
    console.log(Math.pow(randomNum, 2));
    alert(
      `созданное число ${randomNum} квадрат числа ${Math.pow(randomNum, 2)}`
    );
    this.runTask();
  }

  task3() {
    const numbersString = prompt("Введите 2 числа через пробел");
    const [a, b] = numbersString.split(" ");
    if (+a % +b === 0) {
      console.log("числа кратные");
      alert("числа кратные");
    } else {
      console.log("числа не кратные");
      alert("числа не кратные");
    }
    this.runTask();
  }

  task4() {
    const num = prompt("Введите число");
    const numbers = [];
    for (let i = 3; i <= +num; i += 3) {
      numbers.push(i * i * i);
      console.log(i * i * i);
    }
    alert(numbers.join(","));
    this.runTask();
  }

  task5() {
    const numbers = [];
    for (let i = 0; i <= 4; i++) {
      numbers.push(parseInt(prompt(`Введите число ${i + 1}`)));
    }
    const result = numbers.reduce((sum, current) => {
      if (current >= 0) {
        sum += current;
      }
      return sum;
    });

    console.log(result);
    alert(`Cумма: ${result}`);
    this.runTask();
  }
}

new Main();
