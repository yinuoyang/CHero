Design Document

Github repository link:
    https://github.com/yinuoyang/CHero

To run: 
    git clone the repository and yarn start to run on the localhost


Deploy version:

    https://master.d22r9j86xep3qq.amplifyapp.com/


To run unit test:

    After clone from git repository:
    run:
     yarn test

    to run the unit test for app


Bonus: 

    1. mobile friendly
    2. self made select for filter

Potential problem and things can be improve:

    1. When loading a data, we could use the lazy and suspense to have a loading component
    2. Not satisfied with the hover in menu options, Maybe we could discuss a better way of doing it
    3. On mobile view there is a problem that I can not see the box shadow on my phone end, maybe we could disscuss about it.
                                
Application layer:

    UI :
        1.Header with logo
        2.Search bar with reset filter button
        
        Filter Logic:
            Add Supplier name to Storage

            Reset button shows all supplier filter (or manually select all supplier),

            add one filter to filter out a specific supplier 

        
        Reset Logic:
            change back to the data source to tableData in redux

        Table:
            Header 
            columns with dynamic label for supplier
            
            Rules：
                In the same column if the attribute isPendingVendorOnboarding is true, add the tag “1st” as seen in the design. If false, do not add anything 
                In the same column if the attribute isBYOS is false, add the tag “Market” as seen in the design. If true, do not add anythin 

                -> {
                    Translated logic: if( hasA ) then show label A
                                      if( hasB ) then show label B
                    }

        Mobile view:  1.using media query to adjust mobile view with max width

                      2.Reduce the width of columns, and change the font size

        Bonus: 
            1.Customized drop down

            2.mobile



Data layer:

	Store State
    
        table:
            1.tableData : array : contains the data from api

            2.total: string : Generated when receive the api returned data. Used by filter component
        
            3.limit: string : empty at start, used by filter component

            4. offset: string : use for further page pagination

            5. shownData array: initially empty, changed by dispatch keyword supplier filter, reset change it back to all data.

            6. supplierData: array : all the supplier loaded to filter when loaded asynchronously

	Store reducer and actions:

        FILTER_DATA : filter the table data in store 

        GET_TABLE_DATA : Load all the table data from api call

        RESET_FILTER : Reset the showData in store and show all data


	
