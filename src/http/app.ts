import Fastify, { FastifyInstance } from 'fastify'
import { fastifyCors } from '@fastify/cors'
import fastifyJwt from '@fastify/jwt'
import fastifyCookie from '@fastify/cookie'
import { userRoutes } from '../http/routes/user'
import { config } from "dotenv";
import { auth } from '../config/auth';
config();


class PingAPI {
  public app: FastifyInstance;

  constructor() {
    this.app = Fastify();
    this.app.register(fastifyCors, {
      origin: ['http://localhost:4000'],
      methods: ['GET', 'POST', 'PUT', 'PATCH'],
      credentials: true,
    })

    this.app.register(fastifyJwt, {
      secret: process.env.SECRET_KEY as string,
      cookie: {
        cookieName: 'refreshToken',
        signed: false,
      },
      sign: {
        expiresIn: auth.expiresIn,
      },
    });

    this.app.register(fastifyCookie)
    this.app.register(userRoutes);
  }
}

export default new PingAPI();