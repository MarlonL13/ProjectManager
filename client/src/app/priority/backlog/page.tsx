import React from 'react'
import ReusablePriorityPage from '../reusablePriorityPage'
import { Priority } from '@/state/api'

const Backlog = () => {
  return (
    <div>
        <ReusablePriorityPage priority={Priority.Backlog} />
    </div>
  )
}

export default Backlog