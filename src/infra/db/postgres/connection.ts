//Singleton Pattern
export class PostgresConnection {
  private static instance?: PostgresConnection;
  private constructor() {}
  static getInstance(): PostgresConnection {
    if (PostgresConnection.instance === undefined)
      PostgresConnection.instance = new PostgresConnection();
    return PostgresConnection.instance;
  }
}
