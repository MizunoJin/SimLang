# frozen_string_literal: true

class AnswersController < ApplicationController
  def fetch_answer
    textgears = Api::Textgears.new(text: params[:foreign_text], language: params[:target_lang])
    check = textgears.check

    deepl = Api::Deepl.new(text: params[:japanese_text], target_lang: params[:target_lang])
    translation = deepl.translate
    render json: translation
  end
end
