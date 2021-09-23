import styled from 'styled-components';

export const Container = styled.header`
    background-color: var(--shape);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    
    padding: 0 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 { 
        color: var(--text-title);
    }

    a { 
        text-decoration: none;
        color: var(--text-title);
    }
`;