declare module 'react-events-listeners' {
  type Callback = (data: any) => void;

  class EventRegister {
    public static addEventListener(eventName: string, callback: Callback): string | boolean

    public static removeEventListener(id: string): boolean

    public static removeAllListeners(): boolean

    public static emitEvent(eventName: string, data?: any): void

    public static hasListener(eventName: string): boolean

    // shortener
    public static on(eventName: string, callback: Callback): string | boolean

    public static rm(id: string): boolean

    public static rmAll(): boolean

    public static emit(eventName: string, data?: any): void
  }

  export { EventRegister };
}
