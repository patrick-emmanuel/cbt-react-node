import { AbilityBuilder } from '@casl/ability'

function subjectName(item) {
  if (!item || typeof item === 'string') {
    return item
  }

  return item.__type
}

export const defineAbility = (user) => {
  return AbilityBuilder.define({ subjectName }, can => {
    if (user.role === 'ADMIN') {
      can('create', 'assessment');
    }
  });
}
