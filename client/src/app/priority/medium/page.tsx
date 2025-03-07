import React from 'react'
import ReusablePriorityPage from '../reusablePriorityPage'
import { Priority } from '@/state/api'

const Medium = () => {
  return (
    <div>
        <ReusablePriorityPage priority={Priority.Medium} />
    </div>
  )
}

export default Medium