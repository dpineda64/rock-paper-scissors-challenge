import React, { useState } from 'react';
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

  const _makeChoice = (c: ChoiceType) => {
    setDeciding(true);
    setSelected(c);

    // mimic async operation
    setTimeout(() => {
      const machinePicked: Option = choices[~~(Math.random() * choices.length)];
      const didWin = didHumanWin(c, machinePicked);
      setWin(didWin);
      setHouseSelected(machinePicked.name);
      setScore(
        didWin ? score + 1 : c === machinePicked.name ? score : score - 1,
      );
      setDeciding(false);
    }, 1000);
  };

  const _playAgin = () => {
    setWin(false);
    setHouseSelected(null);
    setSelected(null);
  };
  console.log(selected !== null);
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
            draw={selected === houseSelected}
            win={win}
            humanChoice={selected}
            houseChoice={houseSelected!}
            deciding={deciding}
            playAgain={_playAgin}
          />
        )}
      </Quadrant>
      <Rules />
    </>
  );
}

export default App;
