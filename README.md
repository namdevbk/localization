In this demo, we would build a simple website with express and jade. It has two languages supported (English and Chinese). In main page, user can choose the language options, and after choosing, we would like to keep the user option into cookie, therefore, we can use it for the rest of pages.

i18n : a light-weight i18n translation module for nodejs. It supports dynamic json storage and different node template engine.

Routes/API

http://localhost:8080/zh => Chinese

http://localhost:8080/en => English


In /zh and /en routes, we use cookie-parser to set i18n field to related language value, then in / route, we use res.setLocale function which provided by i18n middleware to dynamic set the language our site used. When rendering the template, we pass response object as a option data into the template, therefore, we can use res.__ function in our template

JSON Files

//en.json

{
    "Welcome": "Hi, welcome to our site",
    "Language": "Please choose your language",
    "Contact Information" : "1 Elf rd, Unicorn Village, Wonderland, Earth"
}
//zh.json

{
    "Welcome": "欢迎",
    "Language": "请选择语言",
    "Contact Information" : "一号 精灵路, 独角兽村, 幸福国, 地球"
}

both files should have same fields, and only the field values are different