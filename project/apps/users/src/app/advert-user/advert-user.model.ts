import {Document} from 'mongoose';
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {User, UserRole} from '@project/shared/shared-types';

@Schema({
  collection: 'users',
  timestamps: true,
})
export class AdvertUserModel extends Document implements User {
  @Prop()
  public avatar: string;

  @Prop({
    required: true,
  })
  public dateBirth: Date;

  @Prop({
    required: true,
    unique: true,
  })
  public email: string;

  @Prop({
    required: true,
  })
  public name: string;

  @Prop({
    required: true,
  })
  public city: string;

  @Prop({
    required: true,
  })
  public passwordHash: string;

  @Prop({
    required: true,
    type: String,
    enum: UserRole,
    default: UserRole.Customer,
  })
  public role: UserRole;
}

export const AdvertUserSchema = SchemaFactory.createForClass(AdvertUserModel);
