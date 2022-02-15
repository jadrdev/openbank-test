import React from 'react'
import { shallow } from "enzyme";

import ProductInformation from "../../../views/ProductInformation/ProductInformation";

describe('Pruebas en el componente ProductInformation', () => {
    test('Debe de verse', () => {
        const wrapper = shallow(<ProductInformation />)
        expect(wrapper).toMatchSnapshot();
    })
});

