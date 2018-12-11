import styled from 'styled-components';

const Wrapper = styled.div `
  display: block;
  width: 100%;
  position: relative;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.container.gutter};
`;

export default Wrapper;
