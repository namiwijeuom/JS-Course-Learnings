const billValue = 275;
const tip = billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;

console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value ${billValue + tip}`); // The bill was 275, the tip was 41.25, and the total value 316.25

