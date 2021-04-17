
import React from 'react'
import { styled } from '@material-ui/core/styles';
import AutorenewIcon from '@material-ui/icons/Autorenew';

const MySVg4 = styled(AutorenewIcon)({
    width: 100,
    height:80,
    backgroundColor : 'orange'
});

export default function StyledComponents(){
    return <MySVg4>Styled Components</MySVg4>
}