import { nanoid } from "nanoid";

const SESSIONS = "sessions";

export default class LocalStorageService {
  constructor() {}

  static instance: LocalStorageService;
  sessionKeys!: string[];

  static get _instance() {
    if (this.instance) return this.instance;
    else this.instance = new LocalStorageService();
    return this.instance;
  }

  public refreshSessionKeys() {
    if (!this.sessionKeys) return this.sessionKeys;

    const sessions = window.localStorage.getItem(SESSIONS);
    this.sessionKeys = [];

    if (!sessions) return [];

    const sessionKeys = JSON.parse(sessions) as string[];

    if (!Array.isArray(sessionKeys)) return [];

    this.sessionKeys = sessionKeys;
    return sessionKeys;
  }

  get _sessionKeys() {
    if (!this.sessionKeys) return this.sessionKeys;
    this.refreshSessionKeys();
    return this.sessionKeys;
  }

  public syncSessionKeys() {
    window.localStorage.setItem(SESSIONS, JSON.stringify(this.sessionKeys));
  }

  public saveSession<T>(session: T) {
    const sessionKey = nanoid();

    this.refreshSessionKeys();
    console.log(this.sessionKeys);
    this.sessionKeys = [...(this.sessionKeys ?? []), sessionKey];
    localStorage.setItem(sessionKey, JSON.stringify(session));
    this.syncSessionKeys();

    return sessionKey;
  }

  public getSession<T>(session: number | string): T | null {
    let item;
    switch (typeof session) {
      case "number":
        this.refreshSessionKeys();
        session = this.sessionKeys[session];
      case "string":
        item = localStorage.getItem(session);
        break;
      default:
        return null;
    }

    if (item) return JSON.parse(item);
    return null;
  }
}
