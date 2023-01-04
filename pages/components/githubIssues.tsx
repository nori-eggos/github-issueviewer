import React, { useState } from 'react';
import fetchIssues from '../api/github'
//import useSWR from 'swr'
//import fetcher from '../../lib/fetcher'
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Box } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Issues({name, repo}:{name: string, repo:string}) {

  //const {data, error} = useSWR('api/github', fetcher)
    //const issues = data?.issues


  const issues = fetchIssues(name, repo)
    const [hasMore, setHasMore] = useState(true);
    const [displayedIssues, setIssues] = useState(issues.slice(0, 25))   
    

    return (
      <div>
        There are {issues? issues.length : "nope"} issues and {displayedIssues.length} are being shown!
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <InfiniteScroll
        dataLength={displayedIssues.length}
        next={issues.slice(displayedIssues.length-1, displayedIssues.length+25)}
        hasMore={hasMore}
        loader={<h3> Loading...</h3>}
        endMessage={<h4>Nothing more to show</h4>}
      >
          <List>
            {displayedIssues.map(issue => (
          <ListItem disablePadding>
            <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${issue.user.id}`}
                  src={issue.user.avatar_url}
                />
              </ListItemAvatar>
        <ListItemText primary={issue.number} secondary={issue.user.login} />
          </ListItem>
            ))}
          </List>
          </InfiniteScroll>
      </Box>
  </div>
    )
}


