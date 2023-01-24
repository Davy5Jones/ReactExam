abstract class Config {
  public abstract urls: string;
}

class Development extends Config {
  public urls = "https://www.googleapis.com/books/v1/volumes";
}

class Production extends Config {
  public urls =
    "";
}

const global =
  process.env.NODE_ENV === "development" ? new Development() : new Production();
export default global;
