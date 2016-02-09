// inr to usd part
var usdtoinr;
$(document).ready(function() {
	var url="https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20(%22USDINR%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";
	var info = $.getJSON(url)
	 $.ajax({
	   url: url,
	   dataType: 'json',
	   success: function (data) {
	   	var rate=parseFloat(data.query.results.rate.Rate);
	   	rate=rate.toFixed(2);
     	console.log(rate);
    	document.getElementById("rate").innerHTML=rate;
    	usdtoinr=rate;
	   }
	 });
});

var Convertor = function() {

}
Convertor.prototype.convertINRtoUSD = function(inrvalue) {
	var dollar= parseFloat((inrvalue/usdtoinr).toFixed(2));
	console.log(dollar);
	var trillion=Math.floor(dollar/1000000000000);
	var trillions=trillion.toString();
	var dollar=dollar%1000000000000;
	var billion=Math.floor(dollar/1000000000);
	var billions=billion.toString();
	var dollar=dollar%1000000000;
	var million=Math.floor(dollar/1000000);
	var millions=million.toString();
	var dollar=dollar%1000000;
	var thousand=Math.floor(dollar/1000);
	var thousands=thousand.toString();
	var dollar=dollar%1000;
	var rest=dollar;
	var rests=rest.toString();
	var dollars=trillions+" trillion "+billions+" billion "+millions+" million "+thousand+" thousand and "+rests+" dollars.";
	return dollars;
}

Convertor.prototype.convertUSDtoINR = function(usdvalue) {
	var rupee= parseFloat((usdvalue*usdtoinr).toFixed(2));
	console.log(rupee);
	// enter python conversion code for word version
	var crore=Math.floor(rupee/10000000);
	var crores=crore.toString();
	var rupee=rupee%10000000;
	var lakh=Math.floor(rupee/100000);
	var lakhs=lakh.toString();
	var rupee=rupee%100000;
	var thousand=Math.floor(rupee/1000);
	var thousands=thousand.toString();
	var rupee=rupee%1000;
	var rest=rupee;
	var rests=rest.toString();
	var rupees=crores+" crore "+lakhs+" lakh "+thousands+" thousand and "+rests+" rupees.";
	// 
	return rupees;
}

myConv =new Convertor();

function convertinr(){
	var realinrVal= document.getElementById("inr").value;
	var realusdVal= myConv.convertINRtoUSD(realinrVal);
	document.getElementById("optextusd").innerHTML = realusdVal;
}

function convertusd(){
	var realusdVal= document.getElementById("usd").value;
	var realinrVal= myConv.convertUSDtoINR(realusdVal);
	document.getElementById("optextinr").innerHTML = realinrVal;
}