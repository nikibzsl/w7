
const menuButtonComponent = function(){
    return `<button id="menu-btn"></button>`
}

//komponensre akkor tudunk selectort írni ha benne van a DOMba -> insertadjacenthtml

const loadEvent = function () {

    const rootElement= document.getElementById("root")

    rootElement.insertAdjacentHTML("beforeend", menuButtonComponent());

    const menuButtonElement = document.getElementById("menu-btn");

    menuButtonElement.addEventListener("click", function (event){
        // event.currentTarget.classList.toggle("clicked");
        // console.log(rootElement);
        // console.log(event.currentTarget.parentElement);
        // console.log(event.currentTarget.closest("#root"));

        event.currentTarget.closest("#root").classList.toggle("menu-opened");
    })

}
window.addEventListener("load", loadEvent);

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
