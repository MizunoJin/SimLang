# frozen_string_literal: true

class AnswersController < ApplicationController
  def fetch_answer
    deepl = Api::Deepl.new(text: params[:text], target_lang: params[:target_lang])
    translation = deepl.translate
    render json: translation
  end
end
