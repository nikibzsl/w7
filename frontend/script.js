console.log(varVariable);

let globalVariable1 = 12;

let globalVariable2 = function () {

    console.log("inside function ", globalVariable1)

    let funVariable1 = "hello"
    console.log(funVariable1);

    let funVariable2 = function () {
        console.log("funVariable2 beljese");
        console.log(funVariable1);
        console.log(globalVariable1);

        let FuninFunVariable1 = true;
        console.log(FuninFunVariable1);

        let FuninFunVariable2 = function () {
            console.log(FuninFunVariable1)
        }

        FuninFunVariable2();
    }

    funVariable2() //csak akkor és ott fut le a függvény, ahol meghívjuk (valamin belül, kívül stb.)


    if (funVariable1 === "hello") {
        var blockVariable1 = "bye"
    } else {
       // console.log(blockVariable1);
    } // {}ek blockok, ott rekesztődik el

   console.log(blockVariable1);
}

globalVariable2() //ezzel hívjuk meg a let globalVariable2 függvényt

var varVariable = 1;

let letVariable;
console.log(letVariable); //ha felfele mozgatjuk, referenceError hibaüzenet tolódik a pofánkba

//scope vagy elgépelés a probléma

let letVariable2 = "variable 2";
    console.log(letVariable2);

const constVariable= "anyád";
    //constVariable = "hello";
    console.log(constVariable);

const constObj1 = {};
// constObj1.key = "value";
// constObj1 = {key: "value"}; //hibaüzenet
// {} === {} false de 1 === 1 true 
// ahánszor ezt leírjuk, annyiszor jön létre új objektum
console.log(constObj1);

const globalVariable3 = function (parameter1, parameter2) {
    //parameter: amit tartalmaz azt csak a függvényen belül lehet elérni
    console.log(parameter1); //itt ki lehet logozni. kívül nem
    console.log(parameter2);
    //undefined lesz az alapértéke a parameternek
    //amennyi parameter, annyi undefined lesz

}

const globalVariable4 = "apple";


const globalVariable5 = function () {
    return "pear"
}
//meg kell hívni, ha le akarjuk futtatni


//

const globalVariable6 = function () {
    return "shoes"
}

globalVariable3(globalVariable5(), globalVariable6()); //mi a scope? (global??)


const loadEvent = function () {

    const rootElement= document.getElementById("root")
    console.log(rootElement);

    //console.log(globalVariable1)
    rootElement.addEventListener("click", function(event){
        console.log(event.currentTarget);
        event.currentTarget.insertAdjacentHTML("beforeend", "clicked,")
// click esemény külső változóból jön
//
    })
}

window.addEventListener("load", loadEvent)

/* js scopeok
    block scope
    function scope
    ha a függényen belül van mégegy, akkor azt külön meg kell hívni, hogy lefusson

    scope: van egy bizonyos hatásköre a függvénynek
    pl. bp rendőrkapitányság mindenki fölött van, de a 9. kerületi nem tud a 11.-ben nyomozni 
    vannak a globális változók, de a függvény szintű változók csak a saját függvényén belül tud dolgozni

    console.log csak akkor fut le, ha meg van hívva a függvény

    minden fv-nek megvan a saját scopeja
    ganz utca meg ráday utcai kapitányság: egyik területért egyik, másikért másik felel, nem járkálnak át 
    függvény belüli fv-nek is megvan a saját scopeja, ahol azok a változók érvényesülnek, de lehetnek örököltek it

    a parentek nem látják a benne levő dolgokat
    ráday u.-i rendőrök nem tudnak parancsot adni a bp rendőrkapitányságnak
    childok tul. sose öröklődnek parent fele

    for, if: block scope

    LET, CONST = GLOBAL FUNCTION ÉS BLOCK SCOPE-JA
    VAR-NAK NINCS!!

    változók 2 lépcsősen jönnek létre
    memóriában az a namespace lefoglalódik - deklarálódás

    lefoglaljuk neki a nevet
    kap egy értéket (= után akármi)
    3 változónk lehet:
        let, const, var

    VAR
        régen: adott scope alatt a 0. sorban lefoglalódott azonnal a neve
        van egy namespace, ami egy változóra mutat a memóriában

        egyből a saját scope-jának a 0. sorában jött létre

        amíg nem kapott értéket, mert nem deklarálódott, undefined értékkel inicializálódott

    CONST, LET
        mi a különbség?

        LET: többször lehet neki értéket adni

    CONST: nem lehet újrainicializálni a tartalmát
        nem lenne értelme 
        sose csinálunk: változó aminek mindig is hibaüzenet legyen az értéke

mind a 3nak van scopeja, de deklarálásnál eltűnik 
var global
let const és global scope lehet
kód 0. sorában van a hoisting a varnál és deklarálódik és inicializálódik undefinedal
let meg const csak lefoglalódik

gyári sor: alapanyagok mennek be, autószériák jönnek ki 
valahol csak fertőtlenítik a gabonát

minden eseménynél callback functiont fogunk használni
ha azonnal le akarnak futni, és nem várunk másikat


     */
