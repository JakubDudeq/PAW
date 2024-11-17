const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    try {
        console.log("Seeding database...");

        const categories = await prisma.category.createMany({
            data: [
                { name: "Technology" },
                { name: "Health" },
                { name: "Lifestyle" },
            ],
        });

        console.log(`Added ${categories.count} categories.`);

        const allCategories = await prisma.category.findMany();

        for (const category of allCategories) {
            for (let i = 1; i <= 3; i++) {
                const post = await prisma.post.create({
                    data: {
                        title: `Post ${i} in ${category.name}`,
                        content: `This is a sample post for the category ${category.name}.`,
                        categoryId: category.id,
                    },
                });

                console.log(`Added post: ${post.title}`);

                for (let j = 1; j <= 2; j++) {
                    const comment = await prisma.comment.create({
                        data: {
                            content: `Comment ${j} on post ${post.title}`,
                            postId: post.id,
                        },
                    });
                    console.log(`Added comment: ${comment.content}`);
                }
            }
        }

        console.log("Seeding complete.");
    } catch (error) {
        console.error("Error seeding database:", error);
    } finally {
        await prisma.$disconnect();
    }
}

seed();
