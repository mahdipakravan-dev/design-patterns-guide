# - (factory-example) Pizza Application

### چالش : انواع پیتزا داریم و میخوایم سفارش بدیم

> نکته : هر پیتزا پیاده سازی مخصوص خودش رو داره

## فانکشن زیر را داریم :

```js
    async function orderPizza(pizzaName: "Peperoni" | "Mexican" | "Vegtable") {
    let pizza;
    switch (pizzaName) {
        case "Peperoni" :
            pizza = new PeperoniPizza();
            break;
        case "Mexican" :
            pizza = new MexicanPizza();
            break;
        case "Vegtable" :
            pizza = new VegtablePizza();
            break;
    }
    pizza.prepare()
    pizza.bake();
    pizza.cut();
    pizza.box();
}
```

### 1- Product
>PeperoniPizza , MexicanPizza 

### 2- Factories
>PeperoniPizzaFactory , MexicanPizzaFactory
