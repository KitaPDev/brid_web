import { languages } from "./languages";
import { modules } from "./modules";
import { industries } from "./industries";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  for (let language of languages) {
    await prisma.language.create({
      data: language,
    });
  }

  for (let module of modules) {
    await prisma.module.create({
      data: module,
    });
  }

  for (let industry of industries) {
    await prisma.industry.create({
      data: industry,
    });
  }
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
