import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type JobDocument = Job & Document;

@Schema()
export class Job {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  address: string;

  @Prop()
  gender: string;

  @Prop()
  contactNo: string;

  @Prop()
  educationDetails: Array<any>;

  @Prop()
  workExperience: Array<any>;

  @Prop()
  knownLanguages: Array<any>;

  @Prop()
  technicalExperience: Array<any>;

  @Prop()
  preference: Array<any>;
}

export const JobSchema = SchemaFactory.createForClass(Job);