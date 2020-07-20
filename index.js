const express=require('express')
const app=express()
const port=3000

app.get('/product1',(req,res) => res.send('Cost of Green Salad is $7.99/ea'))


app.get('/product2',(req,res) => res.send('Cost of Thai Style Chicken Salad is $8.99/ea'))


app.get('/product3',(req,res) => res.send('Cost of Roasted Vegetable Grain Bowl is $10.00/ea'))

app.listen(port,() => console.log('App is listening on port 3000'))
