<h1>Factory : </h1>

### یک کلاسی داریم , که میخواد کار خاصی رو انجام بده
* مثلا : میخواد پیتزا سفارش بده
* مثلا : میخواد پیام بفرسته
* مثلا : میخواد درگاه وصل شه و کار پرداختو انجام بده

> (PRODUCT) همونطور که میبینید هر سه مثال یک محصول هستن
> 
> (Creator) اون کلاسی که میخواد از محصولمون استفاده کنه هم میشه 
> 

### کجاها ازش استفاده کنیم ؟
1- when you don't know beforehand the exact types and dependencies of the objects your code should work with (وقتی نمیدونی محصول ها چه دیپندنسی هایی دارن و چه کار هایی میخوان بکنن)
> eg : you don't know a publisher for linkeding need to linkedin API and instagram need to another api !

2- if you're working on a framework OR library with a way to extends its internal components
<br/>
شما یک امکانی مینویسی که کاربران اون فریمورک یا ماژول بتونن خودشون فکتوری های مورد نظرشون رو تولید کنن

3-save system resource by reusing existing objects
شما از فکتوری بجای ساخت اینستنس از هر کدوم محصول ها استفاده میکنی و ریسورس کمتری مصرف میکنی

4-DriverBase !
> a database connection can have different drivers (SQL , MYSQL) 
> an order can have differents driver (Mexic , Tellepizza , ...) 

-------------------------------------------------------------

