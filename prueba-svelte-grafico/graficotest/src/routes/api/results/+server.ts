import prisma from "$lib/prisma";
import { json } from "@sveltejs/kit";

//Endpoint para obtener el analisis. El id y el idDoctor van en los parametros de la URL

export async function GET(event:any) {
    const doctorId = Number(event.url.searchParams.get('doctorId'));  //Agarra valores de la URL
    const id = Number(event.url.searchParams.get('id'));

    //Chequea si se solicita un analisis especifico o todos
    if (id) { //Se accede a la base de datos y se accede al analisis en base al id enviado
        let result = await prisma.analisis.findUnique({
            where: {
                id, doctorId
            }
        });

        //Si se encontro el analisis pedido lo devuelve y si no devuelve "Analisis no encontrado"
        if (result)
            return json({ result }, { status: 200 });
        else
            return json("Analisis no encontrado.", { status: 404 });
    }

    //Se buscan todos los analisis del doctor 
    let results = await prisma.analisis.findMany({where:{doctorId}});

    return json({ results }, { status: 200 })
}

//ENDPOINT de subir analisis
export async function POST({ request }: any) {
    let { paciente, saturacionOxigeno, tiempoSueno, cargaHipoxica, doctorId } = await request.json();
    //Se selecciona todas las variables del cuerpo de la request y se crea una nueva fila con estos valores
    let result = await prisma.analisis.create({
        data: {
            paciente,
            saturacionOxigeno,
            tiempoSueno,
            cargaHipoxica,
            doctorId
        }
    });
    if(!result) //Devuelve si se concreto bien la creacion o no
        return json({ result }, { status: 500 })
    return json({ result }, { status: 200 })

}