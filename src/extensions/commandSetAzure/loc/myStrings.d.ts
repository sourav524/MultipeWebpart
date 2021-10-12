declare interface ICommandSetAzureCommandSetStrings {
  Command1: string;
  Command2: string;
}

declare module 'CommandSetAzureCommandSetStrings' {
  const strings: ICommandSetAzureCommandSetStrings;
  export = strings;
}
