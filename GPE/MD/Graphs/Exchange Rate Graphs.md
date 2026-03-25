---
tags:
  - GPE
  - Graph
lecNum: "5"
---
# Preamble
This will be a somewhat long one. I am going to do my best to hand-hold as much as possible and explain the graphs step by step, slowly increasing the complexity because while the final product looks intimidating it is really basic when you strip away the bullshit. So bear with me.

# Back to Supply and Demand

> [!img]+ Supply and Demand Graph
> ![[Pasted image 20260324203607.png]]

At the end of the day exchange rates are determined by what is (if you simplify it enough) supply and demand. So keep in mind for me that price is the Y axis, quantity is the X axis, supply is the inclined line and demand is the declined line.
# Exchange Rate Equations
$$e = \frac{HomeCurrency}{ForeignCurrency}$$
The **nominal exchange rate** (*e*) is the value of your currency divided by another nations currency. To put names to them (and match the lecture example) we will use Mexican pesos and US dollars.
$$e = \frac{peso}{dollar}$$
If e were to increase this would represent a **depreciation** of the peso (a fall in it's value). If *e* were to decrease this would represent an **appreciation** (a rise in it's value).
## But we use 1/*e*
Why? because when you divide 1 by *e* the relation to appreciation and depreciation flips which makes it more intuitive (natural feeling and logical) on a graph. With 1/*e* higher values represents an appreciation and a lower value a depreciation. Just remember that for *e* on it's own this is the opposite and we use 1/e to make it nicer on a graph.

> [!example]- Example
> If 1 USD is .80 CAD (Canadian dollars) then we can plug in .8 for *e* (because .80/1 = .8) and then use that in our 1/e equation to determine the following
> $$1usd = 1/.8 = 1.25cad$$ 

In practice this means that we can now draw the below Y axis

> [!img]+ 1/*e* charted on a Y axis
> ![[Pasted image 20260324211225.png]]
# Adding this to our supply and demand graph

> [!img]+ Exchange Rate Graph
> ![[Pasted image 20260324211537.png]]

So now we get to our exchange rate graph. Lets say for the peso. Notice that our Y axis is charting 1/*e*. While **it does not say Price** (P), that is still technically what it means. The exchange rate is the price to buy a currency using another. At the end of the day both price and exchange rates are a way to represent value. **Value** is what is charted on the Y in supply and demand as well as exchange rate graphs.

**The points on the Y axis** are as follows:
- 1/*e*<sub>0</sub> = equilibrium price of the peso (the value it 'desires' according to economic theory)
- 1/e<sub>1</sub> = this represents an **overvalued peso**. Its value is more than equilibrium meaning there is **excess supply** (which is illustrated on the graph) that will make it easier to obtain pesos, hence driving its value down (depreciation).
- 1/e<sub>2</sub> = this represents an **undervalued peso**. Its value is less than equilibrium meaning there is **excess demand** which will make pesos **more scarce** (harder to get), hence driving its value up (appreciation).

Q is still at the end of the day Quantity but there is a more complex way to represent this
# Trade-Based Model
This model represents how trade deficits can affect the movement of exchange rates. For this we use one of [[The International Finance Equations]] (review that note for the background on this):
$$S_F = Z - E$$
What this equation means is that, in this case Mexico's, trade deficit will be paid for by foreign savings (S<sub>F</sub>). 

Now let us look at this on the graph.
> [!img]+ Trade-Based Model of Exchange Rates
> ![[Pasted image 20260324214028.png]]

Notice that Q has turned into Z-E (aka S<sub>F</sub>). This shows that as the trade deficit (importing more than you export) increases, so does the supply of pesos. But when Mexicans buy imported products, from the USA for example, they are demanding fewer pesos because those products are purchased with dollars (at the time of import). So as the trade deficit increases, the amount of pesos available also increases.

## The demand curve and elasticity
Lets add the demand curve back in. You will see it is perfectly vertical **in the trade-based model** because it is treated perfectly inelastic. For the purposes of the midterm you can explain this to yourself by saying this model only considers currencies a means by which goods can be bought and sold and so everybody demands them the same amount no matter the exchange rate since everyone wants to buy things.

> [!img]+ Trade Based Exchange Rate Graph with a shift in Demand
> ![[Pasted image 20260324214800.png]]

This is representing a growth in foreign savings (F<sub>S</sub>) which causes the currency to **appreciate** (increase in value). The new equilibrium is the intersection between the dashed line (the new demand for pesos) and the supply of pesos. 

The vertical line on the left is the demand for pesos *before* an inflow of foreign savings (S<sub>F</sub>), the dashed line is the demand for pesos after an inflow of foreign savings. An inflow of foreigns savings increases demand because savings in Mexican accounts (or other investments) are made using pesos. 
# Assets-Based Model
Almost there stick with me. We now assume that currency is seen as an **asset**. In the trade based model we only consider it a means by which to buy other goods and services. Now we consider it as an asset because it is something that can appreciate or depreciate and hence something which can be invested in. Currency is therefore treated by some investors like a stock where they buy it with the expectation they can sell it later at a profit. All that is to say that investors will purchase the peso if they either:
- Expect the value of the peso to go up (relative to their own currency)
- Expect their own currency to go down (relative to the peso)
They expect a more **favorable** exchange rate in the future.

When we consider currency to be an asset, demand once again becomes elastic, meaning the line can once again be drawn on a decline like we are used to.

> [!img]+ Asset Based Exchange Rate Graph
> ![[Pasted image 20260324222710.png]]

If the price of the currency is currently at 1/e<sub>2</sub>, then investors want to invest in the currency because the excess demand will cause appreciation (represented by the upward arrow point to 1/e<sub>0</sub>).

If the price of the currency is currently at 1/e<sub>1</sub>, anyone who is currently invested in the currency will want to sell off because the excess supply will cause the currency to depreciate (represented by the downward arrow pointing to 1/e<sub>0</sub>)

If you invest in the peso when the exchange rate is 1 peso per 1 dollar, and then the value appreciates to be 1.1 peso per 1 dollar, you have gained 10%, in this case 10 cents. But if you invested $1,000,000 that 10% gain becomes a net gain of $100,000. In the real world investors move massive amounts of wealth, sometimes hundreds of millions of dollars, into a currency for just a few hours. When the investment is large enough and the exchange rate shifts even a fraction of a percent, they can make massive returns (profit) off of a single good bet. Of course the inverse goes for if the value falls a fraction of a percent.
## Shifting the Graph
The more accurate nature of the assets-based model allows us to see how certain policies or events will shift the value of a currency.
### Interest Rates
Most emphasized in the lecture is the effect of interest rates. Investors, by the nature of their objective to make the most money they can, are always seeking the highest return on investment (ROI), while balancing how much risk they are taking. Assuming the factors that would contribute to a consideration about the risk of a currency remain the same, we can derive the following rule regarding interest rates and currency investment.

> [!tldr]+ As a rule
> As interest rates become more competitive, investors will invest in (buy) that currency. As interest rates become less competitive, investors will "leave" that currency (sell).

By more competitive and less competitive interest rates we mean the interest rate relative to another countries interest rate. Say Mexico has a 15% interest rate, this is a very high interest rate, naturally we would expect investment to flow into the peso. But if the USA sets their interest rate to 16% at the same time (assuming other factors are equal) investors will pick the dollar as their asset to invest in because their is a higher rate of return (profit).

In terms of the graph we can say that if you raise interest rates you can expect 1/e to rise. If you drop interest rates, 1/e will fall. This will shift our demand line

> [!img]+ Interest Rate Effect on a Asset-Based Model
> ![[Pasted image 20260325075116.png]]

I am going to ask for a moment that (if you do not already understand them) you ignore these new labels, I will return to them later. Worry first about these new (dashed) lines.

The line to the left, which intersects the supply line at 1/e<sub>2</sub>, represents a **depreciation** of the peso (the value went down). The line to the right, which intersects the supply line at 1/e<sub>1</sub>, represents an **appreciation** of the peso (the value increased). The appreciate or depreciate because demand is increasing or decreasing.

So why does demand shift? Now lets look at those labels. r<sub>M</sub> = the Mexican interest rate, r<sub>US</sub> = the American interest rate. Notice that r is lowercase, this is because r (interest rates) is *variable*. These things change. (Of course so do Z and E which are still uppercase but that is because this is simplified). 

When r<sub>M</sub> (Mexican interest rates) goes up the demand line shifts right. This higher (excess) demand, as we established way back in [[#Adding this to our supply and demand graph|this section]], is going to cause an **appreciation** of the peso. 

When r<sub>US</sub> (American interest rates) goes up this makes the peso **less competitive** and so we see the demand line shift left. The resulting excess supply is going to cause a **depreciation** of the peso.

**But what the fuck is that e<sup>e</sup>?** Frankly I didn't know at first (and honestly it is not SUPER important so skip this if you are overwhelmed you will be fine without it) but the e superscript indicates "expected". So e<sup>e</sup> really means what investors expect e (nominal exchange rate) to be in the future. Remember that this is only e, not 1/e (read more [[#But we use 1/*e*|here]] from earlier), so expecting a higher e is expecting a depreciation and expecting a lower e is expecting an appreciation.
# References
- [[WN_GPE Lec 5.pdf|Lecture 5 slides]]
