import Photon from '@generated/photon'
const photon = new Photon()

async function main() {
  const user3 = await photon.users.create({
    data: {
      email: 'admin@cbt.com',
      name: 'Patrick',
      role: 'ADMIN',
      password: '$2b$10$ZjONRZAxqX2pLoPax2xdcuzABTUEsFanQI6yBYCRtzpRiU4/X1uIu', // "graphql"
      assessments: {
        create: {
          title: 'Watch the talks from Prisma Day 2019',
          description: 'https://www.prisma.io/blog/z11sg6ipb3i1/',
          published: true,
        },
      },
    },
  })
  console.log({ user3 })
}

main().finally(async () => {
  await photon.disconnect()
})
