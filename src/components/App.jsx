import user from '../data/user.json'
import datas from '../data/data.json'
import friend from '../data/friends.json'
import transactions from '../data/transactions.json'
import { Profile } from './profile/Profile'
import {Statistics} from './statistics/Statistics'
import { Friends } from './friendList/FriendList'
import { Transaction } from './transactions/Transactions'

export const App = () => {
    return (
    <>
        <Profile user={user} />
        <Statistics title="Upload stats" datas={datas} />
        <Friends friends={friend}/>
        <Transaction transactions={transactions} />
    </>
    );
};