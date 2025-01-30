import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.project.createMany({
    data: [
        { id: "1", title: "FrontEnd", content: "Développement de l'interface utilisateur", url: "" },
        { id: "2", title: "BackEnd", content: "Création de la logique serveur et des API", url: "" },
        { id: "3", title: "FullStack", content: "Développement complet des projets, FrontEnd + BackEnd", url: "" },
        { id: "4", title: "Javascript ++", content: "Approfondissement des concepts avancés de JavaScript", url: "" },
    ],
  });

  console.log("✅ Données insérées !");
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());