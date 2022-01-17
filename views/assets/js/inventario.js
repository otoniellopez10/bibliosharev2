$(document).ready(function () {
    $("#table_libros").DataTable({
        language: {
            decimal: "",
            emptyTable: "No hay información",
            info: "Mostrando _START_ - _END_ de _TOTAL_ registros",
            infoEmpty: "Mostrando 0 a 0 de 0 registros",
            infoFiltered: "(Filtrado de _MAX_ total registros)",
            infoPostFix: "",
            thousands: ",",
            lengthMenu: "Mostrar _MENU_ registros",
            loadingRecords: "Cargando...",
            processing: "Procesando...",
            search: "Buscar:",
            zeroRecords: "Sin resultados encontrados",
            paginate: {
                first: "Primero",
                last: "último",
                next: "Siguiente",
                previous: "Anterior",
            },
        },
    });
});

var cont_agregar = $("#cont_agregar_libro");
var cont_lista = $("#cont_lista_libros");

var btn_cont_1 = $("#btn_cont_1");
var btn_cont_2 = $("#btn_cont_2");

var btn_i_autor = $("#btn_i_autor");
var table_autores = $("#table_autores");
var tbody_autores = $("#tbody_autores");

//campos
var i_cota = $("#i_cota");
var i_ejemplares = $("#i_ejemplares");
var i_titulo = $("#i_titulo");
var i_editorial = $("#i_editorial");
var i_especialidad = $("#i_especialidad");
var i_ano = $("#i_ano");
var i_autor = $("#i_autor");
var array_autores = [];

// ajustes iniciales
table_autores.slideUp(0);
if (window.location.hash == "#registrar") {
    cont_lista.fadeOut(0);
    btn_cont_1.hide();
} else {
    cont_agregar.fadeOut(0);
    btn_cont_2.hide();
}

// al darle click al boton "agregar libro"
btn_cont_1.click(function (e) {
    cont_lista.fadeOut(300, function () {
        cont_agregar.fadeIn(300);
    });
    btn_cont_2.show();
    btn_cont_1.hide();
});

// al darle click al boton "Lista"
btn_cont_2.click(function (e) {
    cont_agregar.fadeOut(300, function () {
        cont_lista.fadeIn(300);
    });
    btn_cont_1.show();
    btn_cont_2.hide();
});

let contador_autores = 0;
btn_i_autor.click(function () {
    let autor = i_autor.val();
    if (autor != "" && autor != undefined) {
        tbody_autores.append(`
        <tr>
            <td>${autor}</td>
            <td class="text-center">
                <a
                    href="#"
                    id-autor= ${contador_autores}
                    class="text-danger delete-autor"
                    ><i
                        class="bi bi-trash-fill"
                    ></i
                ></a>
            </td>
        </tr>
        `);
        i_autor.val(""); //limpiar el campo
        i_autor.focus(); //hacer focus de nuevo en el campo
        array_autores.push({
            id: contador_autores,
            name: autor,
        });
        contador_autores++; //incrementar el contador de ID
        table_autores.slideDown();
    } else if (i_autor.val().length != 0) {
        Swal.fire("", "Ingrese un nombre válido", "error");
    }
});

tbody_autores.on("click", "a.delete-autor", function (e) {
    e.preventDefault();
    let id_autor = $(this).attr("id-autor");
    let indexForDelete = array_autores.findIndex(
        (autor) => autor.id == id_autor
    );
    array_autores.splice(indexForDelete, 1);
    $(this).parents("tr").remove();
    if (array_autores.length == 0) table_autores.slideUp();
});

// solo escribir numeros a los input con la clase 'solo numeros'
$(".solo-numeros").keypress(function (e) {
    var a = /[0-9]/;
    validar(e, a);
});

// operacion para validar
function validar(e, a) {
    var key = e.keyCode || e.which;
    var expresion = a;
    var especiales = "8-37-38-46";
    var tecla = String.fromCharCode(key);
    var teclado_especial = false;

    for (var i in especiales) {
        if (key == especiales[i]) {
            teclado_especial == true;
        }
    }

    if (!expresion.test(tecla) && !teclado_especial) {
        e.preventDefault();
        return false;
    }
}
