import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function fillDb() {
  await prisma.category.upsert({
    where: { categoryId: 1 },
    update: {},
    create: {
      category: 'Юридические услуги',
      tasks: {
        create: [
          {
            title: 'Быстро сделаем банкротом',
            description: 'Описание юридической услуги. Описание юридической услуги. Описание юридической услуги.',
            userId: '13',
            price: '1000',
            image: 'picture.png',
            address: 'ул. Пушкина, д. Колотушкина',
            tags: {
              create: [
                {
                  tagName: 'Юрист'
                }
              ]
            },
            city: 'Москва'
          },
        ]
      },
    }
  });
  await prisma.category.upsert({
    where: { categoryId: 2 },
    update: {},
    create: {
      category: 'Установка кондиционеров',
      tasks: {
        create: [
          {
            title: 'Качественная установка кондиционеров',
            description: 'Описание услуги. Описание услуги. Описание услуги.',
            userId: '14',
            price: '6000',
            image: 'picture-2.png',
            address: 'ул. Грибоедова, д. 25',
            tags: {
              create: [
                {
                  tagName: 'Установка техники'
                }
              ]
            },
            city: 'Москва'
          },
        ]
      },
    }
  });
  console.info('🤘️ Database was filled')
}

fillDb()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect()

    process.exit(1);
  })
