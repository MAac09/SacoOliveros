$(document).ready(function () {
    $("#myTable").dynamicTable({
        //definimos las columnas iniciales    
        columns: [{
            text: "Apellidos",
            key: "apellidos"
        },
        {
            text: "Nombres",
            key: "name"
        },
        {
            text: "Nota 1",
            key: "n1"
        },
        {
            text: "Nota 2",
            key: "n2"
        },
        {
            text: "Nota 3",
            key: "n3"
        },
        {
            text: "Nota 4",
            key: "n4"
        },
        {
            text: "Promedio",
            key: "n5"
        },
        {
            text: "Observación",
            key: "ob"
        },
        ],

        //carga de datos
        data: [{
            apellidos: 'Lopez',
            name: 'Carlos',
            n1: 15,
            n2: 15,
            n3: 15,
            n4: 15,
            n5: 15,
            ob:'ahahha'
        },
        {
            apellidos: 'Gonzalez',
            name: 'Ana',
            n1: 12,
            n2: 14,
            n3: 13,
            n4: 16,
            n5: 15
        },
        {
            apellidos: 'Martinez',
            name: 'Juan',
            n1: 18,
            n2: 17,
            n3: 16,
            n4: 15,
            n5: 18
        },
        {
            apellidos: 'Rodriguez',
            name: 'Maria',
            n1: 14,
            n2: 13,
            n3: 15,
            n4: 16,
            n5: 14
        },
        {
            apellidos: 'Perez',
            name: 'Luis',
            n1: 17,
            n2: 16,
            n3: 18,
            n4: 17,
            n5: 16
        },
        {
            apellidos: 'Sanchez',
            name: 'Laura',
            n1: 16,
            n2: 17,
            n3: 18,
            n4: 16,
            n5: 17
        },
        {
            apellidos: 'Ramirez',
            name: 'Pedro',
            n1: 15,
            n2: 15,
            n3: 15,
            n4: 15,
            n5: 16
        },
        {
            apellidos: 'Diaz',
            name: 'Marta',
            n1: 16,
            n2: 17,
            n3: 16,
            n4: 17,
            n5: 16
        },
        {
            apellidos: 'Fernandez',
            name: 'Jose',
            n1: 14,
            n2: 15,
            n3: 14,
            n4: 16,
            n5: 15
        },
        {
            apellidos: 'Gomez',
            name: 'Sofia',
            n1: 18,
            n2: 17,
            n3: 16,
            n4: 17,
            n5: 18
        }
        ],

        //definición de botones
        buttons: {
            addButton: '<input type="button" value="Nuevo" class="btn btn-success" />',
            cancelButton: '<input type="button" value="Cancelar" class="btn btn-primary" />',
            deleteButton: '<input type="button" value="Borrar" class="btn btn-danger" />',
            editButton: '<input type="button" value="Editar" class="btn btn-primary" />',
            saveButton: '<input type="button" value="Guardar" class="btn btn-success" />',
        },
        showActionColumn: true,
        //condicionales
        getControl: function (columnKey) {
            if (columnKey == "n1") {
                return '<input type="number" class="form-control" />';
            }
            if (columnKey == "n2") {
                return '<input type="number" class="form-control" />';
            }

            if (columnKey == "n3") {
                return '<input type="number" class="form-control" />';
            }
            if (columnKey == "n4") {
                return '<input type="number" class="form-control" />';
            }
            if (columnKey == "n5") {
                return '<input type="number" class="form-control" />';
            }

            return '<input type="text" class="form-control" />';
        }
    });
});    