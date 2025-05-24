import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export interface IUser {
    username: string;
    password: string;
    email: string;
  }

@Schema({ collection: 'users', timestamps: true }) // Указываем имя коллекции и свойство для автоматической записи времени в базу
export class UserModel extends Document implements IUser {
  @Prop({ required: true }) // Говорит, о том, что это обязательные данные
  username: string;
    
  @Prop({ required: true })
  password: string;
    
  @Prop({ required: true })
  email: string;
}
export const UserSchema = SchemaFactory.createForClass(UserModel); // Создаём схему.