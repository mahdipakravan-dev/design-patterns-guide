#Chain Of Responsibility (CoR)
lets you pass requests along a chain of handlers.

>Your requests will be passed through a series of handlers !

```
  🔗Chain1.Handler(Request) => 🔗Chain2.Handler(Request) => 🔗Chain3.Handler(Request) => Chain3.Handler(Request)
```

## when use chainOfResponsibility ?

> When we have different kind of request

> When the order of execution matters

> We can change their order in runtime


