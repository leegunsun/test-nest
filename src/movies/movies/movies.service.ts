import { Injectable } from '@nestjs/common'

@Injectable()
export class MoviesService {
  getMoviesData() {
    const result = {
      '서울의 봄': '193u02395',
      광해: '193u02395',
      야인시대: '193u02395',
      역도: '193u02395',
      검은새제들: '193u02395'
    }

    return result
  }
}
