import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Tweet } from './entities/tweet.entity';
import { CreateUserDto } from './dtos/user.dto';
import { CreateTweetDto } from './dtos/tweet.dto';

@Injectable()
export class AppService {
  private users: User[];
  private tweets: Tweet[];
  constructor() {
    this.users = [];
    this.tweets = [];
  }

  getHello(): string {
    return "I'm okay!";
  }
  getUsers() {
    return this.users;
  }
  getUserByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }
  createUser(body: CreateUserDto) {
    const user = new User(body.username, body.avatar);
    this.users.push(user);
    return user;
  }
  createTweet(body: CreateTweetDto) {
    const userExists = this.users.find(
      (user) => user.username === body.username,
    );
    if (userExists) {
      const newTweet = new Tweet(body.username, userExists.avatar, body.tweet);
      return this.tweets.push(newTweet);
    }
    return null;
  }
  getAllTweets() {
    return this.tweets.slice(this.tweets.length - 15);
  }
  getTweetsByUsername(username: string) {
    return this.tweets.filter((t) => t.username === username);
  }
  getTweetByPagination(page: number) {
    const tweetsPerPage = 15;
    const startIndex = (page - 1) * tweetsPerPage;

    return this.tweets.slice(startIndex, startIndex + tweetsPerPage);
  }
}
