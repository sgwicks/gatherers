import React from 'react';

const Instructions = () => {
  return (
    <section className='instructions'>
      <h2 className='instructionsH2'>Instructions</h2>
      <ol>
        <li>Click on a square to build a tent (costs 1 apple)</li>
        <li>Click on an apple when it's on your tent to add to stockpile</li>
        <li>Lose 1 apple every 10 seconds</li>
        <li>Tents decay after 4 seconds</li>
        <li>New apples appear every 1 second</li>
        <li>Apples decay after 5 seconds</li>
        <li>You lose when you run out of apples</li>
        <li>There is no winning. How long can you last?</li>
      </ol>
    </section>
  );
};

export default Instructions;
