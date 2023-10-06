/*clase de pruebas del aplicativo
hacemos aca las pruebas
se trabaja por separado*/
const {suma,resta,multiplicacion,division} = require("../calc.js");

describe("Pruebas de suma", ()=>{
    test("prueba de suma", () =>{
        const prueba1 = suma(1,2);
        expect(prueba1).toBe(3);
    })
    test("prueba de suma usando dos strings", ()=>{
        const prueba2 = suma("a","b");
        expect(prueba2).toBe(0);
    })
    test("prueba de suma usando un string", ()=>{
        const prueba3 = suma("a",1);
        expect(prueba3).toBe(0);
    })
    test("prueba de suma de numeros negativos", ()=>{
        const prueba4 = suma(-1,-1);
        expect(prueba4).toBe(-2);
    })
    })
    describe("Pruebas de resta", ()=>{
    test("prueba de resta", () =>{
        const resta1 = resta(1,1);
        expect(resta1).toBe(0);
    })
    test("prueba de resta con dos strings", ()=>{
        const resta2 = resta("a","b");
        expect(resta2).toBe(0);
    })
    test("prueba de resta con un string", ()=>{
        const resta3 = resta("a",-5);
        expect(resta3).toBe(0);
    })
})

test("prueba de division",() =>{
    expect(division(1,0)).toBeNull
})
test("prueba de multiplicacion", ()=>{
    expect(multiplicacion(1,2)).toBe(2)
})