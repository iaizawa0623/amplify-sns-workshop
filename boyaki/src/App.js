import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { I18n } from "aws-amplify";
import awsExports from './aws-exports';
Amplify.configure(awsExports);


// 以下のような形で日本語と英語を紐づけた辞書を作成する
const dict = {
  ja: {
    "Sign In": "サインイン",
    "Sign in": "サインイン",
    "Create Account": "サインアップ",
    "Username": "ニックネーム",
    "Password": "パスワード",
    "Forgot your password?": "パスワードを忘れた場合",
    "Confirm Password": "パスワードを確認",
    "Email": "メールアドレス",
    "Reset your password": "パスワードをリセット",
    "Enter your username": "登録したニックネーム",
    "Send code": "コードを送信",
    "Back to Sign In": "サインインに戻る",
    "User already exists": "このニックネームは既に使われています"
  },
};

// 作成した辞書を渡して反映させる
I18n.putVocabularies(dict);
I18n.setLanguage("ja");

export default function App() {
  return (
    <div>
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
    </div>
  );
}