
const parrafo: string =
"Urania. Qué nombre. A la gente le gusta, le parece sonoro, original, raro. A ella también, aunque le evoca sólo cosas tristes. Todo le evoca cosas tristes, ahora que ha vuelto. Pero ¿cuándo no, desde que se fue de esta ciudad, a la que creía no volvería nunca? ¿Y cómo era posible que alguien se llamara así en una familia de dominicanos católicos, que adoraban a la Virgen del Rosario y a la Virgen de Altagracia? Su padre le contó que su madre era quien escogió su nombre. Urania: la Musa de la astronomía. Nadie se atrevió a contradecirla. A él le parecía bien, se lo dijo como si la elección del nombre hubiera sido cosa de poca importancia. En aquellos días no había problemas en la casa. Las cosas cambiaron después, claro. Cambiaron tanto.";

// Devuelve true si searchTerm se encuentra en fullText
function isTextInPara(fullText: string, searchTerm: string): boolean {
const found = fullText.toLowerCase().includes(searchTerm.toLowerCase());
console.log(`El término "${searchTerm}" se ${found ? "encuentra" : "no se encuentra"} en el texto.`);
return found;
}

// Completar la función para que devuelva la cantidad de veces que searchTerm aparece dentro de fullText
function howManyTextInPara(fullText: string, searchTerm: string): number {
const lowerFullText = fullText.toLowerCase();
const lowerSearchTerm = searchTerm.toLowerCase();

let contador = 0;
let startIndex = 0;

while ((startIndex = lowerFullText.indexOf(lowerSearchTerm, startIndex)) !== -1) {
    contador++;
    startIndex += lowerSearchTerm.length; 
}

return contador;
}

const termino = "Urania";
const esEncontrado = isTextInPara(parrafo, termino);
const cantidad = howManyTextInPara(parrafo, termino);

console.log(`El término "${termino}" aparece ${cantidad} veces en el texto.`);
