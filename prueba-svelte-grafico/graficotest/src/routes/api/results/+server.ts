import prisma from "$lib/prisma";
import { json } from "@sveltejs/kit";

export async function GET(event:any) {
    const doctorId = Number(event.url.searchParams.get('doctorId'));
    const id = Number(event.url.searchParams.get('id'));

    if (id) {
        let result = await prisma.analisis.findUnique({
            where: {
                id, doctorId
            }
        });

        if (result)
            return json({ result }, { status: 200 });
        else
            return json("Analisis no encontrado.", { status: 404 });
    }

    // TODO: filtrar por doctor
    let results = await prisma.analisis.findMany({where:{doctorId}});

    //if (results)
    return json({ results }, { status: 200 })
}

export async function POST({ request }: any) {
    let { paciente, saturacionOxigeno, tiempoSueno, cargaHipoxica, doctorId } = await request.json();
    let result = await prisma.analisis.create({
        data: {
            paciente,
            saturacionOxigeno,
            tiempoSueno,
            cargaHipoxica,
            doctorId
        }
    });
    if(!result)
        return json({ result }, { status: 500 })
    return json({ result }, { status: 200 })

}