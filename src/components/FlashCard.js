import React from "react";
import { observer, inject } from "mobx-react";

const transformToListEntry = answer => {
  return <li className="py-4"> {answer} </li>;
};

const actionButton = (text, action) => <button onClick={action} className="bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 mr-4 my-4 mt-8 border border-blue hover:border-transparent rounded float-right"> 
{text}
</button>

const FlashCard = props => {
  const { question, answers, hiddenAnswers, setHiddenAnswers}  = props.store
  const answerStyle = hiddenAnswers ? { filter: "blur(5px)" } : {};
  
  return (
    <div className="rounded shadow-lg overflow-hidden">
      <div className="py-5 px-10 text-center text-white font-semibold bg-blue">
        {question}
      </div>
      <ul className="list-reset px-4" style={answerStyle}>
        {answers.map(transformToListEntry)}
      </ul>
      <button onClick={() => {setHiddenAnswers(false)}} className="bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 mr-4 my-4 mt-8 border border-blue hover:border-transparent rounded float-right">
        reveal
      </button>
    </div>
  );
};

export default inject("store")(observer(FlashCard));
