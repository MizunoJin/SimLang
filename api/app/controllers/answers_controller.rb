# frozen_string_literal: true

class AnswersController < ApplicationController
  def fetch_answer
    require 'uri'
    require 'net/http'
    require 'json'

    url = URI.parse("https://api.textgears.com/grammar")
    url.query = URI.encode_www_form({ key: Rails.application.credentials.textgears[:auth_key], text: params[:foreign_text], target_lang: params[:target_lang] })

    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true
    http.verify_mode = OpenSSL::SSL::VERIFY_NONE

    request = Net::HTTP::Post.new(url)
    response = http.request(request)
    result = JSON.parse(response.body, { symbolize_names: true })

    deepl = Api::Deepl.new(text: params[:japanese_text], target_lang: params[:target_lang])
    translation = deepl.translate
    render json: translation
  end
end
