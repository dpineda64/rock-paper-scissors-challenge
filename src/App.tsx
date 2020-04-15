import React, { useState, useEffect } from 'react';
import Top from './top';
import Choice, { ChoiceType } from './choice';
import Result from './result';
import Rules from './rules';
import Quadrant from './quadrant';
import { didHumanWin } from './utils';

import choices, { Option } from './availableChoices';

function App() {
  const [selected, setSelected] = useState<ChoiceType | null>(null);
  const [houseSelected, setHouseSelected] = useState<ChoiceType | null>(null);
  const [deciding, setDeciding] = useState(false);
  const [win, setWin] = useState<boolean>(true);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const scoreStored = localStorage.getItem('score');
    if (scoreStored) setScore(Number(scoreStored));
  }, []);

  const _makeChoice = (c: ChoiceType) => {
    setDeciding(true);
    setSelected(c);

    // mimic async operation
    setTimeout(() => {
      const machinePicked: Option = choices[~~(Math.random() * choices.length)];
      const didWin = didHumanWin(c, machinePicked);
      setWin(didWin);
      setHouseSelected(machinePicked.name);
      const newScore = didWin
        ? score + 1
        : c === machinePicked.name
        ? score
        : score - 1;
      setScore(newScore);
      setDeciding(false);
      localStorage.setItem('score', newScore.toString());
    }, 1000);
  };

  const _playAgin = () => {
    setWin(false);
    setHouseSelected(null);
    setSelected(null);
  };
  return (
    <>
      <Top title="Rock Paper Scissors" score={score} />
      <Quadrant decided={!deciding} resultOnly={selected !== null}>
        {!selected ? (
          choices.map(({ name }: any) => (
            <Choice
              key={name}
              variant={name}
              onClick={e => _makeChoice(name)}
            />
          ))
        ) : (
          <Result
            win={win}
            humanChoice={selected}
            houseChoice={houseSelected!}
            deciding={deciding}
            playAgain={_playAgin}
            draw={selected === houseSelected}
          />
        )}
      </Quadrant>
      <Rules />
    </>
  );
}

export default App;
