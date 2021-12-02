import { languages } from "./seeds/languages";
import { modules, i18nModules } from "./seeds/modules";
import { industries, i18nIndustries } from "./seeds/industries";
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

  await prisma.i18nModule.createMany({
    data: i18nModules,
  });

  await prisma.i18nIndustry.createMany({
    data: i18nIndustries,
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
