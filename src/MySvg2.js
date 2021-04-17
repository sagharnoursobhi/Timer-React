import React from 'react'

import { styled } from '@material-ui/core/styles';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';


const MySvg2 = styled(PlayCircleOutlineIcon)({
    width: 100,
    height: 80,
    backgroundColor: 'red'
});

export default function StyledComponents(){
    return <MySvg2>StyledComponents</MySvg2>
}