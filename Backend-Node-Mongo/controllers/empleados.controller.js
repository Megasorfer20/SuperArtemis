import Empleado from "../models/empleados.js";

const getEmpleados = async (req,res) => {
    try {
        const empleado = await Empleado.find()
        res.json(empleado)
    } catch (error) {
        console.log(error);        
    }
}

const getOneEmpleado = async (req,res) => {
    try {
        const empleado = await Empleado.findOne({_id:req.params.id})
        res.json(empleado)
    } catch (error) {
        res.status(404)
        res.status(500)
        res.send({error:"empleado no existe"})
        console.log(error)
    }
}

const agregarEmpleado = async (req,res) =>{
    const empleado = new Empleado(req.body)
    try {
        const nuevoEmpleado = await empleado.save()
        res.json(nuevoEmpleado)
    } catch (error) {
        console.log(error);
    }
}

const borrarEmpleado = async (req,res) => {
    try {
        await Empleado.deleteOne({_id:req.params.id})
        res.status(204).send()
    } catch (error) {
        res.status(404)
        res.status(500)
        res.send({error:"empleado no existe"})
        console.log(error)
    }
}

const actualizarEmpleado = async (req,res) =>{
    try {
        const empleado = await Empleado.findOne({_id:req.params.id})

        if(req.body.Apellido){
            empleado.Apellido = req.body.Apellido
        }
        if(req.body.Nombre){
            empleado.Nombre = req.body.Nombre
        }
        if(req.body.Titulo){
            empleado.Titulo = req.body.Titulo
        }
        if(req.body.TituloCortesia){
            empleado.TituloCortesia = req.body.TituloCortesia
        }
        if(req.body.FechaNacimiento){
            empleado.FechaNacimiento = req.body.FechaNacimiento
        }
        if(req.body.FechaContratacion){
            empleado.FechaContratacion = req.body.FechaContratacion
        }
        if(req.body.Direccion){
            empleado.Direccion = req.body.Direccion
        }
        if(req.body.Ciudad){
            empleado.Ciudad = req.body.Ciudad
        }
        if(req.body.Regiones){
            empleado.Regiones = req.body.Regiones
        }
        if(req.body.CodigoPostal){
            empleado.CodigoPostal = req.body.CodigoPostal
        }
        if(req.body.Pais){
            empleado.Pais = req.body.Pais
        }
        if(req.body.Telefono){
            empleado.Telefono = req.body.Telefono
        }
        if(req.body.Extension){
            empleado.Extension = req.body.Extension
        }
        if(req.body.Foto){
            empleado.Foto = req.body.Foto
        }
        if(req.body.Notas){
            empleado.Notas = req.body.Notas
        }
        if(req.body.Jefe){
            empleado.Jefe = req.body.Jefe
        }
        if(req.body.RutaFoto){
            empleado.RutaFoto = req.body.RutaFoto
        }
        await empleado.save()
        res.send(empleado)
    } catch (error) {
        res.status(404)
        res.status(500)
        res.send({error:"empleado no existe"})
        console.log(error)
    }
}

export {getEmpleados,getOneEmpleado,agregarEmpleado,borrarEmpleado,actualizarEmpleado}