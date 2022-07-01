

let btn = document.getElementById('btn-search')

btn.onclick = function(){
    let value = document.getElementById('search').value
    fetch(`http://api.tropicalfruitandveg.com/tfvjsonapi.php?tfvitem=${value}`)
.then(response=>response.json())
.then(data=>{
    console.log(data)
    //fruit image
    let image= document.getElementById('image');
    image.src = data.results[0].imageurl
    //fruit name
    let name= document.getElementById('fruit-name');
    name.innerHTML = data.results[0].tfvname
    //fruit botname
    let botName = document.getElementById('bot-name')
    botName.innerHTML = data.results[0].botname
    //other name
    let otherName = document.getElementById('other-name')
    otherName.innerHTML = data.results[0].othname
    //description
    let desc = document.getElementById('description')
    desc.innerHTML = data.results[0].description
    //climate
    let climate = document.getElementById('climate')
    climate.innerHTML = data.results[0].climate
    //soil
    let soil = document.getElementById('soil')
    soil.innerHTML = data.results[0].soil
}).catch((error)=>{
    alert('The fruit name does not exist, please type a valid fruit name')
})

}