// node_modules
import styled, {
  injectGlobal
} from 'styled-components';


// styled component
export const ValidateError = styled.div`
  &&& {
    font-size: 12px;
    color: #bd081c;
    white-space: nowrap;
  }
`;

export const globalStyles = injectGlobal`
  #input {
  }
`;
