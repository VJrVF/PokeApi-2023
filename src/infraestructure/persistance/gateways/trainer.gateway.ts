import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TrainerDTO } from '../dto/trainer.dto';
import { Trainer, TrainerDocument } from '../schemas/trainer.schema';

@Injectable()
export class TrainerGateway {
  constructor(
    @InjectModel(Trainer.name) private trainerModel: Model<TrainerDocument>,
  ) {}

  async find(trainer: TrainerDTO): Promise<TrainerDocument[]> {
    return this.trainerModel.find({
      ...trainer,
    });
  }

  async list(): Promise<TrainerDocument[]> {
    return this.trainerModel.find();
  }

  async create(trainer: TrainerDTO): Promise<TrainerDocument> {
    const model = new this.trainerModel(trainer);
    return model.save();
  }

  async filterByName(input: string): Promise<TrainerDocument[]> {
    const regex = new RegExp(`^${input}`, 'g');
    return this.trainerModel.find({ name: { $in: [regex] } });
  }
}
