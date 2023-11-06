import user from './user.json'
import datas from './data.json'
import friend from './friends.json'
import transactions from './transactions.json'
import { Profile } from '../profile/Profile'
import {Statistics} from '../statistics/Statistics'
import { Friends } from '../friend-list/FriendList'
import {Transaction} from '../transactions/Transactions'


export const App = () => {
    return (
    <>
        <Profile user={user} />;
        <Statistics datas={datas} />
        <Friends friends={friend} />
        <Transaction transactions={transactions} />
    </>
    );
};