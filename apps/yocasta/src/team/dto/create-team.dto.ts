import { IsArray, IsNotEmpty } from 'class-validator'

export class CreateTeamDto {
  @IsArray()
  @IsNotEmpty()
  members: string[]
}
