const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
    console.log(elseScope);
    console.log(`${ifScope}  o que estou fazendo aqui ? :O`);
  }
  //console.log(`${ifScope}  o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
}

testingScope(true);