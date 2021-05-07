import React from 'react';
import MyInfo from './MyInfo'


function App() {
  return (
       <div>
          <MyInfo contact={{name: 'Marina', age: 31, job: 'Front-end-developer'}}/>
          <MyInfo contact={{name: 'Arina', age: 33, job: 'Business woman'}}/>
          <MyInfo contact={{name: 'Lucia', age: 18, job: 'Student'}}/>
       </div>
  );
}

export default App;
