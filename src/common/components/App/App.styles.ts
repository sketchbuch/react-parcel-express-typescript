import styled from 'styled-components';

export const StyledApp = styled.div`
  text-align: center;
  font-size: 2rem;
`;
StyledApp.displayName = 'StyledApp';

export const StyledPara = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 1rem;
  padding-top: 20px;
`;
StyledPara.displayName = 'StyledPara';

export const StyledLoadingMessage = styled(StyledPara)`
  color: #999;
`;
StyledLoadingMessage.displayName = 'StyledLoadingMessage';

export const StyledErrorMessage = styled(StyledPara)`
  color: red;
`;
StyledErrorMessage.displayName = 'StyledErrorMessage';

export const StyledUl = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  list-style: none;
  margin: 0 auto;
  padding: 0;
`;
StyledUl.displayName = 'StyledUl';

export const StyledLi = styled.li`
  cursor: pointer;
  display: inline-block;
  padding: 10px;
  text-align: center;

  &:not(:first-child):before {
    content: "|";
    cursor: default;
    display: inline-block;
    padding-right: 16px;
    position: relative;
  }
`;
StyledLi.displayName = 'StyledLi';
