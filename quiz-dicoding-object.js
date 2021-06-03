/**
 * TODO
 * 1. Buatlah variabel dengan nama restaurant yang object dengan ketentuan berikut:
 *    - Memiliki properti bernama "name"
 *       - Bertipe data string
 *       - Bernilai apa pun, asalkan tidak string kosong atau null.
 *    - Memiliki properti bernama "city"
 *       - Bertipe data string
 *       - Bernilai apa pun, asalkan tidak string kosong atau null.
 *    - Memiliki properti "favorite drink"
 *       - Bertipe data string
 *       - Bernilai apa pun, asalkan tidak string kosong atau null.
 *    - Memiliki properti "favorite food"
 *       - Bertipe data string
 *       - Bernilai apa pun, asalkan tidak string kosong atau null.
 *    - Memiliki properti "isVegan"
 *       - Bertipe data boolean
 *       - Bernilai boolean apa pun.
 */

const restaurant = {
	name: "Pizza",
    city: "Depok",
    'favorite drink': "Jus",
    'favorite food': "pizza",
    isVegan: false
};

/*
 * 2. Buatlah variabel bernama name.
 *    Kemudian isi dengan nilai name dari properti object restaurant
 */
let name = restaurant.name;

/*
 * 3. Buatlah variabel bernama favoriteDrink.
 *    Kemudian isi dengan nilai "favorite drink" dari properti object restaurant
 */
let favoriteDrink = restaurant["favorite drink"];

// TODO


/**
 * Hiraukan kode di bawah ini
 */
module.exports = { restaurant, name, favoriteDrink };