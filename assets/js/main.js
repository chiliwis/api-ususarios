console.log("Entro al main.js");

const base_url_api = "http://ucamp.alumnos.dev4humans.com.mx";
const tblUsuarios = document.getElementById("tblUsuarios");

function cargarUsuarios(){
    fetch(base_url_api + "/Main/alumnos")
    .then(response => response.json())
    .then(result=> {
        console.log(result);
        tblUsuarios.innerHTML = "";
        for (const usuario of result.data) {
            let tr = `<tr>
            <td>${usuario.id}</td>
            <td>${usuario.nombre}</td>
            <td>${usuario.paterno}</td>
            <td>${usuario.materno}</td>
            <td>${usuario.nombre}</td>
            </tr>`;
            tblUsuarios.innerHTML += tr;
        }
        if (result.data.length == 0) {
            tblUsuarios.innerHTML = `<tr><td colspan="5" class="text-center">No hay ususarios</td></tr>`;
        }
})
    .catch(error => {
        console.log("Error detectado");
    })
}
function agregarUsuario() {
    console.log("Entro a agregar usuario");
    let form_data = new FormData();
   
    form_data.append("nombre", document.getElementById("nombre").value);
    form_data.append("paterno", document.getElementById("paterno").value);
    form_data.append("materno", document.getElementById("materno").value);
    form_data.append("email", document.getElementById("email").value);
    fetch(base_url_api + "/Main/alumnos",
    {
        method: "POST",
        body: form_data
    }
    )
    .then(response => response.json())
    .then(result=> {
        console.log(result);
        limpiarFormulario();
        cargarUsuario();
    })

    .catch(error => {
        console.log("Error detectado");
    })
}

function limpiarFormulario(){
document.getElementById("nombre").value = "";
document.getElementById("paterno").value = "";
document.getElementById("materno").value = "";
document.getElementById("email").value = "";
}

cargarUsuarios();