<h1>Abstract Factory : </h1>
<p> 
    <u>لطفا اول در مورد دیزاین پترن فکتوری مطالعه کنید بعد بیاین سراغ این دیزاین پترن</u>
</p>

<p>
    یادتونه انواع محصول داشتیم که برای هر نوع میومدیم یک فکتوری میساختیم که اون محصول رو بر میگردوند ؟
    <br/>
    حالا ما انواعی از محصول هم داریم ,  یعنی برای محصولاتی که داریم زیر مجموعه بسازید
</p>

###تو ذهنتون سه تا زیر مجموعه برای محصولات زیر بسازید :
 
* mexican pizza
* telegramPublisher
* vipAccount

بعد از اینکه ساختین تشریف بیارین پایین و جواب رو ببینید

<br/>
<br/>
<br/>
<br/>

```
    factory : we have different products
        + pizza example : mexican pizza , peperoni pizza
        + publisher example : telegram publisher , instagram publishe
        + account example : vip accout , silver account , bronze account
    abstract factory : we have different type of product !
        + pizza example : 
            mexican pizza : mexican special pizza , mexican simple pizza
            peperoni pizza : peperoni american pizza , peperoni special pizza , peperoni black pizza!
        + publisher example :
            telegram : iranianTelegramPublisher , englandTelegramPublisher
            instagram : iranianInstagramPublisher , englandInstagramPublisher
        + account example : 
            vip account : vipBoyAccount , vipGirlAccount
            gold account : goldBoyAccount , goldGirlAccount
            etc ...
        
```
