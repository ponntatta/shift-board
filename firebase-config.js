// Firebase の設定。Firebase コンソール →（歯車）プロジェクトの設定 → マイアプリ の「SDK の設定と構成」にある値を入れます。
// ここに入る値は公開されても問題ないものです（データは firestore.rules で守ります）。
window.SHIFT_CONFIG = {
  firebase: {
    apiKey: "AIzaSyCvaF_a6ApwlZjhCjomXP6aq8cPA0-SIXU",
    authDomain: "shift-99986.firebaseapp.com",
    projectId: "shift-99986",
    storageBucket: "shift-99986.firebasestorage.app",
    messagingSenderId: "1074474612512",
    appId: "1:1074474612512:web:8bf9bf5305ea8effa4c945",
  },
  // 公開しているページのアドレス（招待リンクに使う）
  publicUrl: "https://ponntatta.github.io/shift-board/",
  // 管理者（店長）の Google アカウント。firestore.rules の isAdmin() と同じアドレスにします。
  adminEmail: "masaru20040201@gmail.com",
};
