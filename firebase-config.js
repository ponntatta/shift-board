// Firebase の設定。Firebase コンソール →（歯車）プロジェクトの設定 → マイアプリ の「SDK の設定と構成」にある値を入れます。
// ここに入る値は公開されても問題ないものです（データは firestore.rules で守ります）。
window.SHIFT_CONFIG = {
  firebase: {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
  },
  // 管理者（店長）の ID。Google でログインすると画面に表示されます。firestore.rules の ADMIN_UID と同じ値にします。
  adminUid: "",
};
