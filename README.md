Design Draft

Api part:

Return  total count, limit, data.


Corresponding data entries:

	OrderBuyerStatus

	Delivery day

	Supplier


Application layer:

Feature one: ui of tables for the incoming data( supplier order information)

UI ：
	Header with logo
	Search bar with reset filter button
	
	Filter Logic:
	
	Reset Logic:
	
	table:
		Header 
		columns with dynamic label for supplier
		rules：
		In the same column if the attribute isPendingVendorOnboarding is true, add the tag “1st” as seen in the design. If false, do not add anything 
		In the same column if the attribute isBYOS is false, add the tag “Market” as seen in the design. If true, do not add anythin 

		Logic: if( hasA ) then show label A
			   if( hasB ) then show label B

	Mobile view:  using mixing to adjust mobile view with max width

	Reduce the width of columns, and change the font size?


Data layer:

	Store State -> 

		1.allOrders : array

		2.allVendors: [string]
	
		3.filter: [string]

	*also all the supplier loaded to filter when loaded asynchronously

	Store Dispatch:

		getFilterData(payload: supplier name/s? )

Unit test:

	Test the data entry
	Test each component
	Test the content, label existing,
	Test filter

	
