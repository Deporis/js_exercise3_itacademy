function Exercise3()
{
    // ------------------ FASE 1 ----------------------
    let Name1 = prompt("Insert a city");
    let Name2 = prompt("Insert a city");
    let Name3 = prompt("Insert a city");
    let Name4 = prompt("Insert a city");
    let Name5 = prompt("Insert a city");
    let Name6 = prompt("Insert a city");
    console.log(Name1);
    console.log(Name2);
    console.log(Name3);
    console.log(Name4);
    console.log(Name5);
    console.log(Name6);
    let arrayCiutats = [Name1, Name2, Name3, Name4, Name5, Name6];
    // ------------------ FASE 2 -------------------------
    arrayCiutats.sort();
    console.log(arrayCiutats);
    let arrayCiutatsModificades = [];
    // ------------------ FASE 3 -------------------------
    for(let city = 0; city < arrayCiutats.length; city++)
    {
        let cityA = arrayCiutats[city];
        /*
        We use the replace Method(), the first value takes the character between //
        and after que indicate its global == g. The second value is what we want to
        change the value before, in this case:
        Barcelona => B4rcelon4
        */
        arrayCiutatsModificades[city] = cityA.replace(/a/g, '4');
    }
    console.log(arrayCiutatsModificades);
    // ------------------ FASE 4 ----------------------
    let revcitiesdef = [];
    let revcities1 = [];
    for(let i = 0; i < arrayCiutats.length; i++)
    {
        for(let k = arrayCiutats[i].length - 1; k >= 0; k--)
        {
            revcities1.push(arrayCiutats[i][k]);
        }
        revcitiesdef.push(revcities1);
        revcities1 = [];
    }
    // To print the array as a "string", actually just adding the values concatenated
    // we use join()
    for(let q = 0; q < revcitiesdef.length; q++)
    {
        console.log(revcitiesdef[q].join(""));
    }

}