import React from 'react'
import { styled } from '@material-ui/core/styles';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';



const MySvg3 = styled(PauseCircleOutlineIcon)({
    backgroundColor : 'orange' , 
    width:100 ,
    height: 80
});

export default function StyledComponents(){
    return <MySvg3>Styled Components</MySvg3>
}