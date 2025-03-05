/*
    from JSON to obj
*/

let animalsJSON = `[
    { "eng": "rat", "chi": "shu", "pin": "la&#780;oshu&#780;", "year": 2020 },
    { "eng": "cow", "chi": "niu", "pin": "niu&#769;", "year": 2021 },
    { "eng": "tiger", "chi": "hu", "pin": "la&#780;ohu&#780;", "year": 2022 },
    { "eng": "rabbit", "chi": "tu", "pin": "tu&#768;zi", "year": 2023 },
    { "eng": "dragon", "chi": "long", "pin": "lo&#769;ng", "year": 2024 },
    { "eng": "snake", "chi": "she", "pin": "she&#769;", "year": 2025 },
    { "eng": "horse", "chi": "ma", "pin": "ma&#780;", "year": 2026 },
    { "eng": "goat", "chi": "yang", "pin": "ya&#769;ng", "year": 2027 },
    { "eng": "monkey", "chi": "hou", "pin": "ho&#769;uzi", "year": 2028 },
    { "eng": "chicken", "chi": "ji", "pin": "ji&#772;", "year": 2029 },
    { "eng": "dog", "chi": "gou", "pin": "gou&#780;", "year": 2030 },
    { "eng": "pig", "chi": "zhu", "pin": "zhu&#772;", "year": 2031 }
    ]`;

console.log('AnimalsJSON:',animalsJSON[8]);

let animals = JSON.parse(animalsJSON);
console.log('animal:',animals[2]);

let newAnimal = JSON.stringify(animals);
console.log('newAnimal:',newAnimal);

let animalsJSONObj = `{
    "rat": { "chi": "shu", "pin": "la&#780;oshu&#780;", "year": 2020 },
    "cow": {"chi": "niu", "pin": "niu&#769;", "year": 2021 },
    "tiger": {"chi": "hu", "pin": "la&#780;ohu&#780;", "year": 2022 },
    "rabbit": {"chi": "tu", "pin": "tu&#768;zi", "year": 2023 },
    "dragon": {"chi": "long", "pin": "lo&#769;ng", "year": 2024 },
    "snake": {"chi": "she", "pin": "she&#769;", "year": 2025 },
    "horse": {"chi": "ma", "pin": "ma&#780;", "year": 2026 },
    "goat": {"chi": "yang", "pin": "ya&#769;ng", "year": 2027 },
    "monkey": {"chi": "hou", "pin": "ho&#769;uzi", "year": 2028 },
    "chicken": {"chi": "ji", "pin": "ji&#772;", "year": 2029 },
    "dog": {"chi": "gou", "pin": "gou&#780;", "year": 2030 },
    "pig": {"chi": "zhu", "pin": "zhu&#772;", "year": 2031 }
    }`;

/*
    1. Transform into the object;
    2. Access the chicken element in the object and output the year;
    3. Loop over the array and out put every animal;
*/
let newAnimalObj = JSON.parse(animalsJSONObj);
console.log('newAnimalObj',newAnimalObj);

console.log(newAnimalObj.chicken.year);

for(let animal in newAnimalObj ){
    console.log('animal',animal);
}









