import json
import urllib2

data = json.load(urllib2.urlopen('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20(%22USDINR%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback='))

usdtoinr= int(float(data['query']['results']['rate']['Rate']))
print "current rate(usd to inr)= "+ str(usdtoinr)
# Displaying dollar amounts in words

def dollarword(dollar):
	trillion=int(dollar/1000000000000)
	trillions=str(trillion)
	dollar=dollar%1000000000000
	billion=int(dollar/1000000000)
	billions=str(billion)
	dollar=dollar%1000000000
	million=int(dollar/1000000)
	millions=str(million)
	dollar=dollar%1000000
	thousand=int(dollar/1000)
	thousands=str(thousand)
	dollar=dollar%1000
	rest=dollar
	rests=str(rest)
	print(str(trillions)+" trillion "+str(billions)+" billion "+str(millions)+" million "+str(thousands)+" thousand and "+str(rests)+" dollars")

def rupeeword(rupee):
	crore=int(rupee/10000000)
	crores=str(crore)
	rupee=rupee%10000000
	lakh=int(rupee/100000)
	lakhs=str(lakh)
	rupee=rupee%100000
	thousand=int(rupee/1000)
	thousands=str(thousand)
	rupee=rupee%1000
	rest=rupee
	rests=str(rest)
	print(crores+" crore "+lakhs+" lakh "+thousands+" thousand and "+rests+" rupees")


menu= int(input("1 for usd to inr; 2 for inr to usd\nNote: Do not enter leading zeros\n"))
if(menu==1):
  dollar=int(input("Enter dollar amount\n"))
  print("dollar amount:")
  print(dollar)
  dollarword(dollar)
  rupee=int(dollar*usdtoinr)
  print("rupee amount:")
  print(rupee)
  rupeeword(rupee)
elif(menu==2):
  rupee=int(input("Enter rupee amount\n"))
  print("rupee amount:")
  print(rupee)
  rupeeword(rupee)
  dollar=int(rupee/usdtoinr)
  print("dollar amount:")
  print(dollar)
  dollarword(dollar)
else:
  print("invalid input, restart")

quit()
# keepopen=input()
