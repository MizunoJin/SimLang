# frozen_string_literal: true

class TopController < ApplicationController
  def hello
    render json: "Hello World"
  end
end
