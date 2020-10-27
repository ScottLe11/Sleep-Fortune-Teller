$("button").click(function(){
    let name = $(".nameInput").val();
    let age = $(".ageInput").val();
    let adjective = $(".adjectiveInput").val();
    let hours = $(".hours").val();
    let totalHours = hours*age*365;
    $("p").hide();
    $("input").hide();
    $("button").hide();
    $("h2").append(`<h4>${name} at age ${age}  you must have slept  ${adjective}  for about a total of ${totalHours} hours in your lifetime.</h4>`);
});