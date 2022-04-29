# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Category, type: :model do
  it 'is valid with title and description' do
    category = build(:category)
    expect(category).to be_valid
  end

  it 'is invalid without title' do
    category = build(:category, title: nil)
    expect(category).to be_invalid
  end

  it 'is invalid without description' do
    category = build(:category, description: nil)
    expect(category).to be_invalid
  end

  it 'is invalid with too long title' do
    category = build(:category, title: 'a' * 101)
    expect(category).to be_invalid
  end

  it 'is invalid with too long description' do
    category = build(:category, description: 'a' * 1001)
    expect(category).to be_invalid
  end
end
