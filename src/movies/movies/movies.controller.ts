import { Controller, Get } from '@nestjs/common'
import { MoviesService } from './movies.service'

@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Get('/')
  async getMoviesData() {
    const moviesData = this.moviesService.getMoviesData()
    return { payload: moviesData }
  }
}
