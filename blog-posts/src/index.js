import React from 'react';
import ReactDOM from 'react-dom';
import SingleComment from './SingleComment';

import prof1 from './img/prof1.png';
import prof2 from './img/prof2.jpg';
import prof3 from './img/prof3.jpg';
import UserCard from './UserCard';

const App=()=>{
return(
    <div className='ui comments'> 
      <UserCard>
       <SingleComment name='Abrish' 
                    date='today at 5:00'
                    text='I know how much painful it is. Thanks boss!'
                    prof={prof1}/> 
                    
        </UserCard>
        <UserCard>
                <SingleComment name='Selam'
                
                                    date='today at 5:00'
                                    text='I love you babe!'
                                    prof={prof2} /> 
        </UserCard>
        <UserCard>
                <SingleComment name='Bisrat'
            
                    date='today at 5:00'
                    text='Don;t turnout please!'
                    prof={prof3}  />
     </UserCard>
    </div>
     
)
}

ReactDOM.render(<App/>, document.querySelector('#root')); 