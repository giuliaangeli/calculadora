import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #FAFAFA;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    border-radius: 15px;
    background-color: #1F1F1F;
    width: 60%;
    min-height: 350px;
    padding? 5px;
`

export const Grid = styled.div`
    display: grid;
    margin: 5px;
    gap: 10px;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: auto auto auto auto;
    grid-auto-flow: row;
`

