import styled from 'styled-components/macro'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    .btn-exit {
        position: relative;
        top: -97%;
        left: 20px;
        font-size: 50px;
        visibility: hidden;
        background-color: transparent;
        border: none;
        color: white;
        cursor: pointer;
        &:hover {
            opacity: 0.7;
        }
    }
    video {
        width: 100%;
        height: 100%;
        margin: auto;
    }
`