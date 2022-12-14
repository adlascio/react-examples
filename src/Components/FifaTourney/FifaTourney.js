import React, { useState } from 'react';
import players from './data/playersData';
import matches from './data/matchesData';
import MatchesList from './MatchesList';
import PlayersList from './PlayersList';
import './fifa.css';

export default function FifaTourney() {
  const [playersData, setPlayersData] = useState(players);
  const [matchesData, setMatchesData] = useState(matches);
  const setWinner = (matchId, winnerId) => {
    //make a copy of matches data
    const newMatchesData = [...matchesData];
    // find match obj based on id
    const matchFound = newMatchesData.find((match) => match.id === matchId);
    // copy unchanged properties of match and update winner
    const newMatch = { ...matchFound, winner: winnerId };
    // create a new array of matches, replacing only the match that was updated
    const updatedMatchesData = newMatchesData.map((match) => {
      if (match.id === matchId) {
        return newMatch;
      }
      return match;
    });
    // update state of matches data to re-render
    setMatchesData(updatedMatchesData);
  };
  return (
    <div className='App'>
      <h1>Fifa Tourney</h1>
      <main>
        <PlayersList players={playersData} matches={matchesData} />
        <MatchesList
          players={playersData}
          matches={matchesData}
          setWinner={setWinner}
        />
      </main>
    </div>
  );
}
