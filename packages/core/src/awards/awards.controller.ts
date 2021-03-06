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
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';

import { HttpExceptionFilter } from '../common/filters/http-exception.filter';
import { LoggingInterceptor } from '../common/interceptors/logging.interceptor';
import { AwardByIdPipe } from './pipes/award-by-id.pipe';
import { CreateAwardDto } from './dto/create-award';
import { UpdateAwardDto } from './dto/update-award';
import { AwardQueryDto } from './dto/award-query';
import { AwardsService } from './awards.service';
import { Award } from './type/Award';

@UseInterceptors(LoggingInterceptor)
@Controller('awards')
export class AwardsController {
  constructor(private awardsService: AwardsService) {}

  @Post()
  @Header('Cache-Control', 'none')
  create(@Body() createDto: CreateAwardDto): void {
    this.awardsService.create(createDto);
  }

  @Get()
  @UseFilters(new HttpExceptionFilter())
  findAll(@Query() query: AwardQueryDto): Award[] {
    return this.awardsService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id', AwardByIdPipe) award: Award): Award {
    return award;
  }

  @Get(':id/view')
  @Redirect('', 302)
  view(@Param('id') id: string): unknown {
    return {
      url: `/awards/${id}`,
    };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdateAwardDto): Award {
    return this.awardsService.update(id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): unknown {
    return this.awardsService.delete(id);
  }
}
