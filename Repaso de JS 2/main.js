function tabla() {

    //let url2 = "tabla.json"

    let contenido = document.getElementById("tabla_contenido");
    let datos;

    fetch(`tabla.json`)
        .then(response => response.json())
        .then(data => {

            console.log(data);

            data.forEach(element => {
                datos += `
                <tr>
                        <td>${element.id}</td>
                        <td>${element.nombre}</td>
                        <td>${element.email}</td>
                        <td>${element.estado ? "Activo" : "Inactivo"}</td>
                    </tr>
    
                `
            });

            contenido.innerHTML = datos;

        })
};

function mostrar() {

    //Declaracion de variables:

    let url = "https://randomuser.me/api/";
    let nombre;
    let imagen;

    let informacion;
    let contenido = document.getElementById("contenido");

    fetch(url)
        .then(response => response.json())
        .then(data => {

            imagen = data.results[0].picture.large;
            nombre = data.results[0].name.first;

            informacion = `
            <img src="${imagen}" class="img-fluid rounded-circle">
            <p>Name: ${nombre}</p>
            `
                // Variable div + innerHTML
            contenido.innerHTML = informacion;

            console.log(imagen);
            console.log(nombre);

        })

};