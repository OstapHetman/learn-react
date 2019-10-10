import React, {useEffect, useState} from 'react';
import { getStoryId } from '../services/hnApi'
import { Story } from '../components/Story'

export const StoriesContainer = () => {
    const [storyId, setStoryIds] = useState([]);
  
    useEffect(() => {
      getStoryId().then(data => setStoryIds(data))
    }, [])
  
    return (
      <>
        <h1>Hacker News Stories</h1>
        {storyId.map(storyId => <Story key={storyId} storyId={storyId}/>)}
      </>
    )
  }
