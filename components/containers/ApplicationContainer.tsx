import styled from 'styled-components';

/**
 * this lays out the content of the page so there is a list of jokes on one side
 * and a display panel on the other
 */
const ApplicationContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-template-rows: 100%;
    grid-gap: 0.5rem;
    align-items: flex-start;
    height: 90vh;
`;

export default ApplicationContainer;
