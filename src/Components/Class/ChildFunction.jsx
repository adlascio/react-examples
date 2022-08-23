import React from 'react';

export default function ChildFunction(props) {
<<<<<<< HEAD
=======
  const { name, setName } = props;
>>>>>>> c30b20f3d371bebde482a103f1f49e70a3816c29
  return (
    <div className='component'>
      <h1>Child Function</h1>
      <input
        type='text'
<<<<<<< HEAD
        value={props.text}
        onChange={(e) => props.setText(e.target.value)}
=======
        value={name}
        onChange={(e) => setName(e.target.value)}
>>>>>>> c30b20f3d371bebde482a103f1f49e70a3816c29
      />
    </div>
  );
}
