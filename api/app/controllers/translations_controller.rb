class TranslationsController < ApplicationController
  require 'net/https'
  require 'uri'
  require 'json'

  def translate
    uri = URI.parse("https://api-free.deepl.com/v2/translate")
    uri.query = URI.encode_www_form({ auth_key: Rails.application.credentials.deepl[:auth_key], text: params[:text], target_lang: params[:target_lang] })
    http = Net::HTTP.new(uri.host, uri.port)
    http.use_ssl = true
    http.verify_mode = OpenSSL::SSL::VERIFY_NONE

    request = Net::HTTP::Get.new(uri.request_uri)
    response = http.request(request)
    result = JSON.parse(response.body, {symbolize_names: true})
    translation = result.dig(:translations).first

    render json: translation
  end
end
