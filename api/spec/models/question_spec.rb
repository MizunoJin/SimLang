require 'rails_helper'

RSpec.describe Question, type: :model do
  it "is valid with title and body" do
    question = build(:question)
    expect(question).to be_valid
  end

  it "is invalid without title" do
    question = build(:question, title: nil)
    expect(question).to be_invalid
  end

  it "is invalid without body" do
    question = build(:question, body: nil)
    expect(question).to be_invalid
  end

  it "is invalid with too long title" do
    question = build(:question, title: "a" * 101)
    expect(question).to be_invalid
  end

  it "is invalid with too long body" do
    question = build(:question, body: "a" * 1001)
    expect(question).to be_invalid
  end
end
