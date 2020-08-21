Design Draft

Api part:

Return  total count, limit, data.


Corresponding data entries: {
    Status

    Delivery date

    Vendor

    Price
}

                                


Application layer:
    UI :
        1.Header with logo
        2.Search bar with reset filter button
        
        Filter Logic:
            Add Supplier name to Storage
        
        Reset Logic:
            Remove all the suppliers from Storage 

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

        Mobile view:  using mixing to adjust mobile view with max width

                     Reduce the width of columns, and change the font size?


Data layer:

	Store State -> 

		1.allOrders : array (contains the data from api)

		2.allVendors: [string] ( Generated when receive the api returned data. Used by filter component)
	
		3.filter: [string] ( empty at start, used by filter component)

	*also all the supplier loaded to filter when loaded asynchronously

	Store Dispatch:

		getFilterData(payload: supplier name/s? )

Unit test:

	Test the data entry
	Test each component
	Test the content, label existing,
	Test filter

	
