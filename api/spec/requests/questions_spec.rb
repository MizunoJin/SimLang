# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Questions', type: :request do
  let!(:question) { create(:question) }

  describe 'GET /index' do
    it 'returns 200 response' do
      get questions_path
      expect(response).to have_http_status(200)
    end
  end

  describe 'SHOW /:id' do
    it 'returns 200 response' do
      get question_path(question)
      expect(response).to have_http_status(200)
    end
  end
end
