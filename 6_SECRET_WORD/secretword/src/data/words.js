export const wordsList = {
    carro: ["Motor", "Porta", "Capô", "Pneu", "Antena"],
    fruta: ["Banana", "Maça", "Pêra" , "Mamão", "Laranja"],
    corpo: ["Braço", "Perna", "Cérebro", "Pescoço", "Olhos"],
    computador: ["Mouse", "Teclado", "Monitor", "Gabinete"],
    programação: ["Linguagem", "Framework", "JavaScript", "React"],
    alimento: ["Arroz", "Feijão", "Carne", "Leite", "Ovo"],
};

export function response( input ) {
    //Insert your code here 
    const response = []; 
   for (var i=1; i <= input; i++){
       if (i % 15 == 0) response.push("FizzBuzz");
       else if (i % 3 == 0) response.push("Fizz");
       else if (i % 5 == 0) response.push("Buzz");
       else response.push(i);
   }
   return response;
}