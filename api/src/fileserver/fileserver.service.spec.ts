import { Test, TestingModule } from '@nestjs/testing';
import { FileserverService } from './fileserver.service';

describe('FileserverService', () => {
  let service: FileserverService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FileserverService],
    }).compile();

    service = module.get<FileserverService>(FileserverService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
