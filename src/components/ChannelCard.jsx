// @ts-nocheck
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channelId, url, subscribers, title, marginTop }) => {
  const boxStyling = { /* backgroundColor: '#1e1e1e', */ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop };

  const cardStyling = { height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' };

  const cardContentStyling = { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' /* , background: '#1e1e1e' */ };

  const cardMediaStyling = { borderRadius: '100%', width: '180px', height: '180px' };

  const checkCircleStyling = { ml: '5px', color: 'white', fontSize: 14 };

  return (
    <Box sx={{ boxShadow: 'none', width: { xs: '358px', md: '358px', height: '326px', margin: 'auto' } }} style={boxStyling}>
      <Link to={`/channel/${channelId}`}>
        <Card sx={{ width: { md: '320px', xs: '100%' }, boxShadow: 'none', borderRadius: 0 /* , background: '#1e1e1e' */, background: 'rgba(0, 0, 0, 0)' }} style={cardStyling}>
          <CardContent sx={cardContentStyling}>
            <CardMedia sx={cardMediaStyling} image={url || demoProfilePicture} />
            <Typography variant='h6' color='white'>
              {title}
              <CheckCircle sx={checkCircleStyling} />
            </Typography>
            {subscribers && (
              <Typography variant='subtitle2' color='gray'>
                {subscribers}
              </Typography>
            )}
          </CardContent>
        </Card>
      </Link>
    </Box>
  );
};

export default ChannelCard;
