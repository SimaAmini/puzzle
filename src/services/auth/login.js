import { Request } from '@core/configs/request';

import { mapLoginToDTO } from '../../mappers/map-login-to-dto';

export async function login(model) {
  const mapped = mapLoginToDTO(model);

  return await Request.post(`/auth/local`, { ...mapped });
}
