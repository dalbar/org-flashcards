import { types } from "mobx-state-tree";

const CardState = types.model({
  hiddenAnswers: types.boolean,
  question: types.string,
  answers: types.array(types.string)
}).actions(self => ({
  setHiddenAnswers(value){
    self.hiddenAnswers = value;
  }
}));

export default CardState.create({hiddenAnswers: true, question: "How old are you?", answers: ["1", "2", "I do not know"]});
