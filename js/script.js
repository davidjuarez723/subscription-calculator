var subTypeElement = document.querySelector("#subscription");
var subDurationElement = document.querySelector("#months");
var result = document.querySelector(".result");
var subType = "basic";
var subDuration = 1;

subTypeElement.addEventListener("change", function (e) {
  subType = e.target.value;
  //console.log(subType);
  updateSubscriptionDiv();
});

subDurationElement.addEventListener("change", function (e) {
  subDuration = Number(e.target.value);
  //console.log(subDuration);
  updateSubscriptionDiv();
});

var updateSubscriptionDiv = function () {
  var monthlyCosts = 5;

  if (subType === "standard") {
    monthlyCosts = 7;
  } else if (subType === "premium") {
    monthlyCosts = 10;
  }

  var total = subDuration * monthlyCosts;
  result.innerText = `You have chosen a ${subDuration} month ${subType} plan for $${total}.`;
};
