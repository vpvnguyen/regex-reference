function validate() {
  // dirty string
  const dirtyString = "some@some~!@#$%^&*()_+`-=~!@#$%^&*()_+`-=.com";

  var phoneNumber = document.getElementById("phone-number").value;
  const address1 = document.getElementById("address1").value;
  var postalCode = document.getElementById("postal-code").value;
  var phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
  const address1RGEX = /^\d+\s[A-z]+\s[A-z]+/;
  var postalRGEX = /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i;
  var phoneResult = phoneRGEX.test(phoneNumber);
  const address1Result = address1RGEX.test(address1);
  var postalResult = postalRGEX.test(postalCode);

  // replaced
  // characters needs to be within [] ?
  // "=" and "-" needs to be escaped
  var cleanString = dirtyString.replace(/[|&;$%@"<>()+,~!#^*_-`\=\-]/g, "");
  const replacedPhoneNumber = phoneNumber.replace(phoneRGEX, "");

  alert(
    `phone: ${phoneResult}, address1: ${address1Result}, zipcode: ${postalResult}`
  );

  alert(`${cleanString}`);

  return false;
}
