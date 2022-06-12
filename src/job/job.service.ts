import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Job, JobDocument } from './job.schema';


@Injectable()
export class JobService {
    constructor(@InjectModel(Job.name) private jobModel: Model<JobDocument>) {}

    async createJob(reqPayload:any): Promise<any> {
        return new this.jobModel(reqPayload)
    }
    
    async editJob(reqPayload:any): Promise<any> {
        const foundJob = await this.jobModel.findById({ _id: reqPayload._id}).lean().exec()

        if(foundJob) {
            return await this.jobModel.findByIdAndUpdate({ _id: reqPayload._id }, reqPayload, {new:true})
        }
        else {
            return 'No such job found'
        }
    }

    async deleteJob(id:any): Promise<any> {
        return this.jobModel.findByIdAndRemove({ _id: id},{_id:id})
    }
}
