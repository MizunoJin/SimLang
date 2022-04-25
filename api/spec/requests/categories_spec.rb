require 'rails_helper'

RSpec.describe "Categories", type: :request do
  let!(:category) { create(:category) }

  describe "GET /index" do
    it "returns http success" do
      get categories_path
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /show" do
    it "returns http success" do
      get categories_path(category)
      expect(response).to have_http_status(:success)
    end
  end

end
