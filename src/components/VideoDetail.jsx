// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { /* Link,  */ useParams } from 'react-router-dom';
import { Box, Stack, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import ReactPlayer from 'react-player';
// import Videos from './Videos';
import { fetchVideoDetailsFromAPI /*, fetchFromAPI */ } from '../utils/fetchFromAPI';

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  // const [relatedVideos, setRelatedVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchVideoDetailsFromAPI(id).then((videoInfo) => {
      // console.log('Video details', videoInfo);

      setVideoDetail(videoInfo);
    });

    // fetchFromAPI(`search?q=${id}&part=snippet&type=video`).then(({ data }) => {
    //   console.log('related videos ', data.items);

    //   setRelatedVideos(data.items);
    // });
  }, [id]);

  const videoTitleStyling = {
    color: '#fff',
    p: 2,
    variant: 'h5',
    fontWeight: 'bold',
  };

  if (!videoDetail) return <div style={{ minHeight: '95vh', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif' }}>Loading...</div>;

  return (
    <Box minHeight={'95vh'}>
      <Stack direction='column'>
        <Box flex={1}>
          <Box sx={{ position: 'sticky', top: '86px' }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls />
            <Typography {...videoTitleStyling}>{videoDetail.title}</Typography>
            <Stack direction={'row'} justifyContent={'space-between'} py={1} px={2}>
              <Typography color='#fff'>
                {videoDetail?.author?.title}
                <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
              </Typography>
              <Stack direction='row' alignItems='center' gap='20px'>
                <Typography variant='body1' color='#fff' sx={{ opacity: '0.7' }}>
                  {parseInt(videoDetail?.stats?.views).toLocaleString()} views
                </Typography>
                <Typography variant='body1' color='#fff' sx={{ opacity: '0.7' }}>
                  {parseInt(videoDetail?.stats?.likes).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>

        {/* <Box alignItems='center' justifyContent='center' px={2} py={{ md: 1, xs: 5 }}>
        <Videos videos={relatedVideos} direction='row' />
      </Box> */}
      </Stack>
    </Box>
  );
};

export default VideoDetail;
