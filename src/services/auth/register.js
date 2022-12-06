import { Request } from '@core/configs/request';
import { mapRegisterToDTO } from '../../mapper/map-register-to-dto';

export async function register(model) {
  const mapped = mapRegisterToDTO(model);

  return await Request.post('/auth/local/register', { ...mapped });
}
