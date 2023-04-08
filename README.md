### ログイン機能搭載<br>Next.js v13のテンプレート

#### 導入ライブラリについて
|  ライブラリ名  |  バージョン  |
| ---- | :----: |
|  TypeScript  |  4.9.4  |
|  Next.js  |  13.1.5  |
| ESLint | 8.32.0 | 
| NextAuth | 4.19.0 |
| Firebase | 9.16.0 | 
| TailwindCSS | 3.2.4 | 
| daisyUI | 2.50.0 | 

#### 環境設定ファイル(.envファイル)に設定する環境設定変数
| 環境変数名 | 内容 | 
| :----: | :----: |
| GOOGLE_ID | GoogleのCloudProjectのIDデータを入れる |
| GOOGLE_SECRET | GoogleのCloudProjectのSECRETデータを入れる |
| NEXTAUTH_SECRET | NextAuthの認証を暗号化するためのハッシュ値を入れる |
| FIREBASE_API_KEY |　Firebaseプロジェクトのapikey |
| FIREBASE_AUTHDOMAIN | Firebaseプロジェクトのauthdomain |
| FIREBASE_PJ_ID | Firebaseプロジェクトのprojectid |
| FIREBASE_STORAGE_BUCKET | Firebaseプロジェクトのstoragebucket |
| FIREBASE_MESSAGINGSEND_ID | Firebaseプロジェクトのmessagingsendid |
| FIREBASE_APP_ID | Firebaseプロジェクトのapplicationid |
| FIREBASE_MEASUREMENT_ID | Firebaseプロジェクトのmeasurementid |

#### このテンプレートリポジトリの目的
正直いちいちNext.jsの導入からTailwind入れて、daisyUI入れて、NextAuth入れて...
という手間が面倒くさかったので<br>テンプレートリポジトリにして使いまわしてやろう！！という魂胆です。

#### テンプレートに入ってるComponentについての説明
TailwindCSSの特徴的な面倒くささについて<br>**特定のクラスをいちいち記述しなければならない**
というものがある。<br>これは、Tailwindの機能の「新しいユーティリティクラスを作る」機能で実装してもよかったが、<br>それだとdaisyUIで設定されているユーティリティクラスとの衝突が発生する懸念があったので<br>コンポーネントとして定義して再利用できるようにした。<br>それがテンプレート内にあるコンポーネントである。

[MyFirebaseProject](https://console.firebase.google.com/u/1/project/test-nextauth-and-firebase/overview)

#### 以降、修正追記が行われる予定
