class GreetingsController < ApplicationController
  def random_greeting
    greeting = Greeting.all.sample
    render json: { greeting: }
  end
end
