import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then(response => {
      console.log(response);

      setActivities(response.data);
    })
  }, [])

  const activityList: any = [];
  activities.forEach((item: any) => activityList.push(
    <List.Item key={item.id}>
      {item.title}
    </List.Item>
  ));

  return (
    <div>
      <Header as='h2' icon='users' content='Reactivities' />
      <List>
        {activityList}
      </List>
    </div>
  );
}

export default App;