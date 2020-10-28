import { AwardsController } from './awards.controller';
import { AwardsService } from './awards.service';

describe('AwardsController', () => {
  let awardsController: AwardsController;
  let awardsService: AwardsService;

  beforeEach(() => {
    awardsService = new AwardsService();
    awardsController = new AwardsController(awardsService);
  });

  describe('findAll', () => {
    it('should return an array of awards', () => {
      const result = [{ id: 'bsc', name: 'Bachelor of Science' }];
      jest.spyOn(awardsService, 'findAll').mockImplementation(() => result);

      expect(awardsController.findAll({ limit: '1' })).toBe(result);
    });
  });
});
