import { objectType } from 'nexus'

export const Question = objectType({
  name: 'Question',
  definition(t) {
    t.model.id()
    t.model.createdAt()
    t.model.updatedAt()
    t.model.content()
    // t.model.questionType()
    t.model.options()
  },
})
