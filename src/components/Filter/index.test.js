import React from 'react';
import { Filter } from './index';
import renderer from 'react-test-renderer';
import testData from '../../static/testData/fakeData.json'


describe ('Test Filter component with data', () => {
    let component;
    beforeEach(() => {
         component =renderer.create(
            <Filter suppliers = {testData.data}  filterSelectedSupplier={() => {}} resetFilter={()=> {}} />
        ) 
    })

    it( 'Component render the component match the snapshot', ()=> {
        expect(component.toJSON()).toMatchSnapshot();
    })

    

})
