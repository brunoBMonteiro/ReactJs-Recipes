import styled from 'styled-components';

export const Container = styled.div`
    h2 { 
        text-align: center;
        color: var(--text-title);
    }

    .cards {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    .card {
        border: 1px solid black;
        margin: 0 auto;
        margin-bottom: 15px;
        width: 180px;
        height: 200px;
        background-color: var(--background);
    }

    img { 
        width: 100%;
        height: 100px;
    }

    h3 {
        text-align: center;
    }

    h4 {
        font-size: 14px;
        text-align: center;
        color: #777777;
    }
    
`