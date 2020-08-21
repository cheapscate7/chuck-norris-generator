import styled, { css } from 'styled-components';

const ApplicationContainer = styled.section`
    display: grid;

    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: 0.5rem;
    align-items: flex-start;
`;

export default ApplicationContainer;
