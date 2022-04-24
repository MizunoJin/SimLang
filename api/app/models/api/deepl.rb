# frozen_string_literal: true

module Api
  class Deepl
    include ActiveModel::Model
    require 'net/https'
    require 'uri'
    require 'json'

    attr_accessor :text, :target_lang

    validates :text, presence: true
    validates :target_lang, presence: true

    def translate
      uri = set_url(text: text, target_lang: target_lang)
      http = fetch_http(uri: uri)
      fetch_translation(uri: uri, http: http)
    end

    private

    def set_url(text:, target_lang:)
      uri = URI.parse('https://api-free.deepl.com/v2/translate')
      uri.query = URI.encode_www_form({ auth_key: Rails.application.credentials.deepl[:auth_key], text: text,
                                        target_lang: target_lang })
      uri
    end

    def fetch_http(uri:)
      http = Net::HTTP.new(uri.host, uri.port)
      http.use_ssl = true
      http.verify_mode = OpenSSL::SSL::VERIFY_NONE
      http
    end

    def fetch_translation(uri:, http:)
      request = Net::HTTP::Get.new(uri.request_uri)
      response = http.request(request)
      result = JSON.parse(response.body, { symbolize_names: true })
      result[:translations].first
    end
  end
end
