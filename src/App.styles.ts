import  IconButton from '@material-ui/core/IconButton';
import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: 40px;

    .header {
        text-align: center;
        color: #020d40;
        font-family: Arial, Helvetica, sans-serif;

        p {
            color: #020d40;
            font-family: Arial, Helvetica, sans-serif;
        
        }
    }
`;

export const StyledButton = styled(IconButton)`
    position: fixed;
    z-index: 100;
    right: 20px;
    top: 20px;
`