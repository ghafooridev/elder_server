// prisma/seed.ts
import 'dotenv/config';
import { PrismaClient, GAME_TYPE } from './generated/prisma';

const prisma = new PrismaClient();

async function main() {
  const games = [
    {
      name: 'pairs',
      slug: 'pairs',
      type: GAME_TYPE.MEMORY,
      publicPath: 'http://localhost:5108/games/memory/pairs/index.html',
    },
    {
      name: 'sudoku',
      slug: 'sudoku',
      type: GAME_TYPE.LOGIC,
      publicPath: 'http://localhost:5108/games/logic/sudoku/index.html',
    },
    {
      name: 'pong',
      slug: 'pong',
      type: GAME_TYPE.MOBILITY,
      publicPath: 'http://localhost:5108/games/mobility/pong/index.html',
    },
    {
      name: '2048',
      slug: '2048',
      type: GAME_TYPE.LOGIC,
      publicPath: 'http://localhost:5108/games/logic/2048/index.html',
    },
  ];

  for (const game of games) {
    await prisma.game.upsert({
      where: { slug: game.slug },
      update: {},
      create: game,
    });
  }

  console.log('✅ Games seeded successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
