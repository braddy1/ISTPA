const formulario = document.getElementById('formulario');
const registro = document.getElementById('registro');
const exito = document.getElementById('exito');

formulario.addEventListener('submit', async(e) => {
	e.preventDefault();


	 try {
	 	const respuesta = await fetch('https://sheet.best/api/sheets/6cb042d0-083a-4c24-96a4-97bd843a4ea3', {
			method: 'POST',
	 		mode: 'cors',
	 		headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				"Nombre": formulario.nombre.value,
				"Correo": formulario.correo.value,
				"Telefono": formulario.telefono.value,
				"Mensaje": formulario.mensaje.value
	 		})
		});

		const contenido = await respuesta.json();
	 	console.log(contenido);
    } catch(error){
	console.log(error);
 }

 

	registro.classList.remove('activo');
	exito.classList.add('activo');
});