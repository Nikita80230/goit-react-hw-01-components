import { Profile } from "./Profile";
import { Statistics } from "./Statistics";

import userData from '../user.json';
import statisticsData from '../data.json';

export const App = () => {
  return (
    <div
      style={{
        
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile user={userData} />
      <br />
      <Statistics statistics={statisticsData} />
    </div>
    

  );
};
