import React from 'react';
import Choice, { ChoiceType } from '../choice';
import Selected from './choiced.styled';
import Message from './message.styled';
import Button from '../button';

interface ResultProps {
  humanChoice: ChoiceType;
  houseChoice: ChoiceType;
  win: boolean;
  draw: boolean;
  deciding: boolean;
  playAgain: () => void;
}

export default function result({
  win,
  draw,
  humanChoice,
  houseChoice,
  deciding,
  playAgain,
}: ResultProps) {
  return (
    <>
      <Selected decided={!deciding}>
        <span> you picked </span>
        <Choice variant={humanChoice} winner={!deciding && win} />
      </Selected>
      {!deciding && (
        <ResultMessage
          message={win ? 'You win' : draw ? 'Draw!' : 'You Lose'}
          playAgain={playAgain}
        />
      )}
      <Selected decided={!deciding}>
        <span> the house picked </span>
        <Choice
          variant={deciding ? 'empty' : houseChoice}
          winner={!win && !draw}
        />
      </Selected>
    </>
  );
}

function ResultMessage(props: any) {
  return (
    <Message>
      <h1> {props.message} </h1>
      <Button onClick={props.playAgain}> play again </Button>
    </Message>
  );
}
