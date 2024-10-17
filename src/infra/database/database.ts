import { Sequelize } from 'sequelize-typescript'

export const sequelize = new Sequelize({
  host: "ep-aged-hat-a59c5rvz.us-east-2.aws.neon.tech",
  dialect: "postgres",
  port: 5432,
  logging: false,
  dialectOptions: {
    project: "ep-aged-hat-a59c5rvz",
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

sequelize.addModels([]);