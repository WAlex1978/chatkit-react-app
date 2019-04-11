import styled from 'styled-components';
import image from '../../images/background.jpg';

const LoginBackground = styled.div`
    background-color: rgb(228, 231, 238);
    background-image: url(${props => props.image ? image : null});
    background-size: cover;
    background-position: center;
    font-family: 'Roboto', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
`

export default LoginBackground;