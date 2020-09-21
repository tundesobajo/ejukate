import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  Param,
  Post,
  Put,
  Query,
  Redirect,
} from '@nestjs/common';

import { CreateAwardDto } from './dto/create-award';
import { UpdateAwardDto } from './dto/update-award';
import { AwardQueryDto } from './dto/award-query';

@Controller('awards')
export class AwardsController {
  @Post()
  @Header('Cache-Control', 'none')
  create(@Body() createDto: CreateAwardDto): string {
    return `Creates award with id ${createDto.id} and name ${createDto.name}`;
  }

  @Get()
  findAll(@Query() query: AwardQueryDto): string {
    return `Lists first ${query.limit} awards`;
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `Get award with id of ${id}`;
  }

  @Get(':id/view')
  @Redirect('', 302)
  view(@Param('id') id: string): unknown {
    return {
      url: `/awards/${id}`,
    };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdateAwardDto): string {
    return `Update award of id ${id} with name ${updateDto.name}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return `Deletes award of if ${id}`;
  }
}
