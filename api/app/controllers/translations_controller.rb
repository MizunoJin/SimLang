class TranslationsController < ApplicationController
  def translate
    render json: { a: 123 }
  end
end
