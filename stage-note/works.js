// 作品名・ジャンル・紹介文・画像・公式リンクをここで編集します。
const works = [
  {
    title: "ぼっち・ざ・ろっく！", genre: "バンドアニメ",
    text: "ひとりでギターを弾き続けてきた後藤ひとり。ドラマーの虹夏との出会いが、練習部屋と結束バンドのステージをつなぐ。",
    image: "band.svg", alt: "ピンクの背景に描いたエレキギター（仮画像）",
    url: "https://bocchi.rocks/tv/introduction/"
  },
  {
    title: "ラブライブ！スーパースター!!", genre: "アイドルアニメ",
    text: "結ヶ丘女子高等学校で生まれたスクールアイドルグループ、Liella!。歌をきっかけに集まった生徒たちが、仲間と一緒にステージに立つ。",
    image: "idol.svg", alt: "青い背景に描いた星形のペンライト（仮画像）",
    url: "https://www.lovelive-anime.jp/yuigaoka/story/"
  }
];
const cards = document.querySelector("#cards");
for (const work of works) {
  const card = document.createElement("article");
  card.innerHTML = '<figure><img><figcaption>仮画像</figcaption></figure><section><small></small><h3></h3><p></p><a target="_blank" rel="noopener">作品公式サイト ↗</a></section>';
  const image = card.querySelector("img");
  image.src = work.image;
  image.alt = work.alt;
  card.querySelector("small").textContent = work.genre;
  card.querySelector("h3").textContent = work.title;
  card.querySelector("p").textContent = work.text;
  card.querySelector("a").href = work.url;
  cards.append(card);
}
