import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Récupérer tous les projets depuis la base de données
    const projects = await prisma.project.findMany;
    // Retourner les projets en tant que réponse JSON
    res.status(200).json(projects);
    console.log(projects);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des projets" });
  }
}
