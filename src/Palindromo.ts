export default class Palindromo {
    getPalindromo(palavra: string) {
        const letras = palavra.split("");
        const palindromo = letras.reverse().join("");
        return palindromo;
    }
}