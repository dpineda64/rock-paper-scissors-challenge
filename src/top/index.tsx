import React from 'react';
import { TopContainer, TopTitle, Score } from './top.styled';

interface TopProps {
  title: string;
  score: number;
}

export default function top(props: TopProps) {
  return (
    <TopContainer>
      <TopTitle> {props.title} </TopTitle>
      <Score>
        <span> Score </span>
        <span> {props.score} </span>
      </Score>
    </TopContainer>
  );
}
