import React from 'react'
import { styled } from '@material-ui/core/styles';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const MySvg1 = styled(HighlightOffIcon)({
    width: 80,
    height: 60,
    backgroundColor: 'white' 
});

export default function StyledComponents(){
    return <MySvg1>StyledComponents</MySvg1>;
}