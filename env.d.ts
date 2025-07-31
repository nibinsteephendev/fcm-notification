declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    APP_NAME: string;
    NEXT_PUBLIC_FIREBASE_KEY: string;
  }
}
