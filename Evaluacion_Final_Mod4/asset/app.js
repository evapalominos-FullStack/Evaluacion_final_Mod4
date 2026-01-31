class UsuarioManager {
    constructor() {
        this.usuarios = [];
        const request = new XMLHttpRequest();
        request.open("GET", "https://jsonplaceholder.typicode.com/users", false);
        request.send();

        if (request.status === 200) {
            this.usuarios = JSON.parse(request.responseText);
            console.log("Datos cargados con exito!!!");
        } else {
            console.error("Error al obtener datos del servidor.");
        }
    }

    listarNombres() {
        console.log("----- Lista de Usuarios -----");
        this.usuarios.forEach(u => console.log(u.name));
    }

    
    _buscarPorPrompt() {
        const nombre = prompt("Ingrese el nombre del usuario:");
        const usuario = this.usuarios.find(u => u.name.toLowerCase() === nombre?.toLowerCase());
        if (!usuario) console.warn("Usuario no encontrado.");
        return usuario;
    }

    
    infoBasica() {
        const u = this._buscarPorPrompt();
        if (u) console.log(`Username: ${u.username}, Email: ${u.email}`);
    }

    
    infoDireccion() {
        const u = this._buscarPorPrompt();
        if (u) console.log("Dirección:", u.address);
    }

    
    infoAvanzada() {
        const u = this._buscarPorPrompt();
        if (u) {
            console.log(`Teléfono: ${u.phone}`);
            console.log(`Sitio Web: ${u.website}`);
            console.log("Compañía:", u.company);
        }
    }

    
    listarCompanias() {
        console.log("--- Compañías y Frases ---");
        this.usuarios.forEach(u => {
            console.log(`Empresa: ${u.company.name} | Frase: ${u.company.catchPhrase}`);
        });
    }

    
    listarOrdenados() {
        const ordenados = [...this.usuarios].sort((a, b) => a.name.localeCompare(b.name));
        console.log("--- Usuarios Ordenados ---");
        ordenados.forEach(u => console.log(u.name));
    }
}


const manager = new UsuarioManager();
