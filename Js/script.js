function result(){ 
    const countryId = document.getElementById("countries").value
    const typeId = document.getElementById("types").value
    const tryId = document.getElementById("try").value
    const timespentId = document.getElementById("timespent").value
    const price = calculate(countryId, typeId, tryId, timespentId) 
    document.getElementById("result").innerHTML = '\u20AC' + price 
} 
result() 
document.querySelectorAll('select').forEach(select => {
    select.addEventListener('change', event => {
  console.log (event)
  console.log (select)
  result()
    })
  })

