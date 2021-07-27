function getTypes(result){
    output="";
    for(var i=0;i<result.types.length;i++){
        output+=`  ${result.types[i].type.name}  `;
    }
    return output.toUpperCase();
}
function convertHeight(height){
    return `${Math.floor(height*39.03701/12)}'${Math.floor(height*39.03701%12)}"`;
}
function convertWeight(weight){
    return `${Math.floor(weight*2.20462)/10}lbs`;
}
function getMoveList(list){
    output=""
    for(var i=0;i<list.length;i++){
        output+=`${list[i].move.name}, `
    }
    return output.substr(0,output.length-2);
}
for(var i=1;i<=898;i++){
    $("#grid-div").append(`<div><img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png' alt='#${i}' number='${i}'/></div>`)
}
$("img").click(function(){
    $.get(`https://pokeapi.co/api/v2/pokemon/${$(this).attr("number")}`,function(result){
        console.log(result)
        $("#info-bar").html(
        `<div id='contents'>
            <div id='section-1' class='section'>
            <h4>${result.name.toUpperCase()}</h4>
            <img src=${result.sprites.front_default} alt='${result.id}' />
            <p>${getTypes(result)}</p>
            </div>
            <div id='section-2' class='section'>
                <p>Height: ${result.height/10}m || ${convertHeight(result.height/10)}</p>
                <p>Weight: ${result.weight/10}kg || ${convertWeight(result.weight)}</p>
                <h2>Base Stats:</h2>
                <p>${result.stats[0].stat.name.toUpperCase()}:${result.stats[0].base_stat}   |   ${result.stats[1].stat.name.toUpperCase()}:${result.stats[1].base_stat}</p>
                <p>${result.stats[2].stat.name.toUpperCase()}:${result.stats[2].base_stat}   |   ${result.stats[3].stat.name.toUpperCase()}:${result.stats[3].base_stat}</p>
                <p>${result.stats[4].stat.name.toUpperCase()}:${result.stats[4].base_stat}   |   ${result.stats[5].stat.name.toUpperCase()}:${result.stats[5].base_stat}</p>
            </div>
            <div id='section-3' class='section'>
                <h2>Move List:</h2>
                ${getMoveList(result.moves)}
            </div>
        </div>`);
},"json");
});