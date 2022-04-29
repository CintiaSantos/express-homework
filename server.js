const express = require('express')
const app = express()
const PORT = 3000
// respond with "hello world" when a GET request is made to the homepage
app.get('/greetings/:name', (req, res) => {
  res.send('hello there ' + req.params.name)
})

app.get('/tip/:total/:percentage', (req, res) => {
    res.send('Tip: ' + req.params.total*req.params.percentage/100)
  })

  app.get('/magic/:/magic/Will%20I%20Be%20A%20Millionaire', (req, res) => {
      let answer = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    res.send('Tip: ' + req.params.total*req.params.percentage/100)
  })

  const responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ];
  
  app.get("/magic/:question", (req, res) => {
    const question = req.params.question;
    const response = responses[Math.floor(Math.random() * responses.length)];
    res.send(`<h1>
    Your Question: ${question}?<br>
    Magic Answer: ${response}
    </h1>`);
  });
  

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })

  console.log()