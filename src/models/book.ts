import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/db';

class Book extends Model {
  public id!: number;
  public title!: string;
  public author!: string;
  public description!: string;
  public publicationDate!: Date;
  public bookCover!: string;
  public overallRating!: number;
}

Book.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  publicationDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  bookCover: {
    type: DataTypes.TEXT,
  },
  overallRating: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },
}, {
  sequelize,
  modelName: 'Book',
});

export default Book;
