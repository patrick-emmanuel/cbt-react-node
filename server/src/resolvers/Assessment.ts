import { objectType } from 'nexus'

export const Assessment = objectType({
  name: 'Assessment',
  definition(t) {
    t.model.id()
    t.model.createdAt()
    t.model.updatedAt()
    t.model.published()
    t.model.title()
    t.model.content()
    t.model.author()
  },
})
