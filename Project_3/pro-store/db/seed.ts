import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";
import { sampleData } from "./sampleData";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

export async function main() {
  await prisma.product.deleteMany();

  await prisma.product.createMany({ data: sampleData.products });
}

main();
