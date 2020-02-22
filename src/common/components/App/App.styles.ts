import styled from 'styled-components';

export const StyledApp = styled.div`
  text-align: center;
  font-size: 2rem;
`;
StyledApp.displayName = 'StyledApp';

export const Para = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 1rem;
  padding-top: 20px;
`;
Para.displayName = 'Para';

export const LoadingMessage = styled(Para)`
  color: #999;
`;
LoadingMessage.displayName = 'LoadingMessage';

export const ErrorMessage = styled(Para)`
  color: red;
`;
ErrorMessage.displayName = 'ErrorMessage';
