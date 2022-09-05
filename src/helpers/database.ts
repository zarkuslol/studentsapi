import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class DatabaseFunctions {
    async select() {
        const student = await prisma.student.findMany();
        return student;
    }
}
