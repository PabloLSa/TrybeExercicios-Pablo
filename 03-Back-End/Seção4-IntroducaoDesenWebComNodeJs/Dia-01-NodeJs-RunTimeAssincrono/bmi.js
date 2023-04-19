const weightInKg = 80; // Você pode utilizar o valor que desejar aqui
const heightInCm = 178; // Você pode utilizar o valor que desejar aqui

function handleBMI(weight, height) {
  console.log(`Weight: ${weight}, Height: ${height}`);

  const heightInMeters = height / 100;
  const heightSquared = heightInMeters ** 2;

  const bmi = weight / heightSquared;

  return bmi;
}

// A função main é o ponto de partida do nosso programa
function main() {
  const bmi = handleBMI(weightInKg, heightInCm);

  console.log(`BMI: ${bmi.toFixed(2)}`);
}

main();