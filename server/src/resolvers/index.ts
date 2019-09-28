import { AuthPayload } from './AuthPayload'
import { Mutation } from './Mutation'
import { Post } from './Post'
import { Query } from './Query'
import { User } from './User'
import { Assessment } from './Assessment'
import { Question } from './Question'
import { QuestionOption } from './QuestionOption'

export const resolvers = {
  Assessment,
  QuestionOption,
  Query,
  User,
  Post,
  Mutation,
  AuthPayload,
}
