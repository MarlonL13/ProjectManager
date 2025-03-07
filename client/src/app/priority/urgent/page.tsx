import React from 'react'
import ReusablePriorityPage from '../reusablePriorityPage'
import { Priority } from '@/state/api'

const Urgent = () => {
  return (
    <div>
        <ReusablePriorityPage priority={Priority.Urgent} />
    </div>
  )
}

export default Urgent