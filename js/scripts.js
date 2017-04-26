$(function () {
  $("#orderForm").submit(function(event) {
    var nameInput = $("input#name").val();
    var addressInput = $("input#address").val();
    var sizeInput = $("input.radioSize").val();
    var shipInput = $("input.radioShipping").val();
    var flavor = $("input:radio[name=flavor]:checked").val();
    var flavor = $("input:radio[name=flavor]:checked").val();

    $(".name").text(nameInput);
    $(".address").text(addressInput);
    $(".sizeRadio").

    $(".confirmationPage").show();

    event.preventDefault();
  });

});
