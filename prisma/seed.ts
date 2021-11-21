import { languages } from "./seeds/languages";
import { modules } from "./seeds/modules";
import { industries } from "./seeds/industries";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.language.createMany({
    data: languages,
  });

  await prisma.module.createMany({
    data: modules,
  });

  await prisma.industry.createMany({
    data: industries,
  });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
