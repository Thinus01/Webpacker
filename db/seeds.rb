# frozen_string_literal: true

greetings = [
  'Hello, how are you?',
  'Hi there! Welcome!',
  'Greetings and salutations!',
  'Hey, nice to see you!',
  'Hola! ¿Cómo estás?'
]

greetings.each do |content|
  Greeting.create(content:)
end
