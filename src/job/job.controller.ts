import { Body, Controller, Post, Put } from '@nestjs/common';
import { JobService } from './job.service';

@Controller('/api/job')
export class JobController {
    constructor(private jobService: JobService) {}

    @Post('/createJob')
    async create(@Body() req): Promise<any> {
        console.log('inside the API ', req);
        
        return this.jobService.createJob(req);
    }

    @Put('/updateJob')
    async update(@Body() req): Promise<any> {
        return this.jobService.editJob(req)
    }

    @Put('/deleteJob')
    async deleteJob(@Body() req): Promise<any> {
        return this.jobService.deleteJob(req)
    }
}
