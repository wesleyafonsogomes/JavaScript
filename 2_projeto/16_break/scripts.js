nome = 'José'

for(let i = 0; i <= 10; i = i + 1) {
    if(i == 5) {
        nome = 'Wesley';
    }
    if(i == 8 && nome == 'Wesley') {
        console.log('Pode parar, é o Wesley');
    }
    console.log(i);
}