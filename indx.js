let count = 0;

$("button").on('click', function(e) {
		
	e.preventDefault();

	if ($('#data').val() !=  "") {

		$(".list").append(`<div class="bullet">
								<div> ${$('#data').val()}</div>
								<button class="check"> Check </button>
								<button class="erase"> Erase </button>
							</div>`);
	}

	$('#data').val('');
});

$(".list").on("click", ".bullet>.check", function(e) {

	e.preventDefault();

	if ($(e.target).parent().find("div").attr("style")) 
		$(e.target).parent().find("div").attr("style", "");
	else
		$(e.target).parent().find("div").attr("style", "text-decoration: line-through;");
});

$(".list").on("click", ".bullet>.erase", function(e) {
	e.preventDefault();
	$(e.target).parent().remove();
});

