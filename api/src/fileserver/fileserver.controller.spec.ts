import { Test, TestingModule } from '@nestjs/testing';
import { FileserverController } from './fileserver.controller';
import { FileserverService } from './fileserver.service';

describe('FileserverController', () => {
  let controller: FileserverController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FileserverController],
      providers: [FileserverService],
    }).compile();

    controller = module.get<FileserverController>(FileserverController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
