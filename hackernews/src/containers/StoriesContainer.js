import React, {useEffect, useState} from 'react';
import { getStoryId } from '../services/hnApi'
import { Story } from '../components/Story'
import { GlobalStyle, StoriesContainerWrapper } from '../styles/StoriesContainerStyles';

export const StoriesContainer = () => {
    const [storyId, setStoryIds] = useState([]);
  
    useEffect(() => {
      getStoryId().then(data => setStoryIds(data))
    }, [])
  
    return (
      <>
        <GlobalStyle />
        <StoriesContainerWrapper data-test-id="stories-container">
          <h1>Hacker News Stories</h1>
          {storyId.map(storyId => <Story key={storyId} storyId={storyId}/>)}
        </StoriesContainerWrapper>
      </>
    )
  }
