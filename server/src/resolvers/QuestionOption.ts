import { objectType } from 'nexus'

export const QuestionOption = objectType({
  name: 'QuestionOption',
  definition(t) {
    t.model.id()
    t.model.createdAt()
    t.model.updatedAt()
    t.model.content()
    t.model.correct()
  },
})
