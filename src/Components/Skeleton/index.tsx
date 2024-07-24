import React from 'react';
import { Grid, Skeleton, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled Box to match your card design
const CardSkeleton = styled(Box)(({ theme }) => ({
    userSelect: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'start',
    justifyContent: 'flex-start',
    position: 'relative',
    fontSize: '16px',
    lineHeight: '18px',
    textTransform: 'capitalize',
    borderRadius: '10px',
    fontWeight: 700,
    gap: '0.25rem',
    wordBreak: 'break-word',
    boxShadow: 'none',
    border: 'none',
    width: '120px',
    height: '120px',
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: theme.palette.grey[300], // Skeleton background color
}));

const SkeletonCards = () => {
    return (
        <>
            {Array.from(Array(9)).map((_, index) => (
                    <CardSkeleton key={index}>
                        <Skeleton variant="rectangular" width="100%" height="100%" />
                    </CardSkeleton>
            ))}
        </>
    );
};

export default SkeletonCards;