import React from 'react';
<<<<<<< HEAD
import { useContext } from 'react';
=======
>>>>>>> c30b20f3d371bebde482a103f1f49e70a3816c29
import { useEffect } from 'react';
import { useState } from 'react';
import ChildFunction from './ChildFunction';
import { ProfileContext } from './ProfileContext';

export default function FunctionalComponent() {
<<<<<<< HEAD
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');

  const { profile } = useContext(ProfileContext);
  // useEffect(() => {
  //   console.log('every time that renders');
  // });
  // useEffect(() => {
  //   console.log('run once at first and never more');
  // }, []);
  // useEffect(() => {
  //   console.log('run first and only when text2 is updated');
  // }, [text2]);
  return (
    <div className='component'>
      <h1>Functional Component</h1>
      <h2>Hi, my name is {profile.name}</h2>
      <h2>{text}</h2>
      <input
        type='text'
        value={text2}
        onChange={(e) => setText2(e.target.value)}
      />
      <ChildFunction text={text} setText={setText} />
=======
  const [name, setName] = useState('');
  const [name2, setName2] = useState('');

  // useEffect(() => {
  //   console.log('run once and never more');
  // }, []);
  // useEffect(() => {
  //   console.log('runs every render');
  // });
  // useEffect(() => {
  //   console.log('runs at first and then only when name updates');
  // }, [name]);
  return (
    <div className='component'>
      <h1>Functional Component</h1>
      <h2>Hello, {name}!</h2>
      <input
        type='text'
        value={name2}
        onChange={(e) => setName2(e.target.value)}
      />
      <ChildFunction name={name} setName={setName} />
>>>>>>> c30b20f3d371bebde482a103f1f49e70a3816c29
    </div>
  );
}
