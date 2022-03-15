const express = require('express')
const app = express()

let entries = [
  {
    id: 1,
    name: 'Arto Hellas',
    number: '040-123456',
  },
  {
    id: 2,
    name: 'Ada Lovelace',
    number: '39-44-5323523',
  },
  {
    id: 3,
    name: 'Dan Abramov',
    number: '12-43-234345',
  },
  {
    id: 4,
    name: 'Mary Poppendieck',
    number: '39-23-6423122',
  },
]

const date = new Date()

app.get('/info', (req, res) => {
  res.send('<div>Phonebook has info for 2 people</div>' + `${date}`)
})

app.get('/api/persons', (req, res) => {
  res.json(entries)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
