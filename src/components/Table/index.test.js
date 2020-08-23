import React from 'react';
import {Table, dateFormatter} from './index';
import renderer from 'react-test-renderer';
import testData from '../../static/testData/fakeData.json'


describe ('Test table component with data', () => {
    let component;
    beforeEach(() => {
         component =renderer.create(
            <Table data = {testData.data} getTableData = {() => {}} showData = {[]}/>
        ) 
    })
    

    it( 'Component should render correct number of entries', ()=> {
        expect(component.toJSON()).toMatchSnapshot();
    })

    it('Data formatter function should return right date', () => {
        expect(dateFormatter('2020-02-02')).toBe('Feb. 2, 2020');
    })

})
