import React from 'react';
import styled, { css } from 'styled-components';
import {Header1} from './Styleguide'


class AdminContent extends React.PureComponent {

    content = `
    <h1>Admin Content</h1>
    <ul>
      <li>Point 1</li>
      <li>Point 2</li>
    </ul>
  `
    render() {
        const { className, children } = this.props;
        return <div
            className={className}
            dangerouslySetInnerHTML={{__html: this.content}} />
    }

}


const StyledContent = styled(AdminContent)`
  color: red;
  h1 {
    ${Header1.componentStyle.rules}
  }
  li {
    color: green;
  }
`;

export default StyledContent;