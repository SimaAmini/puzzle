import { Request } from '@configs/request';
import { mapLoginToDTO } from '../../mapper/map-login-to-dto';

export async function login(model) {
  const mapped = mapLoginToDTO(model);

  return await Request.post(`/auth/local`, { ...mapped });
}
