// @ts-nocheck
import React from 'react';
import { Stack, Box } from '@mui/material';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <div style={{ minHeight: '95vh', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif' }}>Loading...</div>;

  return (
    <Stack direction={direction || 'row'} justifyContent='center' flexWrap='wrap' gap={2}>
      {videos.map((video, index) => (
        <Box key={/* video.id.videoId ? video.id.videoId : video.id.channelId */ index}>
          {video.id.videoId && <VideoCard video={video} />}
          {video.id.channelId && <ChannelCard channelDetail={video} channelId={video?.id?.channelId} url={video?.snippet?.thumbnails?.high?.url} subscribers='' title={video?.snippet?.title} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
