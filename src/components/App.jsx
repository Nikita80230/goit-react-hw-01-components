import { Profile } from "./Profile";
import { Statistics } from "./Statistics";
import { FriendList } from "./FriendList";
import { TransactionHistory } from "./TransactionHistory";

import userData from '../user.json';
import statisticsData from '../data.json';
import friendsData from '../friends.json';
import transactionsData from '../transactions.json'


export const App = () => {
  return (
    <div
      style={{
        
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile user={userData} />
      <br />
      <Statistics statistics={statisticsData} />
      <br />
      <FriendList friends={friendsData} />
      <br />
      <TransactionHistory transactionsData={transactionsData} />
    </div>
    

  );
};
