# frozen_string_literal: true

User.create(email: "john@example.com", password: "password")

basic = Category.create(title: "基本", description: "基本的な会話について学びましょう")
hobby = Category.create(title: "趣味", description: "あなたの好きなものについて教えてください")
travel = Category.create(title: "旅行", description: "今までいったところで一番おすすめの場所はどこですか")

basic.questions.create(title: "挨拶", body: "こんにちは")
basic.questions.create(title: "天気", body: "いい天気ですね")
hobby.questions.create(title: "趣味", body: "趣味はなんですか")
