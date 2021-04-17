import StopIcon from '@material-ui/icons/Stop';
import { styled } from '@material-ui/core/styles';

const MySvg5 = styled(StopIcon)({
    width: 100,
    height:80,
    backgroundColor : 'orange'
});

export default function StyledComponents(){
    return <MySvg5>Styled Components</MySvg5>
}