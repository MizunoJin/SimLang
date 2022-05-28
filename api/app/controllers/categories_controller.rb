# frozen_string_literal: true

class CategoriesController < ApplicationController
  def index
    render json: Category.all
  end

  def show
    category = Category.find(params[:id])
    render json: { category: category, questions: category.questions }
  end
end
