import { PartialType } from '@nestjs/swagger';
import { CreateFileserverDto } from './create-fileserver.dto';

export class UpdateFileserverDto extends PartialType(CreateFileserverDto) {}
