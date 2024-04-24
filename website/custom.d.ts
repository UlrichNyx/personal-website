// custom.d.ts
declare module '*.glb' {
  const value: string;
  export default value;
}
declare namespace NodeJS {
  interface Require {
    context: (
      directory: string,
      useSubdirectories: boolean,
      regExp: RegExp,
    ) => {
      keys: () => string[];
      <T>(id: string): T;
    };
  }
}
