import React from 'react';
import {Header1} from './Styleguide'

const TomatoH1= Header1.extend`
	color: tomato;
  transform: translateX(0);
`;


export default ({ name }) => <div>
    <TomatoH1>Hello {name}!</TomatoH1>
</div>;
