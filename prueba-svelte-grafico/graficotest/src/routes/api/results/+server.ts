import prisma from "$lib/prisma";
import { json } from "@sveltejs/kit";

export async function GET({ params }: any) {
    let { doctorId, id } = await params.json();

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