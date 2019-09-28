import { enumType } from "nexus";

export const QuestionType = enumType({
  name: "QuestionType",
  members: ["TEXT", "SELECT"],
});
