import Palindromo from "../src/Palindromo";

test('Deve validar se uma palavra é um palíndromo', () =>{
    const palavra = "rever";
    const palindromo = new Palindromo();
    const palavraInvertida = palindromo.getPalindromo(palavra);
    expect(palavraInvertida).toBe(palavra);
});