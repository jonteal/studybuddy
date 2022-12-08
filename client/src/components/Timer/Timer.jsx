import React from 'react'
import TimerModal from '../modals/TimerModal/TimerModal';

import './timer.css';

const Timer = () => {
  return (
    <div className='timer-container'>
      <TimerModal />
      <span className='time-display'>5:00</span>
    </div>
  )
}

export default Timer