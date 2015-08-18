$(function(){
	 var currencies = [
		{ value: 'Merry Manicures', data: 'salons/merry-manicures-san-francisco' },
		{ value: 'My Nails', data: 'salons/my-nails-san-francisco' },
		{ value: 'Beauty Company', data: 'salons/beauty-company-san-francisco' },
		{ value: 'V.W. Nail Care', data: 'salons/v-w-nail-care-san-francisco' },
		{ value: 'Nailtastic', data: 'salons/nailtastic-san-francisco-3' },
		{ value: 'Studio 800 Salon', data: 'salons/studio-800-salon-san-francisco' },
		{ value: 'Fairyland Spa', data: 'salons/fairyland-spa-san-francisco-3' },
		{ value: 'Mimi Hair & Nail Design', data: 'salons/mimi-hair-and-nail-design-san-francisco' },
		{ value: 'Milk +', data: 'salons/milk-san-francisco-2' },
		{ value: 'Pacific Nails', data: 'salons/pacific-nails-san-francisco' },
		{ value: 'Parlor', data: 'salons/parlor-san-francisco-3' },
	];


	$('#autocomplete').autocomplete({
		lookup: currencies,
		onSelect: function (suggestion) {
			// var thehtml = '<strong>Currency Name:</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + suggestion.data;
			// var thehtml = '<a href="' + suggestion.data + '">' + suggestion.value +'</a>';
			// $('#outputcontent').html(thehtml);
			location.href = "../" + suggestion.data
			// window.open('../' + suggestion.data);

		}
	});
});