// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { Videos, ChannelCard } from './';
import { fetchChannelDetailsFromAPI, fetchChannelVideosFromAPI, fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [channelVideos, setChannelVideos] = useState([]);

  useEffect(() => {
    fetchChannelDetailsFromAPI(id).then((response) => {
      console.log('channel detail ', response);
      setChannelDetail(response);
    });

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(({ data }) => {
      setChannelVideos(data.items);
      console.log(data.items);
    });
  }, [id]);

  return (
    <Box minHeight={'95vh'}>
      <Box>
        {/* gradient div */}
        <div style={{ background: 'linear-gradient(to right, #e52d27, #b31217)', height: '300px', zIndex: 10 }} />
        <ChannelCard url={channelDetail?.avatar[channelDetail?.avatar?.length - 1]?.url} channelId={channelDetail?.channelId} title={channelDetail?.title} subscribers={channelDetail?.stats?.subscribersText} marginTop='-110px' />
      </Box>

      <Box sx={{ display: 'flex', p: 2 }}>
        <Videos videos={channelVideos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
