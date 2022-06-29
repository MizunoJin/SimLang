# frozen_string_literal: true

User.create(email: "john@example.com", password: "password")

basic = Category.create(title: "基本", description: "基本的な会話について学びましょう")
hobby = Category.create(title: "趣味", description: "あなたの好きなものについて教えてください")
interview = Category.create(title: "面接", description: "面接を外国語で練習しましょう")

basic.questions.create(title: "挨拶", body: "こんにちは。今日はいい天気ですね。")
basic.questions.create(title: "天気", body: "最近暑くなってきましたね。夏は好きですか？")
basic.questions.create(title: "仕事", body: "お仕事は何をされていますか？その仕事は気に入っていますか？")
basic.questions.create(title: "居住地", body: "どちらにお住まいですか？職場からはどれくらい離れていますか？")
hobby.questions.create(title: "趣味", body: "休日はいつも何をして過ごしていますか？")
hobby.questions.create(title: "映画", body: "映画は見ますか？一番おすすめの映画について教えてください。")
hobby.questions.create(title: "読書", body: "本は読みますか？一番おすすめの本について教えてください")
interview.questions.create(title: "自己紹介", body: "ご自身について簡単に自己紹介してください")
interview.questions.create(title: "志望理由", body: "あなたはなぜこの会社に興味をもったのですか？")
interview.questions.create(title: "キャリア", body: "5年後、どのような仕事/職務に取り組んでいたいと思いますか？")
interview.questions.create(title: "長所と短所", body: "あなたの長所と短所を教えてください")
