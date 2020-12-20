/* eslint-disable no-unused-vars */
import React from 'react';
import styled, { keyframes } from 'styled-components';

function LoadingIndicator({ className }) {
    const ldsEllipsis = keyframes`
    0% {
        top: 36px;
        left: 36px;
        width: 0;
        height: 0;
        opacity: 1;
    }
    100% {
        top: 0px;
        left: 0px;
        width: 72px;
        height: 72px;
        opacity: 0;
    }
`

    const Root = styled.div`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
`

    const Content = styled.div`
    position: absolute;
    background: rgb(222, 220, 220);
    border: 4px solid #5dba5d;
    opacity: 1;
    border-radius: 50%;
    animation: ${ldsEllipsis} 0.7s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    &:nth-child(2) {
        animation-delay: -0.5s;
    }
`
    return (
        <Root>
            <Content className={className}>
            </Content>
            <Content className={className}>
            </Content>
        </Root>
    )
}

export default LoadingIndicator;