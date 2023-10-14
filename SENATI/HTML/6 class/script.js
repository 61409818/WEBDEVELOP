function cargar_pokemon(){
    const xhttp = new XMLHttpRequest();

    xhttp.onload = function(){
        if(this.status == 200){
            console.log(`Request Succesfull: ${this.status}`);
            
            let dataJSON= JSON.parse(this.responseText);
            let next = dataJSON.next;

            for(let i = 0; i < 100; i++){

                const xhttp2 = new XMLHttpRequest();

                xhttp2.onload = function(){
                    let resourcePokemon = JSON.parse(this.responseText);
                    let url_imagen = resourcePokemon.sprites.other["official-artwork"].front_default;
                    console.log(url_imagen);
                    document.getElementById('mi-tabla').innerHTML += 
                    `<tr>
                    <td>${i+1}</td>
                    <td>${dataJSON.results[i].name}</td>
                    <td>${dataJSON.results[i].url}</td>
                    <td><center><img src=${url_imagen}></center></td>
                    </tr>`;
                }
                console.log(dataJSON.results[i].url)
                xhttp2.open("GET", `${dataJSON.results[i].url}`);
                xhttp2.send();
            }

        }else{
            console.log(`Error!: ${this.status}`);
        }
    }

    xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon")
    xhttp.send();
}

function obtenerLinks(){
    let data = JSON.parse(this.responseText);
    
    for(let i = 0; i < 5; i++){
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function(){
            let data = JSON.parse(this.responseText);
        }

        
    }

        xhttp.open("GET", "data.next");
        xhttp.send();
    

}