import styled from 'styled-components';

const Container = styled.div`
  width: 1200px;
  flex-wrap: wrap;
  display: flex;
  position: relative;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.container.gutter};
`;

export default Container;
