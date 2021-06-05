/**
 * TODO:
 * 1. Buatlah fungsi bernama minimal dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai terkecil antara a atau b.
 *    - Bila nilai keduanya sama, maka kembalikan dengan nilai a
 *
 *    contoh:
 *    minimal(1, 4) // 1
 *    minimal(3, 2) // 2
 *    minimal(3, 3) // 3
 */
function minimal(a, b) {
    if(a > b) {
        return b;
    } else if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log(minimal(1, 4));
console.log(minimal(3, 2));
console.log(minimal(3, 3));


 /* 2. Buatlah fungsi bernama power dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai dari hasil perkalian a * a sebanyak b (fungsi kuadrat).
 *
 *    contoh:
 *    power(7, 3) // 343
 *    power(3, 3) // 27
 *    power(4, 0.5) // 2
 */

function power(a, b) {
    return a ** b;
}

let result1 = power(7, 3);
console.log(result1);

let result2 = power(3, 3);
console.log(result2);

let result3 = power(4, 0.5);
console.log(result3);


/**
 * Hiraukan kode di bawah ini
 */

module.exports = { minimal, power };
