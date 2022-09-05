import { PrismaClient } from "@prisma/client";
import { StudentType } from "./student";

const prisma = new PrismaClient();

export class DatabaseFunctions {
    async selectAll() {
        const student = await prisma.student.findMany();

        prisma.$disconnect;
        return student;
    }

    async selectOne(id: string) {
        const student = await prisma.student.findUnique({
            where: {
                id: parseInt(id),
            }
        });

        prisma.$disconnect;
        return student;
    }

    async create(student: StudentType) {
        const newStudent = await prisma.student.create({
            data: {
                name: student.name,
                grade: student.grade,
                year: parseInt(student.year)
            }
        });

        prisma.$disconnect;
        return newStudent;
    }

    async delete(id: string) {
        const deletedStudent = await prisma.student.delete({
            where: {
                id: parseInt(id),
            }
        });

        prisma.$disconnect;
        return deletedStudent;
    }
}
