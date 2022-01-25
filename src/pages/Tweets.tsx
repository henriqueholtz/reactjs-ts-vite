import { useState, useCallback } from 'react'
import { Tweet } from '../components/Tweet'

export function Tweets() {
    const [ tweets, setTweets ] = useState<string[]>(['Tweet 1', 'Tweet 2'])
  
    const createTweet = useCallback(() => {
      setTweets(state => [...state, 'New Tweet'])
    }, [setTweets]);

    return (
        <>
            <button onClick={createTweet}>Create Tweet</button>
            
            {tweets.map(tweet => {
                return <Tweet text={tweet} />
            })}
        </>
    )
}