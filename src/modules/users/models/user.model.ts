import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: '1', description: 'unique id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Max', description: 'name user' })
  @Column({ type: DataType.STRING })
  name: string;

  @ApiProperty({ example: 'user@mail.ru', description: 'mailing address' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @ApiProperty({ example: 'root123', description: 'user password' })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @ApiProperty({ example: '+7 000 0000000', description: 'user phone' })
  @Column({ type: DataType.STRING })
  phone?: string;

  @ApiProperty({ example: 'Moscow', description: 'user address' })
  @Column({ type: DataType.STRING })
  address?: string;

  @ApiProperty({
    example: 'Some text about user',
    description: 'user description',
  })
  @Column({ type: DataType.STRING })
  about?: string;
}
