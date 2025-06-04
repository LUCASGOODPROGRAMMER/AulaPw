
// 1. Tipos de dados
let num = 1;
let text = "1";
let boll = true;
let nulo = null;
let indefinido = undefined;
let obj = { nome: "João" };

console.log("Tipos de dados:");
console.log(typeof num);        // number
console.log(typeof text);       // string
console.log(typeof boll);       // boolean
console.log(typeof nulo);       // object (curiosidade do JS)
console.log(typeof indefinido); // undefined
console.log(typeof obj);        // object

// 2. Coerção (mistura de tipos)
console.log("\nCoerção de tipos:");
console.log('"10" + 5 =', "10" + 5); // "105" (string) - concatenação
console.log('10 + true =', 10 + true); // 11 (number) - true vira 1
console.log('"10" - 3 =', "10" - 3); // 7 (number) - string vira número
console.log('false + false =', false + false); // 0 (number) - ambos viram 0
console.log('"25px" - 5 =', "25px" - 5); // NaN (number) - "25px" não vira número

// 3. Comparações (== e ===)
console.log("\nComparações:");
console.log('10 == "10":', 10 == "10"); // true - compara só valor
console.log('10 === "10":', 10 === "10"); // false - compara valor e tipo
console.log('null == undefined:', null == undefined); // true - ambos são "vazios"
console.log('null === undefined:', null === undefined); // false - tipos diferentes
console.log('false == 0:', false == 0); // true - coerção para número
console.log('false === 0:', false === 0); // false - tipos diferentes

// 4. Testando com if
let a = 0;
let b = "alguma coisa";
let c = null;
let d = true;

console.log("\nTestando com if:");
if (a) { 
   console.log("a passou"); 
} else { 
   console.log("a falhou"); // 0 é considerado falso
}
if (b) { 
   console.log("b passou"); // string não vazia é verdadeiro
} else { 
   console.log("b falhou");
}
if (c) { 
   console.log("c passou"); 
} else { 
   console.log("c falhou"); // null é falso
}
if (d) { 
   console.log("d passou"); // true é verdadeiro
} else { 
   console.log("d falhou"); 
}

// 5. Curiosidades doidas do JS
console.log("\nCuriosidades doidas do JS:");
console.log('[] == false:', [] == false); // true - coerção estranha
console.log('[] == 0:', [] == 0); // true - coerção estranha
console.log('"" == 0:', "" == 0); // true - coerção estranha

// Comentários:
// [] == false: O array vazio vira "" (string vazia), que vira 0, que é igual a false (0).
// [] == 0: O array vazio vira "" (string vazia), que vira 0.
// "" == 0: String vazia vira 0.