import { User } from './user-class';

export class Tweet {
  private _user: User;
  private _tweet: string;

  constructor(user: User, tweet: string) {
    this._user = user;
    this._tweet = tweet;
  }

  get user() {
    return this._user;
  }
  set user(user: User) {
    this._user = user;
  }
  get tweet() {
    return this._tweet;
  }
  set tweet(tweet: string) {
    this._tweet = tweet;
  }
}
