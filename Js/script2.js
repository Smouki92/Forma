const fname = document.querySelector('.nameinp');
const lname = document.querySelector('.lnameinp');

oninput = function () {
    const a = fname.value;
    const b = lname.value;
    const c = b.charAt(0);
    if (!a && !c) {
        resname.innerHTML = 'Пользователь';
    } else {
        resname.innerHTML = a + ' ' + c;
    }
}

function getData() {
    const params = new URLSearchParams(window.location.search)
    if (params.has("countries") && params.has("types") && params.has("entry") && params.has("timespent") && params.has("try")) {
        const countriesId = params.get("countries")
        const countriesName = data.countries.find(country => country.id === countriesId).name
        rescountries.innerHTML = countriesName

        const typesId = params.get("types")
        const typesName = data.types.find(types => types.id === typesId).name
        restypes.innerHTML = typesName

        const jsonDate = params.get("entry")
        const date = new Date (jsonDate)
        const res = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
        resentry.innerHTML = res
        
        const timespentId = params.get("timespent")
        const timespentName = data.timespent.find(timespent => timespent.id === timespentId).name
        restimespent.innerHTML = timespentName
        
        const tryId = params.get("try")

        const price = calculate(countriesId, typesId, tryId, timespentId)
         resprice.innerHTML =  '\u20AC' + price 
    } 
}

    getData()
    
   